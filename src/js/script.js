const swiper = new Swiper('.carousel', {
    speed: 400,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4.4,
    direction: 'horizontal',
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 15,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        525: {
            slidesPerView: 2.4,
            spaceBetween: 15,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        630: {
            slidesPerView: 3,
            spaceBetween: 15,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        755: {
            slidesPerView: 3.4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        845: {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        1075: {
            slidesPerView: 3.4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.button-next-media'
            }
        },
        1275: {
            slidesPerView: 4.4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            }
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {

    // Menu

    const hamburger = document.querySelectorAll('.hamburger'),
          menu = document.querySelector('.menu'),
          menuParent = document.querySelector('.menu__block'),
          menuItem = document.querySelectorAll('.menu-item');

    function openMenu() {
        hamburger.forEach(i => {
            i.classList.toggle('active');
        });
        
        menu.classList.toggle('active');
    }

    hamburger.forEach(item => {
        item.addEventListener('click', () => {
            openMenu();
        });
    });

    menuParent.addEventListener('click', (event) => {
        const t = event.target;

        if(t && t.classList.contains('menu-item')) {
            menuItem.forEach(item => {
                if(t == item) {
                    openMenu();
                }
            });
        }
    });

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