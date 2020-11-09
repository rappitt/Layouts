// NAVIGATION TOGGLER
const navtoggle = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const navBackground = document.querySelector('.nav__background');
navtoggle.onclick = function(e) {
    e.preventDefault()
    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
    }
}
navBackground.onclick = function() {
    nav.classList.remove('open');
}

//HERO IMAGE SLIDER
const heroImagePrev = document.querySelector('.hero-image__prev');
const heroImageNext = document.querySelector('.hero-image__next');
heroImagePrev.onclick = function(e) { heroImageSlide(e, -1); };
heroImageNext.onclick = function(e) { heroImageSlide(e, 1); };

function heroImageSlide(e, dir) {
    e.preventDefault();
    const items = document.querySelectorAll('.hero-image__img');
    const contents = document.querySelectorAll('.content--top');
    const count = items.length;
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

// ATTRIBUTION
const attribution = document.querySelector('.attribution__toggle');
attribution.onclick = function(e) {
    e.preventDefault()
    if (attribution.classList.contains('open')) {
        attribution.classList.remove('open');
    } else {
        attribution.classList.add('open');
    }
}