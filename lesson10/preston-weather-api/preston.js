const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=d62090c152500bb24998f65e1b56640a";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });