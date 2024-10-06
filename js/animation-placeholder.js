const form = document.querySelector("#form");

const focusInput = (event) => {
    const isInput = event.target.closest("[data-input]");
    if (isInput) {
        const formItem = event.target.closest("[data-article]");
        formItem.classList.add("focus");
    }
}

form.addEventListener("click", focusInput);