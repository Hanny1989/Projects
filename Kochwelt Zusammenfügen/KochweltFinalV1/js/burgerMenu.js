function toggleBurgerMenu() {
    let menu = document.getElementById("burger-nav");
    menu.classList.toggle("burger-nav-container-open");
}


document.addEventListener("click", function (event) {
    let menu = document.getElementById("burger-nav");
    let menuIcon = document.getElementById("burger-menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("burger-nav-container-open");
    }
});