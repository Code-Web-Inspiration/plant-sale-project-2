"use strict";

// JAVASCRIPT FILE

var navbarSlide = document.querySelector('.header-nav-list')
// const navbarHeight = navBar.offsetHeight
const menuButton = document.querySelector('#menu-button')

const handleScrollY = function () {
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}

// function navbarStiky() {
//     navBar.classList.toggle('stiky', window.scrollY && handleScrollY() > navbarHeight)
// }

window.onload = () => {
    menuButton.addEventListener('click', function () {
        switch (this.children[0].className) {
            case 'web-site-menu-open-btn-component':
                this.children[0].className = 'web-site-menu-close-btn-component'
                navbarSlide.classList.add('slide')
                break;
            case 'web-site-menu-close-btn-component':
                this.children[0].className = 'web-site-menu-open-btn-component'
                navbarSlide.classList.remove('slide')
                break;
        
            default:
                this.children[0].className = 'web-site-menu-open-btn-component'
                break;
        }
    }) 
}