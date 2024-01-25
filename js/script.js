
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
    let isSliderInitialized = false;

    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const elementCount = containerSlider ? containerSlider.children.length : 0;

    if (elementCount >= 4) {
        if (containerSlider && !containerSlider.classList.contains('slider')) {
            containerSlider.classList.add('slider');
            if (!isSliderInitialized) {
                initSlider();
                $(".slider").slick('refresh');
                console.log("Більше ніж 4 елемента");
            }
        }
    } else {
        console.log("Менше ніж 4 елемента");
    }
    
    mediaQuery.addListener(checkWidth);

    function checkWidth(mediaQuery) {
        if (elementCount < 4) {
            if (mediaQuery.matches) {
                if (containerSlider && !containerSlider.classList.contains('slider')) {
                    containerSlider.classList.add('slider');
                    if (!isSliderInitialized) {
                        initSlider();
                        console.log("Є слайдер");
                        $(".slider").slick('refresh');
                    }
                }
            } else {
                if (containerSlider && containerSlider.classList.contains('slider')) {
                    if (isSliderInitialized) {
                        $('.slider').slick('unslick');
                        isSliderInitialized = false;
                        console.log("Слайдер знищено");
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


