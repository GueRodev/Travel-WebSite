
/*=============== Mostrar MENU ===============*/
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

/*=============== Cerrar MENU ===============*/
const navClose = document.getElementById("nav-close");

if (navClose) {
    navClose.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVER MENU MOBILE ===============*/
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
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const video = accordionContent.querySelector('.video');

        // Cerrar cualquier otro acordeón activo
        document.querySelectorAll('.accordion-item.active').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                const vid = content.querySelector('.video');
                content.style.maxHeight = 0;
                vid.pause();
                vid.currentTime = 0;
            }
        });

        // Toggle el acordeón seleccionado
        accordionItem.classList.toggle('active');

        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            video.play(); // Reproduce el video
        } else {
            accordionContent.style.maxHeight = 0;
            video.pause(); // Pausa el video
            video.currentTime = 0; // Resetea el video al inicio
        }
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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    reset: true 
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .explore__data, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})
sr.reveal(`.accordion-item`, {delay: 400, distance: '50px', interval: 100})




