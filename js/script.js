//Script for site height
document.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
});

//Script for the burger menu
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');

    //Click tracking
    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    });

    //Determining the height of the site
    var headerHeight = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px', console.log("Все не працює"));
});

//Script for a slider with "website development"
document.addEventListener('DOMContentLoaded', () => {
    const containerSlider = document.querySelector('#wrapper-content');
    let isSliderInitialized = false;
    
    //Announcement of the maximum width for slider activation
    const mediaQuery = window.matchMedia('(max-width: 850px)');
    const elementCount = containerSlider ? containerSlider.children.length : 0;

    //Count the number of elements in the slider
    if (elementCount >= 4) {
        if (containerSlider && !containerSlider.classList.contains('slider')) {
            containerSlider.classList.add('slider');
            if (!isSliderInitialized) {
                initSlider();
                $(".slider").slick('refresh');
            }
        }
    }
    
    //Monitor the width of the site
    mediaQuery.addListener(checkWidth);
    console.log(checkWidth(mediaQuery))

    //Slider activation conditions
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

    //Activating the slider
    function initSlider() {
        $(".slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            initialSlide: 1,
            dots: true,
            infinite: false,

            //If the width is less than 600, display one slide
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

//Activation of the slider for the testimonial block
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

//Activation of the slider for the block with mentors
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
