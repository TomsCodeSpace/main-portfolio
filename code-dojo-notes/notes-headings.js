// This controls collapsible headings


// MAIN HEADINGS
const headings = document.querySelectorAll(".heading");

headings.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        }
        else {
            content.style.display = "block";
        }

    });

});

// SUBHEADINGS
const subheadings = document.querySelectorAll(".subheading");

subheadings.forEach(button => {

    button.addEventListener("click", () => {

        const subcontent = button.nextElementSibling;

        if (subcontent.style.display === "block") {
            subcontent.style.display = "none";
        }
        else {
            subcontent.style.display = "block";
        }

    });

});

document.querySelectorAll(".heading").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("open");
    });
});