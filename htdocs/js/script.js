//------------Preloader-------------
const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");

window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hidden");
        navbar.classList.add("show-nav");
    }, 0);
});

//--------Back to top button--------
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

//Form functions

function validateForm() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Name field must be filled out");
    }
    else if (email === "") {
        alert("Email field must be filled out");
    }
    else if (!emailRegex.test(email)) {
        alert("Invalid email format.\nTry again")
    }
    else if (message === "") {
        alert("Message field must be filled out");
    }
    else{
        alert("Thank you " + name + ". " + "\nWe have passed on your message:\n\n" + message);
    }
}