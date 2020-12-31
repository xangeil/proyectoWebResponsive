$(document).ready(function() {

    $('.boton').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.boton').slideDown(300);
        } else {
            $('.boton').slideUp(300);
        }
    });

});