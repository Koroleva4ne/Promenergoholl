$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_prev.png" class="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_next.png" class="next"></button>',
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    function valideForms(form){
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, укажите свое имя",
                phone: "Пожалуйста, укажите свой номер телефона",
                email: {
                  required: "Пожалуйста, укажите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    valideForms('#communication-form');

    $('input[name=phone]').mask("+7(999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault(); /* отмена перезагрузки сайта при отправке форм */
        if (!$(this).valid()) { /* чтобы не отправлялась пустая форма */
            return;
        }
        $.ajax({ /* отправка форм на сервер */
            type: "POST", /* получить/отдать(POST) данные */
            url: "mailer/smart.php", /* куда */
            data: $(this).serialize() /* какие данные нужно отправить ($()) и подготовка перед отправкой на сервер serialize() */
        }).done(function() { /* действие после отправки формы */
            $(this).find("input").val(""); /* очистка всех кнопок */
            $('form').trigger('reset'); /* все формы должны очиститься */
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});