let hoverImage = document.querySelector('.hover-image');
let simRacing = document.querySelector('#hobby-sim-racing');
let pcBuilding = document.querySelector('#hobby-pc-building');
let programming = document.querySelector('#hobby-programming');
let graphics = document.querySelector('#hobby-graphic-design');
let nascar = document.querySelector('#hobby-nascar');

let currentImg = 'simRacing';
let delay = 300;

hoverImage.classList.replace('hover-image', 'show-image');

simRacing.addEventListener('mouseenter', () => {    
    // Only change images if a different image is currently being shown
    if (currentImg !== 'simRacing') {
        hoverImage.classList.replace('show-image', 'hover-image');
        setTimeout(() => {
            hoverImage.src = 'images/hobbies/sim-racing.jpg'
            hoverImage.classList.replace('hover-image', 'show-image');
        }, delay);
    }
    currentImg = 'simRacing';
});

pcBuilding.addEventListener('mouseenter', () => {
    if (currentImg !== 'pcBuilding') {
        hoverImage.classList.replace('show-image', 'hover-image');
        setTimeout(() => {
            hoverImage.src = 'images/hobbies/pc-building.jpg'
            hoverImage.classList.replace('hover-image', 'show-image');
        }, delay);
    }
    currentImg = 'pcBuilding';
});

programming.addEventListener('mouseenter', () => {
    if (currentImg !== 'programming') {
        hoverImage.classList.replace('show-image', 'hover-image');
        setTimeout(() => {
            hoverImage.src = 'images/hobbies/programming.jpg'
            hoverImage.classList.replace('hover-image', 'show-image');
        }, delay);
    }
    currentImg = 'programming';
});

graphics.addEventListener('mouseenter', () => {
    if (currentImg !== 'graphics') {
        hoverImage.classList.replace('show-image', 'hover-image');
        setTimeout(() => {
            hoverImage.src = 'images/hobbies/graphic-design.jpg'
            hoverImage.classList.replace('hover-image', 'show-image');
        }, delay);
    }
    currentImg = 'graphics';
});

nascar.addEventListener('mouseenter', () => {
    if (currentImg !== 'nascar') {
        hoverImage.classList.replace('show-image', 'hover-image');
        setTimeout(() => {
            hoverImage.src = 'images/hobbies/nascar.jpg'
            hoverImage.classList.replace('hover-image', 'show-image');
        }, delay);
    }
    currentImg = 'nascar';
});