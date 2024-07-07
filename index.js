let arrowClose = document.querySelector('.close-arrow');
let openArrow = document.querySelector('.open-arrow');
let sideBar = document.querySelector('.sidebar');

function openMenu() {
    sideBar.classList.remove('close');
    sideBar.classList.add('open');
    sideBar.style.display = 'block';
    openArrow.style.display = 'none';
    arrowClose.style.display = 'block';

    const links = document.querySelectorAll('.sidebar-menu a');
    links.forEach((link, index) => {
        link.style.transitionDelay = `${index * 0.1}s`;
    });
}

function closeMenu() {
    sideBar.classList.remove('open');
    sideBar.classList.add('close');
    setTimeout(() => {
        sideBar.style.display = 'none';
    }, 500);
    arrowClose.style.display = 'none';
    openArrow.style.display = 'block';
}
