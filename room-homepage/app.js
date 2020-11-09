//Vaiables

const navtoggle = document.querySelector('.nav__toggle'),
    nav = document.querySelector('.nav'),
    navBackground = document.querySelector('.nav__background'),
    heroImagePrev = document.querySelector('.hero-image__prev'),
    heroImageNext = document.querySelector('.hero-image__next');

// TOGGLE NAVIGATION

navtoggle.addEventListener("click", () => {
    nav.classList.toggle("open")
})
navBackground.addEventListener("click", () => {
    nav.classList.toggle("open")
})

//Image Slider 

heroImagePrev.addEventListener("click", (e) => heroImageSlide(e, -1))
heroImageNext.addEventListener("click", (e) => heroImageSlide(e, 1))


function heroImageSlide(e, dir) {
    e.preventDefault();
    const items = document.querySelectorAll('.hero-image__img'),
        contents = document.querySelectorAll('.content--top'),
        count = items.length;
    let current;
    for (let i = 0; i < count; i++) {
        if (items[i].classList.contains('active')) {
            current = i;
        }
        items[i].classList.remove('active');
        contents[i].classList.remove('active');
    }
    let active = current + dir;
    if (active > count - 1) active = 0;
    if (active < 0) active = count - 1;
    items[active].classList.add('active');
    contents[active].classList.add('active');
}