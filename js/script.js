
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
    const wrapperIcons = document.querySelector('#wrapper-icons');
    
    let isSliderInitialized = false;

    function destroySlider() {
        if (isSliderInitialized) {
            $('#wrapper-content').slick('unslick');
            isSliderInitialized = false;
        }
    }

    function checkWidth() {
        if (window.innerWidth < 850) {
            containerSlider.classList.add('slider');
            initSlider();
        } else {
            containerSlider.classList.remove('slider');
            destroySlider();
        }
    }

    checkWidth();

    function initSlider() {
        $(".slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            initialSlide: 1,
            dots: true,
        });

        isSliderInitialized = true;
    
        $(".slider").slick('slickSetOption', 'infinite', false, true);
    }
    
    
    console.log(window.innerWidth);

    window.addEventListener('resize', () => {
        checkWidth();
    });
});



  
  