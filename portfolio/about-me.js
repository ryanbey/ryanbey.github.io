let main = document.querySelector('.subpage-main')
let simRacing = document.querySelector('#hobby-sim-racing');
let pcBuilding = document.querySelector('#hobby-pc-building');
let programming = document.querySelector('#hobby-programming');
let graphics = document.querySelector('#hobby-graphic-design');
let nascar = document.querySelector('#hobby-nascar');

simRacing.onmouseover = function() {
    main.classList.add('sim-racing-hover');
}

pcBuilding.onmouseover = function() {
    main.classList.add('pc-building-hover');
}

programming.onmouseover = function() {
    main.classList.add('programming-hover');
}

graphics.onmouseover = function() {
    main.classList.add('graphics-hover');
}

nascar.onmouseover = function() {
    main.classList.add('nascar-hover');
}
