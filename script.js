let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelectorAll('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('headar');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({
    reset: true,
    distance: '80',
    duration: 2000,
    delay: 200

});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*=================  typed js  ==================*/

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Youtuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});
// ----------about ----------
let skill_tab = document.getElementById("skills-tab");
let exp_tab = document.getElementById("experience-tab");
let edu_tab = document.getElementById("education-tab");
let skill_btn = document.getElementById("skills-btn");
let exp_btn = document.getElementById("experience-btn");
let edu_btn = document.getElementById("education-btn");
let hamburger_open = document.getElementById("hamburger-open");
let hamburger_close = document.getElementById("hamburger-close");
let menu = document.getElementById("side-menu");
console.log(menu)
// console.log(this code is writtenn by sunny bhushan dabang sarkar of bihar power ihe se suru hola ehe khtmhokhela)

const btnHandler = (tab)=>{
    if(tab=="skill"){
        skill_tab.classList.add("active-tab");
        exp_tab.classList.remove("active-tab");
        edu_tab.classList.remove("active-tab");
    }
    else if(tab =="exp"){
        skill_tab.classList.remove("active-tab");
        exp_tab.classList.add("active-tab");
        edu_tab.classList.remove("active-tab");

    }
    else{
        skill_tab.classList.remove("active-tab");
        exp_tab.classList.remove("active-tab");
        edu_tab.classList.add("active-tab");

    }
}
// console.log(menu)
const hamburgerHandler = (toggle)=>{
    if(toggle=="open"){
        menu.classList.add("nav-active")
    }
    else{
        menu.classList.remove("nav-active")
    }
}

skill_btn.addEventListener("click",()=>btnHandler("skill"));
exp_btn.addEventListener("click",()=>btnHandler("exp"));
edu_btn.addEventListener("click",()=>btnHandler("edu"));
hamburger_open.addEventListener("click",()=>hamburgerHandler("open"));
hamburger_close.addEventListener("click",()=>hamburgerHandler("close"));
