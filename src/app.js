"use strict";

// JAVASCRIPT FILE

const navBar = document.querySelector('#header-top')
const navbarSlide = document.querySelector('.header-nav-list')
const navbarHeight = navBar.offsetHeight
const menuButton = document.querySelector('#menu-button')

const handleScrollY = function () {
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}

// const navbarStiky = function () {
//     navBar.classList.toggle('stiky', window.scrollY && handleScrollY() > navbarHeight)
// }

const clickMenu = function (element) {
    switch (element.children[0].className) {
        case 'web-site-menu-open-btn-component':
            element.children[0].className = 'web-site-menu-close-btn-component'
            navbarSlide.classList.add('slide')
            break;
        case 'web-site-menu-close-btn-component':
            element.children[0].className = 'web-site-menu-open-btn-component'
            navbarSlide.classList.remove('slide')
            break;

        default:
            element.children[0].className = 'web-site-menu-open-btn-component'
            break;
    }
}

window.onload = () => {

    // window.addEventListener('scroll', ()=> navbarStiky())
    menuButton.addEventListener('click', function () {
        return clickMenu(this)
    }) 
}