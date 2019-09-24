$(document).ready(function () {

    $('.arrow').click(function (event) {
        event.preventDefault();
        console.log('clicked!');

        $('html, body').animate({
            scrollTop: $('.mainHeaderContainer').offset().top + $('.mainHeaderContainer').height()
        }, 800);

});



})