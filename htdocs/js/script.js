const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hidden");
        navbar.classList.add("show-nav");
    }, 0);
});
