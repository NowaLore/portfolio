// 1. Создать якорные ссылки
// 2. Реализовать функцию закрытя мобильного меню при клике на якорную ссылку
// 3. Анимация кнопки бургера

const burgerButton = document.querySelector("#burger");
const menu = document.querySelector("#nav");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("open");
})