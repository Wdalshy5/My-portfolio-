document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light-mode";
    
    document.body.classList.add(currentTheme);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        const newTheme = document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
        localStorage.setItem("theme", newTheme);
    });

    // Apply fade-in animation to all sections
    const fadeElements = document.querySelectorAll("section");
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("fade-in");
        }, index * 300); // Delays each section for a staggered effect
    });
});
