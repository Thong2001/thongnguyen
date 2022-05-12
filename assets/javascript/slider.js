$(document).ready(function() {
    $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        nextArrow: $('.next'),
        prevArrow: $('.prev')
    })
    $('.container__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: $('.container__slide-next'),
        prevArrow: $('.container__slide-prev')
    })

    $('.saleoff__drink-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.saleoff__drink-next'),
        prevArrow: $('.saleoff__drink-prev'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
    $('.new__drink-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.new__drink-next'),
        prevArrow: $('.new__drink-prev'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })
    $('.trademark__slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: $('.trademark-next'),
        prevArrow: $('.trademark-prev'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

})