let navbar = document.getElementById('navbar');
let body = document.getElementById("body");
let window_size = window.matchMedia("(max-width: 576px)");
if (window_size.matches) {

       navbar.style.display = "none";
}

function toggleNavBar() {

    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        body.style.display = "grid";
        body.style.gridTemplateColumns = "300px 1fr"

    } else if (navbar.style.display === "block") {
        navbar.style.display = "none";
        body.style.display = "grid";
        body.style.gridTemplateColumns = "50px 1fr"
    }
}

toggleNavBar();

