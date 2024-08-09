
/*=============== Show MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        });
    }
};

showMenu("nav-toggle", "nav-menu");

  // Close Menu
const navClose = document.getElementById("nav-close");

if (navClose) {
    navClose.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// ADD BLUR TO HEADER
const blurHeader = () => {
    const header = document.getElementById('header');
    // Cuando el desplazamiento sea mayor que 50 veces la altura del viewport, agrega la clase blur-header a la etiqueta header.
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

/*=============== Mouseover Videos ===============*/
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video');

    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });
        video.addEventListener('mouseout', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset


    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId)

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
