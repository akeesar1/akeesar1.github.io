function showMessage() {
    const target = document.getElementById("welcome-message");

    if (target) {
        target.textContent = "Thanks for visiting. Explore my engineering interests, projects, skills, and future goals.";
    } else {
        alert("Welcome! Explore my engineering portfolio.");
    }
}

function changeText() {
    const bio = document.getElementById("bio");

    if (bio) {
        bio.textContent = "I am passionate about mechanical engineering, aerospace innovation, and using design and analysis to solve practical problems.";
    }
}

function openProject(url) {
    window.open(url, "_blank");
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    if (name === "" || email === "" || message === "") {
        error.textContent = "Please fill out all fields.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }

    success.textContent = "Thank you! Your message has been submitted successfully.";

    document.querySelector("form").reset();
    return true;
}

// Navigation effect: smooth scroll for same-page links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            links.forEach(function (navLink) {
                navLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});