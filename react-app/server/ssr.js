const puppeteer = require('puppeteer');

const RENDER_CACHE = new Map();

async function ssr(url, browserWSEndpoint) {
    if (RENDER_CACHE.has(url)) {
        return { html: RENDER_CACHE.get(url), ttRenderMs: 0 }
    }

    const start = Date.now();

    const browser = await puppeteer.connect({ browserWSEndpoint });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', req => {
        // Ignore requests for resources that don't produce DOM
        // (images, stylesheets, media).
        // Don't load Google Analytics lib requests so pageviews aren't 2x.
        const blacklist = ['www.google-analytics.com', '/gtag/js', 'ga.js', 'analytics.js'];
        if (blacklist.find(regex => req.url().match(regex))) {
            return req.abort();
        }

        const whitelist = ['document', 'script', 'xhr', 'fetch'];
        if (!whitelist.includes(req.resourceType())) {
            return req.abort();
        }

        // 3. Pass through all other requests.
        req.continue();
    })
    try {
        // networkidle0 waits for the network to be idle (no requests for 500ms).
        // The page's JS has likely produced markup by this point, but wait longer
        // if your site lazy loads, etc.
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.waitForSelector('.App'); // ensure #posts exists in the DOM.
    } catch (err) {
        console.log(err);
        throw new Error('page.goto/waitForSelector timed out.');
    }
    const html = await page.content();
    await page.close();
    const ttRenderMs = Date.now() - start;
    console.info(`Headless rendered page in: ${ttRenderMs}ms`);
    //RENDER_CACHE.set(url, html);
    return { html, ttRenderMs };
}

module.exports = ssr;