document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    function checkScreenSize() {
        if (window.innerWidth >= 768) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});
