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
        counterSlide = (counterSlide < slides.length - 1) ? counterSlide + 1 : 0;
    }

    if (isArrowLeft) {
        counterSlide = (counterSlide > 0) ? counterSlide - 1 : slides.length - 1;
    }

    sliderMove();
}

const hendlerStart = (event) => {
    startPoint = event.clientX;
}

const hendlerEnd = (event) => {
    endPoint = event.clientX;
    hendlerMouseMove();
}

const hendlerMouseMove = () => {
    const currentDiff = startPoint - endPoint;
    if (Math.abs(currentDiff) > minMove) {
        if (currentDiff > 0) {
            counterSlide++;
        } else {
            counterSlide--;
        }
    }
    sliderMove()
}

slider.addEventListener("click", hendlersEvents);
slider.addEventListener("mousedown", hendlerStart);
slider.addEventListener("mouseup", hendlerEnd);

// 1.Отрефакторить выбор направления (написать ограничение - бесконечность)
// 2.Свайп для тачскринов