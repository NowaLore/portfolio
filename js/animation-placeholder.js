const form = document.querySelector("#form");

const focusInput = (event) => {
    const isInput = event.target.closest("[data-input]");
    if (isInput) {
        const formItem = event.target.closest("[data-article]");
        formItem.classList.add("focus");
        isInput.addEventListener("blur", blurInput);
    }
}

const blurInput = (event) => {
    const formItem = event.target.closest("[data-article]");

    const formInput = formItem.querySelector("[data-input]");
    if (formInput.value.trim().length < 1) {
        formItem.classList.remove("focus");
    }

    formInput.removeEventListener("blur", blurInput);
}

form.addEventListener("click", focusInput);