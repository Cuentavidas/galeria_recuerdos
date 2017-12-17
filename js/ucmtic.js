$(document).ready(function(){   
    scrollToTop();
});

function scrollToTop() {
   $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#to_top').fadeIn();
        } else {
            $('#to_top').fadeOut();
        }
    });

    $('#to_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    }); 
}