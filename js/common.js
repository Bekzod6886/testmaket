"use strict"
$(document).ready(function () {
/* WOW ANIMATE */
    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 1,
            mobile: true,
            live: true
        }
    )
    wow.init();
/* WOW ANIMATE */

    $(document).ready(function() {
        var links = $('.fill_button');
        links.on('click', function(e) {
            e.preventDefault();
            var selector = $(this).attr('href');
            var target = $(selector).offset().top - 60;
    
            $('body, html').animate({
                scrollTop: target
            }, 1000)
        })
    })
    

/* FORM VALID */
$(".form").validate({
   });
});
/* FORM VALID */

var links = $('.nav-link');
links.on('click', function (e) {
    e.preventDefault();
    var selector = $(this).attr('href');
    var target = $(selector).offset().top - 60;
    $('.navbar').removeClass("open");
    hamburger.classList.remove("is-active");

    $('body, html').animate({
        scrollTop: target
    }, 2000)
})

