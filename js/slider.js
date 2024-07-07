const slider = document.querySelector("#slider");
const slides = slider.querySelectorAll("[data-slide]");
const sliderTrack = slider.querySelector("#track");
const slideWidth = slides[0].offsetWidth;
const slideGap = parseFloat(getComputedStyle(sliderTrack).columnGap);
const currentDistance = slideWidth + slideGap;
let counterSlide = 0;

const hendlersEvents = (event) => {
    const isArrowRight = event.target.closest("[data-arrow-right]");
    const isArrowLeft = event.target.closest("[data-arrow-left]");
    
    if (isArrowRight) {
        if (counterSlide < slides.length - 1) {
            counterSlide++;
        } else {
            counterSlide = 0;
        }
        sliderTrack.style.transform = `translateX(-${currentDistance * counterSlide}px)`;
    }
}

slider.addEventListener("click", hendlersEvents);