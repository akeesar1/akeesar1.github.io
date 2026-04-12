function showMessage() {
    alert("Welcome! Check out my projects.");
}

function changeText() {
    document.getElementById("bio").innerText =
        "I am passionate about cybersecurity and web development.";
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