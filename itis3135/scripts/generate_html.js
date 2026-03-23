document.getElementById("generateHTML").addEventListener("click", () => {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const htmlCode = `
<h2>Introduction HTML</h2>
<h3>${firstName} ${lastName}</h3>
`;

    document.getElementById("output").innerHTML = `
        <h2>Introduction HTML</h2>
        <pre><code>${htmlCode.replace(/</g, "&lt;")}</code></pre>
    `;

    document.getElementById("form").style.display = "none";
});