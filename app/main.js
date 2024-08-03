
// Show Menu
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
