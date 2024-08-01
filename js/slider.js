const slider = document.querySelector("#slider");
const slides = slider.querySelectorAll("[data-slide]");
const sliderTrack = slider.querySelector("#track");
const slideWidth = slides[0].offsetWidth;
const slideGap = parseFloat(getComputedStyle(sliderTrack).columnGap);
const currentDistance = slideWidth + slideGap;
let counterSlide = 0;

const sliderMove = () => {
    sliderTrack.style.transform = `translateX(-${currentDistance * counterSlide}px)`;
}

const hendlersEvents = (event) => {
    const isArrowRight = event.target.closest("[data-arrow-right]");
    const isArrowLeft = event.target.closest("[data-arrow-left]");
    
    if (isArrowRight) {
        counterSlide = (counterSlide < slides.length - 1) ? counterSlide + 1 : 0;
    }

    if (isArrowLeft) {
        counterSlide = (counterSlide > 0) ? counterSlide - 1 : slides.length - 1;
    }

    sliderMove();
}

slider.addEventListener("click", hendlersEvents);