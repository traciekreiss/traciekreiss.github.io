document.addEventListener('DOMContentLoaded', (event) => {
    var hamburger = document.getElementById("global_nav_right_ham");
    var mobileNav = document.getElementById("global_ham_links")

    hamburger.addEventListener("click", (e) => {
        if (mobileNav.classList.contains("open")) {
            mobileNav.classList.remove("open")
            hamburger.classList.remove("open")
        } else {
            mobileNav.classList.add("open")
            hamburger.classList.add("open")
        }
    });
})