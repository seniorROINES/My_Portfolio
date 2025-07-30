// ---- Insertion directe du header (au lieu de fetch) ----
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("header").innerHTML = `
        <a href="index.html" class="logo">About me</a>
        <nav>
            <a href="index.html" id="home">Resume</a>
            <a href="skills_education.html" id="skills">Skills & Education</a>
            <a href="experience.html" id="experience">Experience</a>
            <a href="contact.html" id="contact">Contact</a>
        </nav>
        <div class="menu-toggle" id="menu-toggle">
            <i class="fa-solid fa-bars"></i>
        </div>
        <div id="side-menu">
            <a href="index.html" id="home">Resume</a>
            <a href="skills_education.html" id="skills">Skills & Education</a>
            <a href="experience.html" id="experience">Experience</a>
            <a href="contact.html" id="contact">Contact</a>
        </div>
        <div id="overlay"></div>
    `;

    // --- Ajout dynamique de la classe active ---
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a, #side-menu a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // --- Menu toggle ---
    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// ---- Ton effet de texte (inchangé) ----
const roles = ["Web Developer", "Graphic Designer", "Software Developer"];
const typedText = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    let currentRole = roles[roleIndex];
    if (!deleting) {
        typedText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typedText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

// ---- Modal (inchangé) ----
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    const modal = document.getElementById("logoModal");
    const closeBtn = document.querySelector(".close-btn");

    if (logo && modal && closeBtn) {
        logo.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
        closeBtn.addEventListener("click", () => modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    } else {
        console.error("Modal ou logo introuvable !");
    }
});
