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

function validateForm() {
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        document.getElementById("error").innerText = "Invalid email!";
        return false;
    }

    return true;
}

// AJAX example
function sendData() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            name: document.getElementById("name").value
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}