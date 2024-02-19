//Script for site height
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const body = document.body;

    //Function of updating the header height
    function updateHeaderHeight() {
        const headerHeight = header.offsetHeight;
        body.style.paddingTop = headerHeight + 'px';
    }

    //Calling a function when a hage is loaded
    updateHeaderHeight();

    //Calling a function when resizing a window
    window.addEventListener('resize', updateHeaderHeight);
});

//Function for normal link navigation 
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');

    //Function for smooth scrolling on link click
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').slice(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth' 
                });
            }
        });
    });
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
    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');

    // Close burger menu after link click
    var links = document.querySelectorAll('#burgerMenu .burgerLink');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
        });
    });
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
            infinite: true,
            autoplay: false,
            arrows: false,
            dots: true,
            pauseOnHover: true,

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
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: true,
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
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 10000,
        speed: 1500,
    });
});

//Script to notifying about successful form filling
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var message = document.getElementById("message");
        var overlay = document.getElementById("overlay");
        message.classList.remove("hidden");
        overlay.style.display = "block"; 

        //Disapperance of a message
        setTimeout(function() {
            message.classList.add("hidden");
            overlay.style.display = "none"; 
        }, 3000); 
        this.reset(); 
    });
});
