const express = require('express');
const puppeteer = require('puppeteer');
const ssr = require('./ssr');
const fs = require('fs');
const path = require('path');

const app = express();
let browserWSEndpoint = null;


app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.get('/*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.post('/ssr/*', async (req ,res) => {
    if(!browserWSEndpoint) {
        const browser = await puppeteer.launch({ headless: true });
        browserWSEndpoint = await browser.wsEndpoint();
    }
    const url =  `${req.protocol}://${req.get('host')}${req.url.replace('ssr/', '')}`;
    const {html} = await ssr(url, browserWSEndpoint);
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
});

app.listen(3001);