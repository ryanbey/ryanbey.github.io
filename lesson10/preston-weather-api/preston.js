const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d62090c152500bb24998f65e1b56640a";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // Weather Summary
        let currently = jsObject.weather[0].description;
        let high = convertToF(jsObject.main.temp_max);
        let windChill = calcWindChill(jsObject.wind.speed, high);
        let humidity = jsObject.main.humidity;
        let windSpeed = jsObject.wind.speed;

        document.querySelector('#ws-currently').innerText = titleCase(currently);
        document.querySelector('#ws-high').innerText = high;
        document.querySelector('#ws-wind-chill').innerText = windChill + "°F";
        document.querySelector('#ws-humidity').innerText = humidity;
        document.querySelector('#ws-wind-speed').innerText = windSpeed.toFixed(0);

        // 5-day Forecast
        
    });

function convertToF(tempK) {
    let tempF = (tempK - 273.15) * 9 / 5 + 32;
    return tempF.toFixed(0);
}

function calcWindChill(speed, temp) {
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);
    // Round the answer down to integer
    wc = Math.floor(wc);
    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    return wc;
}

function titleCase(str) {
    // Credit: https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
    str = str.toLowerCase();
    str = str.split(' ');

    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }

    return str.join(' ');
}