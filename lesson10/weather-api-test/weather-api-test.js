const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d62090c152500bb24998f65e1b56640a";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // Temperature
        let tempF = (jsObject.main.temp - 273.15) * 9 / 5 + 32;
        let tempFrounded = tempF.toFixed(2);
        document.querySelector('#current-temp').textContent = tempFrounded;
        // Weather Icon
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.querySelector('#imagesrc').textContent = imagesrc;
        document.querySelector('#icon').setAttribute('src', imagesrc);
        document.querySelector('#icon').setAttribute('alt', desc);
    });