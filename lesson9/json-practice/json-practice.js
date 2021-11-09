const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        if(response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })

    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];  

        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');
            let image = document.createElement('img');
  
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);
            birthDate.textContent = "Place of Birth: " + prophets[i].birthplace;
            card.appendChild(birthPlace);
            birthPlace.textContent = "Date of Birth: " + prophets[i].birthdate;
            card.appendChild(birthDate);
            image.setAttribute('src', prophets[i].imageurl);
            card.appendChild(image);
      
            document.querySelector('div.cards').appendChild(card);
        }
    })

.catch(function(error){
    console.log('Fetch error: ', error.message);
})
