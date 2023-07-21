const toggle = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");

toggle.addEventListener("click", ()=> {
    headNav.classList.toggle('open');
    toggle.classList.toggle('open');
});

var review = tns({
        container: '.reviews__wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controlsText: ['<i class="fa-solid fa-chevron-left text-[1rem] md:text-[2rem]"></i>','<i class="fa-solid fa-chevron-right text-[1rem] md:text-[2rem]"></i>'],
        speed:900
        }
    );

const tborder = document.querySelector(".header");

window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 20) {
        tborder.classList.add("active");
        } else {
        tborder.classList.remove("active");
        }
});

const drop = document.querySelector('.downloaders');
const dropdl = document.querySelector('.dropdown');

dropdl.addEventListener("click", ()=> {
    dropdl.classList.toggle('drop');
    drop.classList.toggle('drop');
    
});

function remove() {
    dropdl.classList.remove("drop");
    }


