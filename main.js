document.addEventListener('DOMContentLoaded', () => {
    var hamburger = document.getElementById("global_nav_right_ham")
    var mobileNav = document.getElementById("global_ham_links")
    var desktopNav = document.getElementsByClassName("global_nav_right")

    mobileNav.innerHTML = desktopNav[0].innerHTML
    // console.log(desktopNav[0].innerHTML)

    hamburger.addEventListener("click", () => {
        if (mobileNav.classList.contains("open")) {
            mobileNav.classList.remove("open")
            hamburger.classList.remove("open")
        } else {
            mobileNav.classList.add("open")
            hamburger.classList.add("open")
        }
    })
})