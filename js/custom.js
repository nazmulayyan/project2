$(function(){

    //back-to-top button
    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if (scrolling > 100){
            $('.back-to-top').fadeIn(500);
        }
        else{
            $('.back-to-top').fadeOut(500);
        }
        if (scrolling > 100){
            $('.nav').addClass("bg");
        }
        else{
            $('.nav').removeClass("bg");

        }
    });

    //preloder
    $(window).on('load',function(){
        $('.preloder').delay(500).fadeOut(500);
    });


     //animation scroll js
     var html_body = $('html, body');
     $('.menu a').on('click', function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 html_body.animate({
                     scrollTop: target.offset().top - 62
                 }, 1500);
                 return false;
             }
         }
     });





});