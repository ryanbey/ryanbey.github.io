const fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=d62090c152500bb24998f65e1b56640a&units=imperial";

fetch(fiveDayURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log('Five day API loaded');
        console.log(jsObject);

        // 5-day Forecast
        let index = 1;
        let dayName = "Day";

        for(let i = 0; i < jsObject.list.length; i++) {
            if(jsObject.list[i].dt_txt.includes('18:00:00')) {
                // Weather Icon
                let iconSrc = jsObject.list[i].weather[0].icon + '.png'
                let altText = jsObject.list[i].weather[0].decription + ' icon';
                let iconID = 'weather-icon-' + index;
                document.getElementById(iconID).setAttribute('src', "https://openweathermap.org/img/w/" + iconSrc);
                document.getElementById(iconID).setAttribute('alt', altText);

                // Day
                let date = new Date(jsObject.list[i].dt_txt)
                let dayValue = date.getDay();

                switch(dayValue) {
                    case 0: dayName = 'Sunday'; break;
                    case 1: dayName = 'Monday'; break;
                    case 2: dayName = 'Tuesday'; break;
                    case 3: dayName = 'Wednesday'; break;
                    case 4: dayName = 'Thursday'; break;
                    case 5: dayName = 'Friday'; break;
                    case 6: dayName = 'Saturday'; break;
                    default: dayName = 'Error';
                }

                let dayID = 'forecast-day-' + index;
                document.getElementById(dayID).innerText = dayName;

                // Temperature
                let tempValue = jsObject.list[i].main.temp.toFixed(0);
                let tempID = 'forecast-temp-' + index;
                document.getElementById(tempID).innerText = tempValue + '°F';

                index++;
            }
        }           
    });