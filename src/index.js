import './sass/main.scss'

$(function() { 
    $('.reviews-list').slick({
        arrows: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.reviews-text',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });

    $('.reviews-text').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.reviews-list',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

})

