// 1. Создать якорные ссылки +
// 2. Реализовать функцию закрытия мобильного меню при клике на якорную ссылку
// - Поставить прослушку события click на якорные ссылки
// - Удалять класс open с меню
// 3. Анимация кнопки бургера

const burgerButton = document.querySelector("#burger");
const menu = document.querySelector("#nav");
const anchorLinks = document.querySelectorAll("[data-anchor]");

burgerButton.addEventListener("click", function () {
    menu.classList.toggle("open");
});
menu.addEventListener("click", function (event) {
if (event.target.closest("[data-anchor]")) {
    menu.classList.remove("open");
}
});
// anchorLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//         menu.classList.remove("open");
//     })
// });