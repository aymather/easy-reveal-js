ScrollReveal({ reset: false });

var slideUp = {
    distance: '40%',
    origin: 'bottom',
    duration: '1000'
};

var slideLeft = {
    distance: '100%',
    origin: 'left',
    duration: '1000'
}

var slideRight = {
    distance: '100%',
    origin: 'right',
    duration: '1000'
}

var slideTop = {
    distance: '100%',
    origin: 'top',
    duration: '1000'
}

var leftEle = document.querySelectorAll('.slide-left');
var rightEle = document.querySelectorAll('.slide-right');
var upEle = document.querySelectorAll('.slide-up');
var topEle = document.querySelectorAll('.slide-top');

ScrollReveal().reveal(upEle, slideUp);
ScrollReveal().reveal(leftEle, slideLeft);
ScrollReveal().reveal(rightEle, slideRight);
ScrollReveal().reveal(topEle, slideTop);

