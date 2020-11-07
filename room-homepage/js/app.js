const burgerBtn = document.querySelector(".burgerBtn"),
    closeBtn = document.querySelector(".closeBtn"),
    navbar = document.querySelector(".navbar");

burgerBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

function toggleNav() {
    navbar.classList.toggle("navbar--active")
}