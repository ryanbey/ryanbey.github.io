/**************************************************
 *                Fill in Content
 **************************************************/
const src = 'directory.json';

fetch(src)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const directory = jsObject['directory'];  

        for (let i = 0; i < directory.length; i++ ) {
            let card = document.createElement('article');
            let logo = document.createElement('img');
            let name = document.createElement('h3');
            let phone = document.createElement('p');
            let link = document.createElement('a');
  
            // Business Logo
            logo.setAttribute('src', directory[i].logo);
            logo.setAttribute('alt', directory[i].name + ' logo');
            card.appendChild(logo);

            // Business Name
            name.textContent = directory[i].name;
            card.appendChild(name);

            // Business Phone #
            phone.textContent = directory[i].phone;
            card.appendChild(phone);

            // Business Link
            link.setAttribute('href', directory[i].link);
            link.textContent = directory[i].link
            card.appendChild(link);

            card.classList.add('business-directory-box');
            document.querySelector('.grid-view').appendChild(card);
        }
    });

/**************************************************
 *               Styling & Buttons
 **************************************************/
let listBtn = document.querySelector('#left-button');
let gridBtn = document.querySelector('#right-button');
let offw = '#e8e8e8';
let white = '#ffffff';
let container = document.querySelector('div.grid-view');

// List button listeners
listBtn.addEventListener('mouseenter', function(btnEnter) {
    btnEnter.target.style.background = offw;
})

listBtn.addEventListener('mouseleave', function(btnLeave) {
    btnLeave.target.style.background = white;
})

listBtn.onclick = function() {
    container.classList.remove('grid-view');
    container.classList.add('list-view');
}

// Grid button listeners
gridBtn.addEventListener('mouseenter', function(btnEnter) {
    btnEnter.target.style.background = offw;
})

gridBtn.addEventListener('mouseleave', function(btnLeave) {
    btnLeave.target.style.background = white;
})

gridBtn.onclick = function() {
    container.classList.remove('list-view');
    container.classList.add('grid-view');
}
