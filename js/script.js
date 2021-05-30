"strict mode";

const nav = document.querySelector(".nav");
const sticky = nav.offsetTop;
////////////////////////////////////////////////
// Navigation
////////////////////////////////////////////////

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= sticky + 1) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

////////////////////////////////////////////////
// All Buttons
////////////////////////////////////////////////

document.querySelector(".nav__links").addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else {
        console.log(false);
    }
});

document.querySelector(".header__h1").addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.classList.contains("btn")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    } else {
        console.log(false);
    }
});