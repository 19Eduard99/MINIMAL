const settingSlider ={
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // centerMode:true,
    // centerPadding: '0',
    mobileFirst: false,
    // responsive: [
    //     {
    //         breakpoints: 400,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1
    //         }
    //     },
    //     // {
    //     //     breakpoints: 1024,
    //     //     settings: 'unslick'
    //     // }
    // ]
}

$(document).ready(function () {
    $('.slider').slick(settingSlider);
})

// $(window).on()