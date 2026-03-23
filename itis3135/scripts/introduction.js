const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const nickname = document.getElementById("nickname").value;
    const lastName = document.getElementById("lastName").value;
    const mascotAdj = document.getElementById("mascotAdj").value;
    const mascotAnimal = document.getElementById("mascotAnimal").value;
    const caption = document.getElementById("caption").value;
    const personal = document.getElementById("personal").value;
    const quote = document.getElementById("quote").value;
    const quoteAuthor = document.getElementById("quoteAuthor").value;

    output.innerHTML = `
        <h2>Introduction Form</h2>

        <h3>${firstName} "${nickname}" ${lastName} ★ ${mascotAdj} ${mascotAnimal}</h3>

        <figure>
            <img src="itis3135/images/PC.jpg" alt="Image" width="300">
            <figcaption>${caption}</figcaption>
        </figure>

        <p>${personal}</p>

        <blockquote>
            ${quote}
            <cite>— ${quoteAuthor}</cite>
        </blockquote>

        <br>
        <a href="intro_form.html">Reset</a>
    `;

    form.style.display = "none";
});


document.getElementById("clearBtn").addEventListener("click", () => {
    document.querySelectorAll("input, textarea").forEach(el => {
        el.value = "";
    });
});


document.getElementById("addCourse").addEventListener("click", () => {

    const div = document.createElement("div");

    div.innerHTML = `
        <input placeholder="Dept">
        <input placeholder="Number">
        <input placeholder="Name">
        <input placeholder="Reason">
        <button type="button" class="delete">X</button>
    `;

    div.querySelector(".delete").addEventListener("click", () => {
        div.remove();
    });

    document.getElementById("courses").appendChild(div);
});