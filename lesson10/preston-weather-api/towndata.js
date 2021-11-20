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
                let townBoxImage = document.createElement('div');
                let townBoxInfo = document.createElement('div');
                let heading = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                // apply our info box styling to the town sections
                townBox.classList.add('info-box', 'home-info-box');
                townBoxImage.classList.add('town-box-image');
                townBoxInfo.classList.add('town-box-info');

                // fill in content
                image.setAttribute('src', towns[i].photo);
                image.setAttribute('alt', towns[i].name + ' picture');
                image.classList.add('home-img');
                townBoxImage.appendChild(image);

                heading.textContent = towns[i].name;
                heading.classList.add('home-heading');
                townBoxInfo.appendChild(heading);

                motto.textContent = towns[i].motto;
                motto.classList.add('home-subheading');
                townBoxInfo.appendChild(motto);

                founded.textContent = "Year Founded: " + towns[i].yearFounded;
                motto.classList.add('home-founded');
                townBoxInfo.appendChild(founded);

                population.textContent = "Population: " + towns[i].currentPopulation;
                motto.classList.add('home-population');
                townBoxInfo.appendChild(population);

                rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                motto.classList.add('home-rainfall');
                townBoxInfo.appendChild(rainfall);
                
                // add content to our div in html file
                townBox.appendChild(townBoxImage);
                townBox.appendChild(townBoxInfo);
                document.querySelector('div.town-boxes').appendChild(townBox);
            }
        }
    })

.catch(function(error){
    console.log('Fetch error: ', error.message);
})
