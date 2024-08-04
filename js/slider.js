const slider = document.querySelector("#slider");
const slides = slider.querySelectorAll("[data-slide]");
const sliderTrack = slider.querySelector("#track");
const sliderButtonsControl = Array.from(slider.querySelectorAll("[data-button]"));
const slideWidth = slides[0].offsetWidth;
const slideGap = parseFloat(getComputedStyle(sliderTrack).columnGap);
const currentDistance = slideWidth + slideGap;
let counterSlide = 0;

const sliderMove = () => {
    sliderTrack.style.transform = `translateX(-${currentDistance * counterSlide}px)`;
    changeActiveStatus();
}

const changeActiveStatus = () => {
    const currentButton = slider.querySelector("button.active");
    currentButton.classList.remove("active");
    const newActiveBtn = sliderButtonsControl[counterSlide];
    newActiveBtn.classList.add("active");
}

const hendlersEvents = (event) => {
    const isArrowRight = event.target.closest("[data-arrow-right]");
    const isArrowLeft = event.target.closest("[data-arrow-left]");
    const isCurrentButton = event.target.closest("[data-button]");

    if (isCurrentButton) {
        counterSlide = sliderButtonsControl.indexOf(isCurrentButton);
    }
    
    if (isArrowRight) {
        counterSlide = (counterSlide < slides.length - 1) ? counterSlide + 1 : 0;
    }

    if (isArrowLeft) {
        counterSlide = (counterSlide > 0) ? counterSlide - 1 : slides.length - 1;
    }

    sliderMove();
}

slider.addEventListener("click", hendlersEvents);