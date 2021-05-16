import './sass/main.scss'

$(function() {

    $('.reviews-list').slick({
        // dots: true,
        arrows: false,
        infinite: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
        ],
        adaptiveHeight: true
    })

})

