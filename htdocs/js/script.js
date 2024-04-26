const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hidden");
        navbar.classList.add("show-nav");
    }, 0);
});


let button = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;//Safari
    document.documentElement.scrollTop = 0;//Chrome, Firefox, IE and Opera
} 