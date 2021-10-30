let hoverImage = document.querySelector('.hover-image');
let simRacing = document.querySelector('#hobby-sim-racing');
let pcBuilding = document.querySelector('#hobby-pc-building');
let programming = document.querySelector('#hobby-programming');
let graphics = document.querySelector('#hobby-graphic-design');
let nascar = document.querySelector('#hobby-nascar');

hoverImage.classList.replace('hover-image', 'show-image');

simRacing.addEventListener('mouseenter', function() {    
    hoverImage.classList.replace('show-image', 'hover-image');
    setTimeout(function() {
        hoverImage.src = 'images/hobbies/sim-racing.jpg'
        hoverImage.classList.replace('hover-image', 'show-image');
    }, 500);
});

pcBuilding.addEventListener('mouseenter', function() {
    hoverImage.classList.replace('show-image', 'hover-image');
    setTimeout(function() {
        hoverImage.src = 'images/hobbies/pc-building.jpg'
        hoverImage.classList.replace('hover-image', 'show-image');
    }, 500);
});

programming.addEventListener('mouseenter', function() {
    hoverImage.classList.replace('show-image', 'hover-image');
    setTimeout(function() {
        hoverImage.src = 'images/hobbies/programming.jpg'
        hoverImage.classList.replace('hover-image', 'show-image');
    }, 500);
});

graphics.addEventListener('mouseenter', function() {
    hoverImage.classList.replace('show-image', 'hover-image');
    setTimeout(function() {
        hoverImage.src = 'images/hobbies/graphic-design.jpg'
        hoverImage.classList.replace('hover-image', 'show-image');
    }, 500);
});

nascar.addEventListener('mouseenter', function() {
    hoverImage.classList.replace('show-image', 'hover-image');
    setTimeout(function() {
        hoverImage.src = 'images/hobbies/nascar.jpg'
        hoverImage.classList.replace('hover-image', 'show-image');
    }, 500);
});