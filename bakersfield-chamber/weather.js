const weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=35.3733&lon=-119.0187&exclude=minutely,hourly&units=imperial&appid=d62090c152500bb24998f65e1b56640a";

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // Currently
        let currentTemp = jsObject.current.temp.toFixed(0);
        let condition = jsObject.current.weather[0].main;
        let humidity = jsObject.current.humidity;

        document.querySelector('#temp').innerText = currentTemp;
        document.querySelector('#condition').innerText = condition;
        document.querySelector('#humidity').innerText = humidity;

        // 3-day Forecast
        let index = 1;
        let dayName = "Day";

        for(let i = 0; i < 3; i++) {
            // Day
            let date = new Date(jsObject.daily[i].dt * 1000)
            let dayValue = date.getDay()    
            switch(dayValue) {
                case 0: dayName = 'SUN'; break;
                case 1: dayName = 'MON'; break;
                case 2: dayName = 'TUE'; break;
                case 3: dayName = 'WED'; break;
                case 4: dayName = 'THU'; break;
                case 5: dayName = 'FRI'; break;
                case 6: dayName = 'SAT'; break;
                default: dayName = 'Error';
            }

            let dayID = 'forecast-day-' + index;
            document.getElementById(dayID).innerText = dayName;

            // Temperature
            let tempValue = jsObject.daily[i].temp.day.toFixed(0);
            let tempID = 'forecast-temp-' + index;
            document.getElementById(tempID).innerText = tempValue + '°F';
            index++;
        }

        // Weather Alerts

    });