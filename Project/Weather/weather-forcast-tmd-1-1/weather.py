import json   
# urllib.request to make a request to api 
import requests
from jinja2 import Template
import pandas as pd
from datetime import datetime
from datetime import date
import sys 

def daily_openweather(location):
    api_key = 'bf5d2ca68d5cba107e1017360c1e80d9'
    url = "http://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}".format(location, api_key)
    r = requests.get(url)
    
    return r.json()

# Forcast 7 วัน กรมอุตุนิยมวิทยา
def forcast_tmd(amphoe="",province="สมุทรปราการ"):
    url = "https://data.tmd.go.th/api/WeatherForecast7Days/V1/"

    querystring = {"province":{province}, "amphoe":{amphoe}}

    headers = {
        'accept': "application/json",
        'authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk1OTQxMGY5YmE3ODI1MDRlNjRiMWRiNGIyYTJkYzkwM2IyM2I1ZTJhODE0YWMxZDZiZGIzODc5ODQ2ODcwNDZkNmRmOTVlNjUyY2QzOTA3In0.eyJhdWQiOiIyIiwianRpIjoiOTU5NDEwZjliYTc4MjUwNGU2NGIxZGI0YjJhMmRjOTAzYjIzYjVlMmE4MTRhYzFkNmJkYjM4Nzk4NDY4NzA0NmQ2ZGY5NWU2NTJjZDM5MDciLCJpYXQiOjE1NjkzMzcxMTEsIm5iZiI6MTU2OTMzNzExMSwiZXhwIjoxNjAwOTU5NTExLCJzdWIiOiI2MTciLCJzY29wZXMiOltdfQ.EEeayHBntp43OkPMMQQ9XA5cMmK_BezcYAh18VmdFa5hs7ZteFWj98MQBzX0e1fgMOV34dYrbdzQGv_IF5JCmlpPdiqxcFqiNuVXarnIVLRsShhw92HcdCvKPmbDomJGJy6dZ0FoFES5gwtFYkLZxmN0uh12br31j-5Io8cg8hWG-pcpG-2AIab4Abqb_8IGxZAcX-OD-Gi6K7v0YHFBh1gmsJdsoB7smUV2u_3jmtuyEF8AJu1uN46KJqqFWoKhaQPK11ygDRFeseUqsfrwG1SEdororNocm5C4aWqy17R--Q8noSH0mx4HDF2PtB3di02cCkKgODmw0dkwVe0kyC1YCiaVY83vrAQs6X1-WNLrB5boT3nqPoHLGZdEKFpmtvuYaV24CLlMw3bR0OtVx7edU1gYUoXodDNTZD-trO1wkuBRg8cVStwbe6lQpEF4VAwpTZiQGOQbNun1Jj2S4jR8w5LEZw8aP_55FT5gUJDRRgbTTb4cxwILB1u2TtHIZ3_XzfT1oV-u4EQXPE6rQDsDsS9Duymsotqf7RuTBNEfB6E3Zas5rL3K8_M8B5V2_oT5Pb6gYXe2pFinkO_CwTkH5Itm132qS9pLad691qsmU1KRXEPSslfTYi4GRNKvsE2y2STbgzH2mTzYrZnfC2E8sbXHayftKJ1rFfd89AM",
    }
    response = requests.request("GET", url, headers=headers, params=querystring)
    data = response.json()
    return data
