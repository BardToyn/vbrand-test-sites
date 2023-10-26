/**header */

const burgerBtn = document.querySelector(".header-burger-btn");
const burgerBtnClose = document.querySelector(".header-burger-btn_close");
const burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.add("active");
    burgerMenu.style.top = "0";
});

burgerBtnClose.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    burgerMenu.style.top = "-100%";
});

document.addEventListener("DOMContentLoaded", function () {
    const headerLogo = document.querySelector(".header-logo");
    const headerNav = document.querySelector(".header-nav");
    const scrollTrigger = 150;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollTrigger) {
            headerLogo.style.opacity = 0;
            headerNav.style.opacity = 0;
        } else {
            headerLogo.style.opacity = 1;
            headerNav.style.opacity = 1;
        }
    });

    window.addEventListener("resize", function () {
        if (window.scrollY <= scrollTrigger) {
            headerLogo.style.opacity = 1;
            headerNav.style.opacity = 1;
        }
    });
});

/**header */