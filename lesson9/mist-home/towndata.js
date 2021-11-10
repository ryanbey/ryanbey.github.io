const requestURL = 'towndata.json';

fetch(requestURL)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];  

        for (let i = 0; i < towns.length; i++ ) {
            // 1:Fish Haven, 4:Preston, 5:Soda Springs
            if (i == 1 | i == 4 | i == 5) {
                // create html elements to fill in
                let townBox = document.createElement('section');
                let heading = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                // apply our info box styling to the town sections
                townBox.classList.add('info-box');

                // fill in content
                heading.textContent = towns[i].name;
                townBox.appendChild(heading);

                motto.textContent = towns[i].motto;
                townBox.appendChild(motto);

                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                townBox.appendChild(founded);

                population.textContent = "Population: " + towns[i].currentPopulation;
                townBox.appendChild(population);

                rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                townBox.appendChild(rainfall);

                /*******************************************************************
                * ADD IMAGES ADD IMAGES ADD IMAGES ADD IMAGES ADD IMAGES ADD IMAGES
                *******************************************************************/

                // add content to our div in html file
                document.querySelector('div.town-boxes').appendChild(townBox);
            }
        }
    })

.catch(function(error){
    console.log('Fetch error: ', error.message);
})
