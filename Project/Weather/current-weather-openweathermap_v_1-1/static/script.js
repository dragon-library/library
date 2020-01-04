$(document).ready(function () {
  $('#metrics').on("click", toggleMetric); 

  //init();
});



var apiKey = "fe042d917fd66529d9b71ebc231a32d8";
var metric = "si";
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var icons = {
  'clear-day': '\uf00d',
  'clear-night': '\uf02e',
  'wind': '\uf050',
  'day-sunny': '\uf00d',
  'night-clear': '\uf02e',
  'rain': '\uf019',
  'snow': '\uf076',
  'sleet': '\uf0b5',
  'strong-wind': '\uf050',
  'fog': '\uf014',
  'cloudy': '\uf013',
  'day-cloudy': '\uf002',
  'night-cloudy': '\uf086',
  'hail': '\uf015',
  'thunderstorm': '\uf01e',
  'tornado': '\uf056',
  'partly-cloudy-night': '\uf081',
  'partly-cloudy-day': '\uf002',
  'n/a': '\uf07b'
};

function init() {
  getGeoPos();
}

function getGeoPos() {
  $.getJSON('https://ipinfo.io', function (data) {
    setLocation(data);
    getWeather(data);
  });
}



function setWeather(forecast) {
  $('#forecast').text(forecast.currently.summary);
  var icon = icons[forecast.currently.icon] || icons['n/a'];
  $('#weatherIcon').attr('data-icon', icon);
  //$('#temperature>.temp').text(Math.ceil(forecast.currently.temperature));
  var windMetric = metric === 'si' ? 'm/s' : 'mph';
  $('#wind-text').text(Math.ceil(forecast.currently.windSpeed) + ' ' + windMetric);
  $('#rain-text').text(forecast.currently.precipProbability);
  var humidity = Math.round(forecast.currently.humidity * 100);
  $('#humi-text').text(humidity + '%');
  $('#low').text(Math.ceil(forecast.daily.data[0].apparentTemperatureMin));
  $('#high').text(Math.ceil(forecast.daily.data[0].apparentTemperatureMax));
  console.log(forecast);
  var daily = getWeekdays(forecast.daily.data);
  $('.day').each(function (i, day) {
    $(day).find('.day-desc').text(daily[i].day);
    var icon = icons[daily[i].icon] || icons['n/a'];
    $(day).find('.day-icon').attr('data-icon', icon);
    $(day).find('.day-low-high').text(daily[i].min + '°/' + daily[i].max + '°');
  });
}

function getWeekdays(week) {
  return week.map(function (day) {
    var date = new Date(day.time * 1000);
    return {
      day: days[date.getDay()],
      max: Math.ceil(day.apparentTemperatureMax),
      min: Math.ceil(day.apparentTemperatureMin),
      icon: day.icon
    };
  }).splice(1, week.length);
}

function setLocation(loc) {
  if (loc.city) {
    $('#city').text(loc.city + ', ' + loc.country);
  }
}




function toggleMetric() {

  metric = metric === 'si' ? 'us' : 'si';
  var icon = metric === 'us' ? '\uf045' : '\uf03c';
  $(this).attr('data-icon', icon);


}






