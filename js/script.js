$(document).ready(function() {
    $('.header__burger, .menu-close').click(function(event) {
        $('.header__menu-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
        console.log('dssd');
    });
});