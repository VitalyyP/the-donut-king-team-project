import './sass/main.scss'

// кнопка читать больше-меньше btn-read-more

;(() => {
  const menuBtnRef = document.querySelector("[data-button]")
  const mobileMenuRef = document.querySelector("[data-text-more]")
  menuBtnRef.addEventListener("click", () => {
    const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
    menuBtnRef.classList.toggle("is-open")
    menuBtnRef.setAttribute("aria-expanded", !expanded)
    mobileMenuRef.classList.toggle("is-open")
  })
})()

// мобильное меню в хедере mobile-menu

;(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")
    const mobileNavList = document.querySelector('[data-menu-list]');
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
      menuBtnRef.classList.toggle("is-open")
      menuBtnRef.setAttribute("aria-expanded", !expanded)
      mobileMenuRef.classList.toggle("is-open")
    })
    mobileNavList.addEventListener("click", () => {
      const expanded = mobileNavList.getAttribute("aria-expanded") === "true" || false
      mobileMenuRef.classList.toggle('is-open');
      mobileNavList.setAttribute("aria-expanded", !expanded)
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.classList.toggle('is-active');
    })
})()
  
// плавная прокрутка страницы до нужной секции menu-delay


$(document).ready(function () {
  // Добавить плавную прокрутку до всех ссылок
  $('a').on('click', function (event) {
    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== '') {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (500) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        },
      );
    } // Конец, если
  });
});


// общая кнопка-скрол на странице scroll

 $(function () {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function () {
      // переместиться в верхнюю часть страницы
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        1000,
      );
    });
  });
  // при прокрутке окна (window)
  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut();
    }
  });


//   модальное окно с картой modal-map


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-map-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-close]'),
    modal: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// скрипт для menu-icon

    // Look for .hamburger
        var hamburger = document.querySelector(".hamburger");
        // On click
        hamburger.addEventListener("click", function() {
          // Toggle class "is-active"
          hamburger.classList.toggle("is-active");
          // Do something else, like open/close menu
        });

        
//   скрипт для блокировки кнопок в форме button-block


; (() => {
    registForm.addEventListener("input", () => {
        if (
          phone.validity.valid &&
          username.validity.valid &&
          email.validity.valid
        ) {
          registBtn.removeAttribute('disabled');
        } else {
          registBtn.setAttribute('disabled', 'disabled');
        }
    });
})()

    ; (() => {
        contactDiv.addEventListener("input", () => {
            if (user_email.validity.valid > 0 && question.validity.valid > 0) {
              contactBtn.removeAttribute('disabled');
            } else {
              contactBtn.setAttribute('disabled', 'disabled');
            }
        });
    })()


    // скрипт slick

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

    

    