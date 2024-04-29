const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hidden");
        navbar.classList.add("show-nav");
    }, 0);
});


let button = document.getElementById("topBtn");//Get button ID

window.onscroll = function() {scrollFunction()};

//Display the button when not at top of page
function scrollFunction() {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}
//Support for all browsers
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}