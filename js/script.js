
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');


    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });


    var headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
});

document.addEventListener('DOMContentLoaded', () => {
    const containerSlider = document.querySelector('#wrapper-content');
    const containerSlide = document.querySelector('.slick-list');
    const containerWrapper = document.querySelector('.slick-track');
    let isSliderInitialized = false;

    const mediaQuery = window.matchMedia('(max-width: 850px)');
    checkWidth(mediaQuery);

    mediaQuery.addListener(checkWidth);

    function checkWidth(mediaQuery) {
        const elementCount = containerSlider ? containerSlider.children.length : 0;
        const elementsCount = containerWrapper ? containerWrapper.querySelectorAll('.slick-slide').length : 0;

        if (elementCount >= 4 || elementsCount >= 4) {
            if (containerSlider) {
                containerSlider.classList.add('slider');
                if (!isSliderInitialized) {
                    initSlider();
                }
                $(".slider").slick('refresh');
                console.log("Все знову x1")
            }
        } else {
            if (mediaQuery.matches) {
                if (containerSlider) {
                    containerSlider.classList.add('slider');
                    if (!isSliderInitialized) {
                        initSlider();
                    }
                    $(".slider").slick('refresh');
                    console.log("Все знову x2")
                }
            } else {
                if (containerSlider && containerSlider.classList.contains('slider')) {
                    if (isSliderInitialized) {
                        $('.slider').slick('unslick');
                        isSliderInitialized = false;
                    };
                    console.log("Все знову x3")
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

