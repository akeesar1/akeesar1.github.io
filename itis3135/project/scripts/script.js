function showMessage() {
    const target = document.getElementById("welcome-message");
    if (target) {
        target.textContent = "Thanks for visiting. Explore my engineering interests, projects, skills, and future goals below.";
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

