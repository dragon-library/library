from flask import Flask, render_template, request 
  
# import json to load JSON data to a python dictionary 
import json 
  
# urllib.request to make a request to api 
import requests
from jinja2 import Template
import pandas as pd
from datetime import datetime
from datetime import date
import sys 
from data_dummy import *
from master_data import *
  
  
app = Flask(__name__) 

citys = get_citys()
labels = imports_city()

def convert_date_time(ts,formats='%d %b %Y  %I:%M %p'):
    dt = datetime.fromtimestamp(ts)
    return dt.strftime(formats)  

def get_flag_path(code) :  
    file_path = "flags/4x3/{}.svg".format(code)
    return str(file_path)

def match_country(value):
    get = match_country_name()
    coun_name = get[value]    
    return coun_name 

def manage_citys(value):
    get = get_citys()
    matchs = get[value]
    return matchs


def get_weather(api_key, locate):
    url = "http://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}".format(locate, api_key)
    r = requests.get(url)
    return r.json()


  
@app.route('/', methods =['POST', 'GET']) 
def weather(): 
    if request.method == 'POST': 
        city = request.form['citys']
           
    else: 
        # for default name mathura 
       # city =  'Bangkok,th'
        city =  'Bangkok,th'
  
    


    api_key = 'bf5d2ca68d5cba107e1017360c1e80d9'
    locate = city
 
    #api_key = get_api_key()
    
    weather = get_weather(api_key, locate)


    #weather = openweather_current()

  
    # source contain json data from api 
  #  source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q =' + city + '&appid =' + api).read() 
  
    # converting JSON data to a dictionary 
    #weather = json.loads(get_data) 
    
    na = str(weather['sys']['country'])
    country = match_country(na)
    code = str(weather['sys']['country']).lower()
    
    flag = get_flag_path(code)

    weather_desc = (weather['weather'][0]['main'].lower())
    
    icons = str(weather['weather'][0]['icon'])
    icon_class = match_icon(icons)
    svg = match_icon_animate(icons)
    icon_svg = "icon/animated/{}.svg".format(svg)
    
    p = (weather['main']['pressure'])
    presure = '{:0,.0f}'.format(p)

    
    icon_path = "http://openweathermap.org/img/wn/{}@2x.png".format(icons)
    try:
        vis = weather['visibility']
        if vis > 0:
            visibility = vis/1000
        else:
            visibility = 0
    except:
        visibility = 0


 #  '{:0,.2f}'.format(my_number)

    


  
  
    # data for variable list_of_data  
    data = { 
        "city_name": str(weather['name']) ,
        "country_code": str(weather['sys']['country']),
        "country_name": country, 
        "flag_path" : flag,     
        'day_name': convert_date_time(weather['dt'],"%a"),
        "date_day" : convert_date_time(weather['dt']),   
        "weather_main" : str(weather['weather'][0]['main']).capitalize(),    
        "weather_desc" : str(weather['weather'][0]['description']).capitalize(),
        "icon" : str(weather['weather'][0]['icon']),
        "coordinate": str(weather['coord']['lon']) + ' ' 
                    + str(weather['coord']['lat']), 
        "temp_min": round(weather['main']['temp_min']), 
        "temp_max": round(weather['main']['temp_max']), 
        "temp": round(weather['main']['temp']), 
        "pressure": presure, 

        "humidity": str(weather['main']['humidity']), 
        "wind": str(weather['wind']['speed']),
        "visibility": visibility,
        "sunrise" : convert_date_time(weather['sys']['sunrise'],'%I:%M %p'),
        "sunset" : convert_date_time(weather['sys']['sunset'],'%I:%M %p'),
        "icon_class": icon_class,
        "icon_path": icon_path,
        'icon_svg': str(icon_svg),
        
    }


    
    return render_template('index.html', data = data,labels = labels ) 
  
  
  
if __name__ == '__main__': 
    app.run(debug = True) 

# python weather.py

# getinput  https://www.codeastar.com/flask-easy-web-app-python/