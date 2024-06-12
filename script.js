// Menu icon on navbar
let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}

// Dark mode toggle
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bxs-sun');
    document.body.classList.toggle('dark-mode');
}