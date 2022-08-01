$(function () {

    $(window).resize(function () {

        $('header').height($(window).height())

    });

    $('header').height($(window).height())

    $('.showMoreWork').click(function () {
        $('.hidden').fadeIn(2000);
        $(this).addClass('disabled');
        $(this).innerHTML("hhh")
    });

});