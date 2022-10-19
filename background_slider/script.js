const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

let activeSlide = 0;
setBodyBg();

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setActiveSlide();
    setBodyBg();
})

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setActiveSlide();
    setBodyBg();
})

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[activeSlide].classList.add('active');
}

function setBodyBg() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

