const swiper = new Swiper('.carousel', {
    speed: 400,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4.4,
    direction: 'horizontal',
    resistance: false,
    resistance: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        1440: {
            spaceBetween: 30,
            slidesPerView: 4.4
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {

        // function valideForms(form){
    //     $(form).validate({
    //         rules: {
    //             name: "required",
    //             phone: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             }
    //         },
    //         messages: {
    //             name: "Пожалуйста, укажите свое имя",
    //             phone: "Пожалуйста, укажите свой номер телефона",
    //             email: {
    //               required: "Пожалуйста, укажите свою почту",
    //               email: "Неправильно введен адрес почты"
    //             }
    //         }
    //     });
    // }
    // valideForms('#communication-form');

    // $('input[name=phone]').mask("+7(999) 999-99-99");

    // $('form').submit(function(e) {
    //     e.preventDefault(); /* отмена перезагрузки сайта при отправке форм */
    //     if (!$(this).valid()) { /* чтобы не отправлялась пустая форма */
    //         return;
    //     }
    //     $.ajax({ /* отправка форм на сервер */
    //         type: "POST", /* получить/отдать(POST) данные */
    //         url: "mailer/smart.php", /* куда */
    //         data: $(this).serialize() /* какие данные нужно отправить ($()) и подготовка перед отправкой на сервер serialize() */
    //     }).done(function() { /* действие после отправки формы */
    //         $(this).find("input").val(""); /* очистка всех кнопок */
    //         $('form').trigger('reset'); /* все формы должны очиститься */
    //     });
    //     return false;
    // });

    // const burgerMenu = document.querySelector('.header__menu');
    // const burgerBtn = document.querySelector('.hamburger');

    // if(burgerMenu && burgerBtn) {
    //     burgerBtn.addEventListener('click', function(e) {
    //         e.preventDefault();

    //         if(burgerBtn.classList.contains('hamburger_active')) {
    //             burgerBtn.classList.remove('hamburger_active');
    //             burgerMenu.classList.remove('active');
    //             document.body.style.overflow = 'auto';
    //         } else {
    //             burgerBtn.classList.add('hamburger_active');
    //             burgerMenu.classList.add('active');
    //             document.body.style.overflow = 'hidden';
    //         }
    //     })
    // }
});