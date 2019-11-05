let profile = document.querySelector('#profile');
let project = document.querySelector('#projects');
let contact = document.querySelector('#contact');
let games = document.querySelector('#games');
let ontwerp = document.querySelector('#ontwerp');
let header = document.querySelector('.fullscreen-header');
let carousels = bulmaCarousel.attach(); 

document.querySelector('#nav_home').addEventListener("click", () => scrollTo({
    top: 0,
    behavior: "smooth"
}));
document.querySelector('#nav_profile').addEventListener("click", () => smoothScroll(profile));
document.querySelector('#nav_project').addEventListener("click", () => smoothScroll(project));
// document.querySelector('#nav_games').addEventListener("click", () => smoothScroll(games));
document.querySelector('#nav_ontwerp').addEventListener("click", () => smoothScroll(ontwerp));
document.querySelector('#nav_contact').addEventListener("click", () => smoothScroll(contact));

document.querySelector('#header_arrow').addEventListener("click", () => scrollTo({
    top: header.clientHeight,
    behavior: "smooth"
}))

function smoothScroll(ev) {
    console.log('ながさき');
    scrollTo({
        top: ev.offsetTop + header.clientHeight - 50,
        behavior: "smooth"
    });
}

addModal('isaac');
addModal('ma100');
addModal('mythe');

addModal('hex');
addModal('mario');
addModal('inventory');

addModal('labyrinth');
addModal('lucas');
addModal('pukwudgie_ontwerp');
// addModal('runner');
// addModal('siteGame');
// addModal('healthGun');

function addModal(identifier) {

    let object = document.querySelector(`#${identifier}`);

    object.firstElementChild.addEventListener("click", () => {
        document.querySelector('html').classList.add('enable-scroll');
        object.querySelector(`#${identifier}_modal`).classList.add('is-active');
    });

    object.querySelector('.modal').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });

    object.querySelector('.delete').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });

    object.querySelector('.close').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });

    object.querySelector('.modal-card').addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // object.querySelector('.card .project_photo').addEventListener("click", (event) => {
    //     event.stopPropagation();
    //     document.querySelector('html').classList.add('enable-scroll');
    //     object.querySelector(`#${identifier}_enlarged`).classList.add('is-active');
    // });

    // object.querySelector('.modal-close').addEventListener("click", () => {
    //     document.querySelector('html').classList.remove('enable-scroll');
    //     object.querySelector(`#${identifier}_enlarged`).classList.remove('is-active');
    // });

    object.querySelector('.modal-background').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });
}