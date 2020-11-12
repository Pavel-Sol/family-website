// бургер---------------
document.querySelector('.header__burger__inside').addEventListener('click', hiddenHeader)

function hiddenHeader() {
    document.querySelector('.header').classList.add('hidden')
    document.querySelector('body').classList.remove('lock')
}

document.querySelector('.header__burger__outside').addEventListener('click', openHeader)

function openHeader() {
    document.querySelector('.header').classList.remove('hidden')
    document.querySelector('body').classList.add('lock')
}
// -------------- offer__slider -----------------
$(document).ready(function () {
    $(".offer__slider").slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: false
    });
});
// --------------------------------------------------------
$(document).ready(function () {
    $(".reviews__slider__img").slick({
        slidesToShow: 7,
        arrows: true,
        // adaptiveHeight: true,
        centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: false
    });
});