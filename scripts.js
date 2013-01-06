$(function() {
    var windowScroll;

    $(window).scroll(function() {
        windowScroll = $(this).scrollTop();

        $('.hero').css({
            'margin-top': -(windowScroll/3) + "px",
            'opacity': 1 - (windowScroll/200)
        });

        $('.icon').css({
            'opacity': 1 - (windowScroll/175)
        });

        $('header').css({
            'background-position': '0 ' + (-windowScroll/8) + "px"
        });
    });
});

