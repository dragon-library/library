# WeatherToday

def tmd_today():
    
    data = {'location': {'province': 'สมุทรปราการ', 'areatype': 'amphoe', 'name': 'บางเสาธง', 'tambon': None, 'region': 'C', 'geocode': '1106', 'amphoe': 'บางเสาธง', 'lat': 13.594858, 'lon': 100.830146}, 'forecasts': [{'time': '2019-12-15T00:00:00+07:00', 'data': {'cond': 1, 'rh': 47.89, 'swdown': 563.73, 'tc': 29.77, 'tc_max': 32.95, 'tc_min': 24.57, 'wd10m': 53.04, 'ws10m': 3.59}}, {'time': '2019-12-16T00:00:00+07:00', 'data': {'cond': 1, 'rh': 53.03, 'swdown': 502.27, 'tc': 28.44, 'tc_max': 33.75, 'tc_min': 22.29, 'wd10m': 64.1, 'ws10m': 4.11}}, {'time': '2019-12-17T00:00:00+07:00', 'data': {'cond': 1, 'rh': 52.16, 'swdown': 507.69, 'tc': 28.69, 'tc_max': 33.96, 'tc_min': 22.88, 'wd10m': 70.2, 'ws10m': 4.67}}, {'time': '2019-12-18T00:00:00+07:00', 'data': {'cond': 1, 'rh': 67.27, 'swdown': 470.73, 'tc': 25.03, 'tc_max': 32.72, 'tc_min': 18.26, 'wd10m': 71.64, 'ws10m': 4.43}}, {'time': '2019-12-19T00:00:00+07:00', 'data': {'cond': 2, 'rh': 67.94, 'swdown': 467.67, 'tc': 25.23, 'tc_max': 31.95, 'tc_min': 20.06, 'wd10m': 79.04, 'ws10m': 5.73}}, {'time': '2019-12-20T00:00:00+07:00', 'data': {'cond': 1, 'rh': 65.65, 'swdown': 466.19, 'tc': 24.58, 'tc_max': 30.94, 'tc_min': 19.35, 'wd10m': 76.89, 'ws10m': 5.99}}, {'time': '2019-12-21T00:00:00+07:00', 'data': {'cond': 1, 'rh': 68.83, 'swdown': 470.79, 'tc': 23.73, 'tc_max': 30.91, 'tc_min': 18.4, 'wd10m': 82.91, 'ws10m': 5.19}}]}

    weather = data

    return weather

# ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




# WeatherForecast7Days

def tmd_forecast():
    
    data = {'ProvinceNameTh': 'สมุทรปราการ', 'ProvinceNameEng': 'Samut Prakarn', 'SevenDaysForecast': [{'Date': '15/12/2019', 'MaxTemperature': {'Value': 32, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 22, 'Unit': 'celcius'}, 'WindDirection': {'Value': 50, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้าโปร่ง', 'WeatherDescriptionEn': 'Clear', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'เย็น', 'TempartureLevelEn': 'Cool'}, {'Date': '16/12/2019', 'MaxTemperature': {'Value': 32, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 22, 'Unit': 'celcius'}, 'WindDirection': {'Value': 60, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'เย็น', 'TempartureLevelEn': 'Cool'}, {'Date': '17/12/2019', 'MaxTemperature': {'Value': 33, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 23, 'Unit': 'celcius'}, 'WindDirection': {'Value': 60, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'ปกติ', 'TempartureLevelEn': 'Normal'}, {'Date': '18/12/2019', 'MaxTemperature': {'Value': 33, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 23, 'Unit': 'celcius'}, 'WindDirection': {'Value': 50, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'ปกติ', 'TempartureLevelEn': 'Normal'}, {'Date': '19/12/2019', 'MaxTemperature': {'Value': 33, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 23, 'Unit': 'celcius'}, 'WindDirection': {'Value': 60, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'ปกติ', 'TempartureLevelEn': 'Normal'}, {'Date': '20/12/2019', 'MaxTemperature': {'Value': 32, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 23, 'Unit': 'celcius'}, 'WindDirection': {'Value': 60, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'ปกติ', 'TempartureLevelEn': 'Normal'}, {'Date': '21/12/2019', 'MaxTemperature': {'Value': 32, 'Unit': 'celcius'}, 'MinTemperature': {'Value': 23, 'Unit': 'celcius'}, 'WindDirection': {'Value': 60, 'Unit': 'degree'}, 'WindSpeed': {'Value': 5, 'Unit': 'km/h'}, 'Rain': {'Value': 0, 'Unit': '%'}, 'WeatherDescription': 'ท้องฟ้ามีเมฆบางส่วน', 'WeatherDescriptionEn': 'Partly Cloudy', 'WaveHeight': 'สงบ', 'WaveHeightEn': 'Calm', 'TempartureLevel': 'ปกติ', 'TempartureLevelEn': 'Normal'}]}





    weather = data

    return weather