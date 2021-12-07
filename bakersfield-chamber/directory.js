/**************************************************
 *                Fill in Content
 **************************************************/
const src = 'directory.json';

fetch(src)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let container = document.querySelector('.business-directory-container');
    });

/**************************************************
 *               Styling & Buttons
 **************************************************/
let listBtn = document.querySelector('#left-button');
let gridBtn = document.querySelector('#right-button');
let offw = '#e8e8e8';
let white = '#ffffff';

// Load list view by default


// List button listeners
listBtn.addEventListener('mouseenter', function(btnEnter) {
    btnEnter.target.style.background = offw;
})

listBtn.addEventListener('mouseleave', function(btnLeave) {
    btnLeave.target.style.background = white;
})

listBtn.onclick = function() {
    // Change to grid styling
    console.log('list click');
}

// Grid button listeners
gridBtn.addEventListener('mouseenter', function(btnEnter) {
    btnEnter.target.style.background = offw;
})

gridBtn.addEventListener('mouseleave', function(btnLeave) {
    btnLeave.target.style.background = white;
})

gridBtn.onclick = function() {
    // Change to grid styling
    console.log('grid click');
}
