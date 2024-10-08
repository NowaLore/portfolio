const slider = document.querySelector("#slider");
const slides = slider.querySelectorAll("[data-slide]");
const sliderTrack = slider.querySelector("#track");
const sliderButtonsControl = Array.from(slider.querySelectorAll("[data-button]"));
const slideWidth = slides[0].offsetWidth;
const slideGap = parseFloat(getComputedStyle(sliderTrack).columnGap);
const currentDistance = slideWidth + slideGap;
const minMove = 20;
let counterSlide = 0;
let startPoint = 0;
let endPoint = 0;

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
        choiceOfDirection("right");
    }

    if (isArrowLeft) {
        choiceOfDirection();
    }

    sliderMove();
}

const hendlerStart = (e) => {
    startPoint =  e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
}

const hendlerEnd = (e) => {
    endPoint = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
    hendlerMouseMove();
}

const hendlerMouseMove = () => {
    const currentDiff = startPoint - endPoint;
    if (Math.abs(currentDiff) > minMove) {
        if (currentDiff > 0) {
            choiceOfDirection("right");
        } else {
            choiceOfDirection();
        }
    }
    sliderMove()
}

const choiceOfDirection = (direction) => {
    if (direction === "right") {
        counterSlide = (counterSlide < slides.length - 1) ? counterSlide + 1 : 0;
        return;
    }
    counterSlide = (counterSlide > 0) ? counterSlide - 1 : slides.length - 1;
}

slider.addEventListener("click", hendlersEvents);
slider.addEventListener("mousedown", hendlerStart);
slider.addEventListener("mouseup", hendlerEnd);
slider.addEventListener("touchstart", hendlerStart);
slider.addEventListener("touchend", hendlerEnd);