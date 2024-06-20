const burgerButton = document.querySelector("#burger");
const menu = document.querySelector("#nav");
const anchorLinks = document.querySelectorAll("[data-anchor]");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("open");
    burgerButton.classList.toggle("active");
});

menu.addEventListener("click", function (event) {
    if (event.target.closest("[data-anchor]")) {
        menu.classList.remove("open");
        burgerButton.classList.remove("active");
    }
});
