/*******************************
 *        CAROUSEL 1
 *******************************/
let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('carousel-1-item');
const totalSlides1 = slides1.length;

document.getElementById('carousel-1-button-next').addEventListener('click', function () {
   moveToNextSlide1();
});

document.getElementById('carousel-1-button-prev').addEventListener('click', function () {
   moveToPrevSlide1();
});

function updateSlidePosition1() {
   for (let slide1 of slides1) {
      slide1.classList.remove('carousel-1-item-visible');
      slide1.classList.add('carousel-1-item-hidden');
   }
   slides1[slidePosition1].classList.add('carousel-1-item-visible');
}

function moveToNextSlide1() {
   if (slidePosition1 === totalSlides1 - 1) {
      slidePosition1 = 0;
   } else {
      slidePosition1++;
   }
   updateSlidePosition1();
}

function moveToPrevSlide1() {
   if (slidePosition1 === 0) {
      slidePosition1 = totalSlides1 - 1;
   } else {
      slidePosition1--;
   }

   updateSlidePosition1();
}

/*******************************
 *        CAROUSEL 2
 *******************************/
let slidePosition2 = 0;
const slides2 = document.getElementsByClassName('carousel-2-item');
const totalSlides2 = slides2.length;

document.getElementById('carousel-2-button-next').addEventListener('click', function () {
   moveToNextSlide2();
});

document.getElementById('carousel-2-button-prev').addEventListener('click', function () {
   moveToPrevSlide2();
});

function updateSlidePosition2() {
   for (let slide2 of slides2) {
      slide2.classList.remove('carousel-2-item-visible');
      slide2.classList.add('carousel-2-item-hidden');
   }
   slides2[slidePosition2].classList.add('carousel-2-item-visible');
}

function moveToNextSlide2() {
   if (slidePosition2 === totalSlides2 - 1) {
      slidePosition2 = 0;
   } else {
      slidePosition2++;
   }
   updateSlidePosition2();
}

function moveToPrevSlide2() {
   if (slidePosition2 === 0) {
      slidePosition2 = totalSlides2 - 1;
   } else {
      slidePosition2--;
   }

   updateSlidePosition2();
}

/*******************************
 *        CAROUSEL 3
 *******************************/
let slidePosition3 = 0;
const slides3 = document.getElementsByClassName('carousel-3-item');
const totalSlides3 = slides3.length;

document.getElementById('carousel-3-button-next').addEventListener('click', function () {
   moveToNextSlide3();
});

document.getElementById('carousel-3-button-prev').addEventListener('click', function () {
   moveToPrevSlide3();
});

function updateSlidePosition3() {
   for (let slide3 of slides3) {
      slide3.classList.remove('carousel-3-item-visible');
      slide3.classList.add('carousel-3-item-hidden');
   }
   slides3[slidePosition3].classList.add('carousel-3-item-visible');
}

function moveToNextSlide3() {
   if (slidePosition3 === totalSlides3 - 1) {
      slidePosition3 = 0;
   } else {
      slidePosition3++;
   }
   updateSlidePosition3();
}

function moveToPrevSlide3() {
   if (slidePosition3 === 0) {
      slidePosition3 = totalSlides3 - 1;
   } else {
      slidePosition3--;
   }

   updateSlidePosition3();
}

/*******************************
 *        CAROUSEL 4
 *******************************/
let slidePosition4 = 0;
const slides4 = document.getElementsByClassName('carousel-4-item');
const totalSlides4 = slides4.length;

document.getElementById('carousel-4-button-next').addEventListener('click', function () {
   moveToNextSlide4();
});

document.getElementById('carousel-4-button-prev').addEventListener('click', function () {
   moveToPrevSlide4();
});

function updateSlidePosition4() {
   for (let slide4 of slides4) {
      slide4.classList.remove('carousel-4-item-visible');
      slide4.classList.add('carousel-4-item-hidden');
   }
   slides4[slidePosition4].classList.add('carousel-4-item-visible');
}

function moveToNextSlide4() {
   if (slidePosition4 === totalSlides4 - 1) {
      slidePosition4 = 0;
   } else {
      slidePosition4++;
   }
   updateSlidePosition4();
}

function moveToPrevSlide4() {
   if (slidePosition4 === 0) {
      slidePosition4 = totalSlides4 - 1;
   } else {
      slidePosition4--;
   }

   updateSlidePosition4();
}
