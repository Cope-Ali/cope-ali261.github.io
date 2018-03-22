// Current Conditions
var currentConditions = new XMLHttpRequest();
currentConditions.open('GET', 'https://api.wunderground.com/api/6710307f40d51364/conditions/q/CA/Redding.json', true);
currentConditions.send();

currentConditions.onload = function (){
    var current = JSON.parse(currentConditions.responseText);
    console.log(current);

    document.getElementById('currentTemp').innerHTML = current.current_observation.temp_f;
    document.getElementById('currentConditionImg').src = current.current_observation.icon_url.replace("http", "https");
    document.getElementById('currentPercip').innerHTML = current.current_observation.precip_1hr_in;
    document.getElementById('currentWind').innerHTML = current.current_observation.wind_mph;
    document.getElementById('cityState').innerHTML = current.current_observation.display_location.full;
    document.getElementById('currentDate').innerHTML = current.current_observation.observation_time;
}

// 5 day forecast
var tenDay = new XMLHttpRequest();
tenDay.open("GET", "https://api.wunderground.com/api/6710307f40d51364/forecast10day/q/CA/Redding.json", true);
tenDay.send();

tenDay.onload = function () {
    var text = JSON.parse(tenDay.responseText);
    console.log(text);

    //Todays Conditions
    document.getElementById('todayHigh').innerHTML = text.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('todayLow').innerHTML = text.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('todayDescription').innerHTML = text.forecast.txt_forecast.forecastday["0"].fcttext ;
    document.getElementById('todayImg').src = text.forecast.txt_forecast.forecastday["0"].icon_url.replace("http","https") ;

    // Day 1
    document.getElementById('dayOneday').innerHTML = text.forecast.simpleforecast.forecastday[1].date.weekday_short;
    document.getElementById('dayOnemonth').innerHTML = text.forecast.simpleforecast.forecastday[1].date.monthname_short;
    document.getElementById('dayOnedate').innerHTML = text.forecast.simpleforecast.forecastday[1].date.day;
    document.getElementById('dayOneImg').src = text.forecast.simpleforecast.forecastday[1].icon_url.replace("http", "https");
    document.getElementById('dayOneHigh').innerHTML = text.forecast.simpleforecast.forecastday[1].high.fahrenheit;
    document.getElementById('dayOneLow').innerHTML = text.forecast.simpleforecast.forecastday[1].low.fahrenheit;

    // Day 2
    document.getElementById('dayTwoday').innerHTML = text.forecast.simpleforecast.forecastday[2].date.weekday_short;
    document.getElementById('dayTwomonth').innerHTML = text.forecast.simpleforecast.forecastday[2].date.monthname_short;
    document.getElementById('dayTwodate').innerHTML = text.forecast.simpleforecast.forecastday[2].date.day;
    document.getElementById('dayTwoImg').src = text.forecast.simpleforecast.forecastday[2].icon_url.replace("http", "https");
    document.getElementById('dayTwoHigh').innerHTML = text.forecast.simpleforecast.forecastday[2].high.fahrenheit;
    document.getElementById('dayTwoLow').innerHTML = text.forecast.simpleforecast.forecastday[2].low.fahrenheit;

    // Day 3
    document.getElementById('dayThreeday').innerHTML = text.forecast.simpleforecast.forecastday[3].date.weekday_short;
    document.getElementById('dayThreemonth').innerHTML = text.forecast.simpleforecast.forecastday[3].date.monthname_short;
    document.getElementById('dayThreedate').innerHTML = text.forecast.simpleforecast.forecastday[3].date.day;
    document.getElementById('dayThreeImg').src = text.forecast.simpleforecast.forecastday[3].icon_url.replace("http", "https");
    document.getElementById('dayThreeHigh').innerHTML = text.forecast.simpleforecast.forecastday[3].high.fahrenheit;
    document.getElementById('dayThreeLow').innerHTML = text.forecast.simpleforecast.forecastday[3].low.fahrenheit;

    // Day 4
    document.getElementById('dayFourday').innerHTML = text.forecast.simpleforecast.forecastday[4].date.weekday_short;
    document.getElementById('dayFourmonth').innerHTML = text.forecast.simpleforecast.forecastday[4].date.monthname_short;
    document.getElementById('dayFourdate').innerHTML = text.forecast.simpleforecast.forecastday[4].date.day;
    document.getElementById('dayFourImg').src = text.forecast.simpleforecast.forecastday[4].icon_url.replace("http", "https");
    document.getElementById('dayFourHigh').innerHTML = text.forecast.simpleforecast.forecastday[4].high.fahrenheit;
    document.getElementById('dayFourLow').innerHTML = text.forecast.simpleforecast.forecastday[4].low.fahrenheit;

    // Day 5
    document.getElementById('dayFiveday').innerHTML = text.forecast.simpleforecast.forecastday[5].date.weekday_short;
    document.getElementById('dayFivemonth').innerHTML = text.forecast.simpleforecast.forecastday[5].date.monthname_short;
    document.getElementById('dayFivedate').innerHTML = text.forecast.simpleforecast.forecastday[5].date.day;
    document.getElementById('dayFiveImg').src = text.forecast.simpleforecast.forecastday[5].icon_url.replace("http", "https");
    document.getElementById('dayFiveHigh').innerHTML = text.forecast.simpleforecast.forecastday[5].high.fahrenheit;
    document.getElementById('dayFiveLow').innerHTML = text.forecast.simpleforecast.forecastday[5].low.fahrenheit;


}
