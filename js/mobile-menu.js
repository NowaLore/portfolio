// 1. Найти кнопку бургера в константу
// 2. Отследить нажатие по кнопке
// 3. Переключать класс open

const burgerButton = document.querySelector("#burger");
const menu = document.querySelector("#nav");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("open");
})