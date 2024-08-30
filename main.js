const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
    let imgElement = hamburger.getAttribute('src')

    if (imgElement == "./images/icon-close.svg") {
        hamburger.src = "./images/icon-hamburger.svg";
        navBar.style.top = '-10rem';
    } else {
        hamburger.src = "./images/icon-close.svg";
        navBar.style.top = 0;
    }
})