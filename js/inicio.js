jQuery(document).ready(function($) {
    $('#slider div:gt(0)').hide();
    setInterval(function() {
        $('#slider div:first-child').fadeOut(3000)
            .next('div').fadeIn(1000)
            .end().appendTo('#slider');
    }, 4000);
});

$(window).resize(function() {
    $('#slider').css('height', $('#content').height());
});

setInterval(function() {
    $('#slider').css('height', $('#content').height());

}, 100);
