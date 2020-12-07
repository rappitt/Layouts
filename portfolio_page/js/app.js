//Variables

const navToggle = document.querySelector(".nav-toggle"),
    navLinks = document.querySelectorAll(".nav__link"),
    header = document.querySelector(".header"),
    changeSection = document.querySelector(".nav-change"),
    sectionOptions = {
        rootMargin: "0px 0px 0px 0px"
    },
    bottomDiff = 10,
    skillbars = document.querySelectorAll(".skillbar");

//Navigation Toggle
navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
})

//Navigation on Scroll

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }

    });
});

sectionObserver.observe(changeSection);

//Skillbar on Scroll


window.addEventListener("scroll", () => {
    skillbars.forEach((skillbar) => {
        const status = checkIfIsInView(skillbar);

        setWidth(skillbar, status, ".skillbar-bg");
    });
});

function setWidth(element, status, classname) {
    const child = element.querySelector(classname);
    child.style.width = status ? `${child.dataset.width}%` : `0%`;
}

function checkIfIsInView(element) {
    const bordersElements = element.getBoundingClientRect();
    return (
        bordersElements.top >= 0 &&
        bordersElements.left >= 0 &&
        bordersElements.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
        bordersElements.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) -
        bottomDiff
    );
}
// PANELS
var panels = document.querySelectorAll(".panel");

function panelToggle() {
    document.querySelectorAll(".active")[0].classList.toggle("active");
    this.classList.toggle("active");
}

panels.forEach(panel => panel.addEventListener('click', panelToggle));

// PORTFOLIO MODAL

const portfolioContainer = document.querySelector('.portfolio-items')


portfolioContainer.addEventListener('click', e => {
    // console.log(e)
    e.preventDefault()

    const modalToggle = e.target.closest('.portfolio-link')
        // console.log(modalToggle)
    if (!modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.modal-close')

    const modalOpen = _ => {
        modal.classList.add('is-open')
        modal.style.animation = 'modalIn 500ms forwards'
            //document.body.style.overflowY = 'hidden'
    }

    const modalClose = _ => {
        modal.classList.remove('is-open')
        modal.removeEventListener('animationend', modalClose)
    }


    closeButton.addEventListener('click', () => {
        modal.style.animation = 'modalOut 500ms forwards'
        modal.addEventListener('animationend', modalClose)
            //document.body.style.overflowY = 'scroll'
    })

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27) {
            modal.style.animation = 'modalOut 500ms forwards'
            modal.addEventListener('animationend', modalClose)
            document.body.style.overflowY = 'scroll'
        }
    })

    modalOpen()

})