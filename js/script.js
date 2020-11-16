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
// reviews__slider__img
$(document).ready(function () {
    $(".reviews__slider__img").slick({
        slidesToShow: 7,
        arrows: true,
        // adaptiveHeight: true,
        centerMode: true,
        asNavFor: ".reviews__slider__desc",
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: false
        responsive: [{
            breakpoint: 1350,
            settings: {
                slidesToShow: 5,
            }
        }, {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            }
        }]
    });
});

// reviews__slider__desc
$(document).ready(function () {
    $(".reviews__slider__desc").slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: ".reviews__slider__img",
        // adaptiveHeight: true,
    });
});
// ------------------------------------------------
let active = 0
let item = document.querySelectorAll('.staff__item')

document.querySelector('.staff__arrow-prew').onclick = () => {
    item[active].classList.add('hidden')
    if (active + 1 == item.length) {
        active = 0
    } else {
        active++
    }
    item[active].classList.remove('hidden')
}

document.querySelector('.staff__arrow-next').onclick = () => {
    item[active].classList.add('hidden')
    if (active == 0) {
        active = item.length - 1
    } else {
        active--
    }
    item[active].classList.remove('hidden')
}