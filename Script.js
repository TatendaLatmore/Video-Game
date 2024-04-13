const darkModeToggle = document.getElementById("darkModeToggle");
const navLinks = document.querySelectorAll(".nav-links a");


darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    navLinks.forEach(link => {
        link.classList.toggle("dark-link");
    });
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


