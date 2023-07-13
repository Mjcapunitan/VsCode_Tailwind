const toggle = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");

toggle.addEventListener("click", ()=> {
    headNav.classList.toggle('open');
    toggle.classList.toggle('open');
});