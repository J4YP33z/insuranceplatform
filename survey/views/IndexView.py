from django.http import HttpResponse, HttpResponseBadRequest
import requests
from insurance_survey.settings import SSR_SERVER, BASE_DIR
import re
import os


def index(request):
    if request.method == "GET":
        user_agent = request.META["HTTP_USER_AGENT"]
        if re.search(r'bot|crawl|spider|crawling|slurp|bing|facebook|favicon|fetcher|voila', user_agent, re.IGNORECASE):
            origin_path = request.get_full_path()
            ssr_url = SSR_SERVER + origin_path
            ssr_req = requests.post(ssr_url)
            html = ssr_req.text
            return HttpResponse(html)
        else:
            with open(os.path.join(BASE_DIR, "react-app/build/index.html")) as f:
                response = HttpResponse(f.read())
            return response
    else:
        return HttpResponseBadRequest("%s not allowed" % request.method)