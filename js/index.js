document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            navbar.classList.add("animation");
            navbar.style.display = "block";
        } else {
            navbar.classList.remove("animation");
            navbar.style.display = "none";
        }
    });
});
