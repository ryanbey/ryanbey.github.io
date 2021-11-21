const summaryURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d62090c152500bb24998f65e1b56640a&units=imperial";

fetch(summaryURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log('Weather summary API loaded');
        console.log(jsObject);

        // Weather Summary
        let currently = titleCase(jsObject.weather[0].description);
        let currentTemp = jsObject.main.temp.toFixed(0);
        let windChill = calcWindChill(jsObject.wind.speed, currentTemp) + "°F";
        let humidity = jsObject.main.humidity;
        let windSpeed = jsObject.wind.speed.toFixed(0);

        document.querySelector('#ws-currently').innerText = currently;
        document.querySelector('#ws-current').innerText = currentTemp;
        document.querySelector('#ws-wind-chill').innerText = windChill;
        document.querySelector('#ws-humidity').innerText = humidity;
        document.querySelector('#ws-wind-speed').innerText = windSpeed;
    });

function calcWindChill(windSpeed, currentTemp) {
    // Compute the windchill rounded down
    let windChill = Math.floor(35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
    // If windChill > currentTemp, return currentTemp
    return (windChill > currentTemp) ? currentTemp : windChill;
}

function titleCase(string) {
    // Credit: https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
    string = string.toLowerCase().split(' ');
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
    }
    return string.join(' ');
}