$(function () {

    // $(window).resize(function () {

    //     $('header').height($(window).height())

    // });

    // $('header').height($(window).height())

    $('.showMoreWork').click(function () {
        $('.hidden').fadeIn(2000);
        $(this).addClass('disabled');
        $(this).innerHTML("hhh")
    });

    function checkClients() {
        // if ($('.client:first').hasClass('active')) {
        //     $('.leftArrow').fadeOut(300);
        // } else {
        //     $('.leftArrow').fadeIn(300);
        // }

        // if ($('.client:last').hasClass('active')) {
        //     $('.rightArrow').fadeOut(300);
        // } else {
        //     $('.rightArrow').fadeIn(300);
        // }

        $('.client:first').hasClass('active') ? $('.leftArrow').fadeOut(300) : $('.leftArrow').fadeIn(300)

        $('.client:last').hasClass('active') ? $('.rightArrow').fadeOut(300) : $('.rightArrow').fadeIn(300)
    };

    checkClients()

    $('.testimonialsSection i').click(function () {
        if ($(this).hasClass('rightArrow')) {
            $('.testimonialsSection .active').fadeOut(300, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn()
                checkClients()
            })
        } else {
            $('.testimonialsSection .active').fadeOut(300, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn()
                checkClients()
            })
        }
    })

    var loader = document.querySelector(".loader");

    window.addEventListener("load", vanish);

    function vanish() {
        loader.classList.add("disappear")
    };

});