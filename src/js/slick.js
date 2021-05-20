$(function() { 
    $('.reviews-list').slick({
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
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
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.reviews-list',
        centerMode: true,
        centerPadding: '0px'
    });

})