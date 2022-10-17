var apiKey = "8f62a549ed6fb56cf6bd5a1b364a96aa";

function displayWeather(cityName) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + cityName
    + "&units=imperial&appid="
    + apiKey, 
    { method: "GET"})

    .then(function(res) {
        return res.json();
    })
    .then (function (res) {
        console.log(res)
        var todayh3El = document.querySelector("h3");
        var currentTempEl = document.querySelector(".weather .temp");//temp
        var currentIconEl = document.querySelector(".weather .icon");//icon
        var currentHumidityEl = document.querySelector(".weather .humidity");//humidity
        var currentWindEl = document.querySelector(".weather .wind");//wind
        
        var todayWeatherData = res;//today's weather; +0 Day
        var today = todayWeatherData.dt * 1000;
        var temperature = todayWeatherData.main.temp;
        var humidity = todayWeatherData.main.humidity;
        var wind = todayWeatherData.wind.speed;
    
        todayh3El.textContent = moment(today).format("MM/D/YYYY");
        currentTempEl.textContent = temperature;
        currentIconEl.setAttribute("src", "https://openweathermap.org/img/w/" + todayWeatherData.weather[0].icon + ".png");
        currentHumidityEl.textContent = humidity;
        currentWindEl.textContent = wind;
    })
}

displayWeather("San Francisco");
 