"use strict";

// JAVASCRIPT FILE

const navbarSlide = document.querySelector('.header-nav-list')
const menuButton = document.querySelector('#menu-button-img')

const handleScrollY = function () {
    let supportPageOffset = window.pageXOffset !== undefined
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
}

const clickMenu = function (param) {
    const elemetLength = param.src.split('/').length
    let element = param.src.split('/')[elemetLength - 1]
    switch (element) {
        case 'menu.png':
            element = 'close.png'
            param.src = 'image/icon/' + element
            navbarSlide.classList.add('slide')
            break;
        case 'close.png':
            element = 'menu.png'
            param.src = 'image/icon/' + element
            navbarSlide.classList.remove('slide')
            break;
        default:
            element = 'menu.png'
            break;
    }
}

window.onload = () => {

    menuButton.addEventListener('click', function () {
        return clickMenu(this)
    }) 
}