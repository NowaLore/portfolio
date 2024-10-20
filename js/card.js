const rowCard = document.querySelector("#row-card");
const fade = document.querySelector("#fade");

const hendlerAction = (event) => {
    const isButtonCard = event.target.closest("[data-skill-card]");
    if (isButtonCard) {
        isButtonCard.classList.add("active");
        fade.classList.add("active");
    }

    const isButtonCross = event.target.closest("[data-btn-close]");
    if (isButtonCross) {
        const parentCard = isButtonCross.closest("[data-skill-card]");
        parentCard.classList.remove("active");
        fade.classList.remove("active");
    }
}

rowCard.addEventListener('click', hendlerAction);


