from flask import Flask, render_template, request

# import json to load JSON data to a python dictionary
import json

# urllib.request to make a request to api
import requests
from jinja2 import Template
import pandas as pd
from datetime import datetime
from datetime import date
import datetime as dt
import sys 

from master_data import *
from weather import *
from dist_thailand import *


app = Flask(__name__)

dist = import_dist()
dist_len = len(dist['ids'])


def convert_date_time(ts, formats='%d %b %Y  %I:%M %p'):
    dt = datetime.fromtimestamp(ts)
    return dt.strftime(formats)


def get_flag_path(code):
    file_path = "flags/4x3/{}.svg".format(code)
    return str(file_path)

def match_dist_en(id):
    data_dist = import_dist()
    match = dict(zip( data_dist['ids'], data_dist['dists_en']))    
    result = match[int(id)]   
    result = result + ", th"

    return result

def match_dist_th(id):
    data_dist = import_dist()
    match = dict(zip( data_dist['ids'],data_dist['dists']))    
    dist = match[int(id)]   
    match = dict(zip( data_dist['ids'],data_dist['citys']))  
    city = match[int(id)]    

    return dist,city

def match_icons(cond,hours):
        if int(hours) > 18 :
            dn = 'n'
        else:
            dn = 'd'
        data = str(cond) + dn
        svg = match_icon_animate(data)
        icon_svg = "icon/animated/{}.svg".format(svg)

        return icon_svg

def manage_tmd(tmd):
    
    
    tmd_forc = tmd['Provinces'][0]['SevenDaysForecast']
    

    dates = []
    days = []
    maxs = []
    mins = []
    rains = []
    descrip = []

    for i in range(len(tmd_forc)):
        dt = datetime.strptime( tmd_forc[i]['Date'], "%d/%m/%Y").date()
        dates.append(dt)
        dy = dt.strftime("%a")
        days.append(dy)
        maxs.append(tmd_forc[i]['MaxTemperature']['Value'])
        mins.append(tmd_forc[i]['MinTemperature']['Value'])
        rains.append(tmd_forc[i]['Rain']['Value'])
        cond = match_tmd_condition((tmd_forc[i]['WeatherDescription']))
        svg = match_icon_animate(cond)
        fore_icon_svg =  "icon/animated/{}.svg".format(svg)
        descrip.append(fore_icon_svg)
    
    forecasts = {}
    forecasts = {'dates':dates,
           'days':days,
           'maxs':maxs,
           'mins':mins,
           'rains': rains,
           'descrip': descrip    
}

    return forecasts







@app.route('/', methods=['POST', 'GET'])

def weather():
    if request.method == 'POST':
        city = request.form['dists']
        
        tmd_location = match_dist_th(city)


    else:
        # for default name mathura
       # city =  'Bangkok,th'
       
        tmd_location = ['บางเสาธง','สมุทรปราการ']

    #api_key = get_api_key()

   # weather = daily_openweather(location)
    amphoe = tmd_location[0]
    province = tmd_location[1]
    weather = daily_tmd(amphoe, province)
    
    
    tmd = forecast_tmd(amphoe, province)
        
    forecasts = manage_tmd(tmd)
    

    

   
    fc = weather['WeatherForecasts'][0]['forecasts']
    hours = dt.datetime.today().strftime("%H")

   
    data = {
        "location": str(weather['WeatherForecasts'][0]['location']['name'] + ', '+ weather['WeatherForecasts'][0]['location']['province']),        
        'day_name': convert_day_name_thai(pd.Timestamp(fc[0]['time']).strftime("%a")),
        "date_day": pd.Timestamp(fc[0]['time']).strftime("%d/%m/%Y"),
        "time_stamp": '07:00',       
        "weather_thai": tmd_weather_condition(fc[0]['data']['cond']),
        "icon": str(match_icons(fc[0]['data']['cond'],hours)),
        "temp_min": round(fc[0]['data']['tc_min']),
        "temp_max": round(fc[0]['data']['tc_max']),
        "temp": round(fc[0]['data']['tc']),
       
       
    }


    

    

    return render_template('index.html', data=data, dist=dist,dist_len=dist_len,forecasts=forecasts)


if __name__ == '__main__':
    app.run(debug=True)

# python weather.py

# getinput  https://www.codeastar.com/flask-easy-web-app-python/
