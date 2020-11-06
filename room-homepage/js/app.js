const burgerMenu = document.querySelector(".burger-menu"),
    navList = document.querySelector(".nav__container"),
    closeBtn = document.querySelector(".closeBtn");

burgerMenu.addEventListener("click", () => {
    navList.classList.toggle("nav__list--active")
})
closeBtn.addEventListener("click", () => {
    navList.classList.toggle("nav__list--active")
})