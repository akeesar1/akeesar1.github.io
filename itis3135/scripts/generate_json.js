document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("generateJSON").addEventListener("click", () => {

        const courses = [];
        document.querySelectorAll("#courses > div").forEach(course => {
            const inputs = course.querySelectorAll("input");

            courses.push({
                department: inputs[0].value,
                number: inputs[1].value,
                name: inputs[2].value,
                reason: inputs[3].value
            });
        });

        const links = [
            { name: "GitHub", href: "https://github.com/" },
            { name: "LinkedIn", href: "https://linkedin.com/" },
            { name: "FreeCodeCamp", href: "https://freecodecamp.org" },
            { name: "Codecademy", href: "https://codecademy.com" },
            { name: "UNCC", href: "https://charlotte.edu" }
        ];

        const data = {
            first_name: document.getElementById("firstName").value,
            preferred_name: document.getElementById("nickname").value,
            last_name: document.getElementById("lastName").value,
            divider: document.getElementById("divider").value,
            mascot_adjective: document.getElementById("mascotAdj").value,
            mascot_animal: document.getElementById("mascotAnimal").value,
            image: "itis3135/images/PC.jpg",
            image_caption: document.getElementById("caption").value,
            personal_statement: document.getElementById("personal").value,
            personal_background: document.getElementById("personalBg").value,
            professional_background: document.getElementById("professionalBg").value,
            academic_background: document.getElementById("academicBg").value,
            subject_background: document.getElementById("subjectBg").value,
            primary_computer: document.getElementById("primaryComp").value,
            courses: courses,
            links: links
        };

        document.getElementById("output").innerHTML = `
            <h2>Introduction JSON</h2>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;

        document.getElementById("form").style.display = "none";
    });

});