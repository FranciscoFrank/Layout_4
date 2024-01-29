
document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');


    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });


    var headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px', console.log("Все не працює"));
});

document.addEventListener('DOMContentLoaded', () => {
    const containerSlider = document.querySelector('#wrapper-content');
    let isSliderInitialized = false;

    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const elementCount = containerSlider ? containerSlider.children.length : 0;

    if (elementCount >= 4) {
        if (containerSlider && !containerSlider.classList.contains('slider')) {
            containerSlider.classList.add('slider');
            if (!isSliderInitialized) {
                initSlider();
                $(".slider").slick('refresh');
            }
        }
    }
    
    mediaQuery.addListener(checkWidth);
    console.log(checkWidth(mediaQuery))

    function checkWidth(mediaQuery) {
        if (elementCount < 4) {
            if (mediaQuery.matches) {
                if (containerSlider && !containerSlider.classList.contains('slider')) {
                    containerSlider.classList.add('slider');
                    if (!isSliderInitialized) {
                        initSlider();
                        $(".slider").slick('refresh');
                    }
                }
            } else {
                if (containerSlider && containerSlider.classList.contains('slider')) {
                    if (isSliderInitialized) {
                        $('.slider').slick('unslick');
                        isSliderInitialized = false;
                    }
                    containerSlider.classList.remove('slider');
                }
            }
        }
    }

    
    function initSlider() {
        $(".slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            initialSlide: 1,
            dots: true,
            infinite: false,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        isSliderInitialized = true;
    }
});


$(document).ready(function(){
    $('.review-content').slick({
        dots: true,
        infinite: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1500,
        fade: true,
    });
});


$(document).ready(function(){
    $('.mentors-slider').slick({
        dots: true,
        infinite: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 1500,
    });
});
