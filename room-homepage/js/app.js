const burgerBtn = document.querySelector(".burgerBtn"),
    closeBtn = document.querySelector(".closeBtn"),
    navbar = document.querySelector(".navbar"),
    btnNext = document.querySelector(".nextBtn"),
    btnPrev = document.querySelector(".prevBtn"),
    slides = document.querySelectorAll(".slides");

let slideIndex = 1,
    slideLength = findSlideLength(slides),
    slideShowTime = 4000,
    playInterval;

// Toggle Mobile Navigation

burgerBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

function toggleNav() {
    navbar.classList.toggle("navbar--active")
}

//Slider


//show first slide, and start autoPlay of slides
showSlide(slideIndex);
autoPlay();

//on clicking button, change slide, and reset autoPlay Interval Timer
btnNext.addEventListener('click', () => {
    clearInterval(playInterval);
    autoPlay();
    changeSlideIndex(+1);
    showSlide(slideIndex);
});
btnPrev.addEventListener('click', () => {
    clearInterval(playInterval);
    autoPlay();
    changeSlideIndex(-1);
    showSlide(slideIndex);
});

//Keep slide index within range from 1 to Lenght of slides
function changeSlideIndex(i) {
    slideIndex += i
    if (slideIndex > slideLength) {
        slideIndex = slideLength;
    } else if (slideIndex < 1) {
        slideIndex = 1;
    }
}

// Change classes on active/inactive slides to show/hide them
function showSlide(i) {
    slides.forEach((slide) => {
        if (slide.classList.contains(`slide-${i}`)) {
            slide.classList.remove("hide");
            slide.classList.add("ease-in");
            slide.classList.remove("ease-out");


        } else {
            slide.classList.remove("ease-in");
            slide.classList.add("ease-out");
            slide.classList.add("hide");
        }
    });
}

//find number of slides available by surveying elements with class starting with "slide-" as a string
function findSlideLength(slides) {
    let length = 0
    slides.forEach((slide) => {
        slide.classList.forEach((e) => {
            if (e.startsWith('slide-')) {
                let i = Number(e.slice('slide-'.length))
                if (i > length) {
                    length = i;
                }
            }
        })
    })
    return length;
}

// set interval to auto change slide
function autoPlay() {
    playInterval = setInterval(() => {
        showSlide(slideIndex);
        slideIndex += 1;
        if (slideIndex > slideLength) {
            slideIndex = 1;
        }
    }, slideShowTime);
}