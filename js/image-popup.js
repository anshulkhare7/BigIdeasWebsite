$(function () {
    "use strict";
    
    $(".card__info").click(function () {
        if($(window).width() <= 767){
            return;
        }
        var $src = $(this).find("#popup-image-src").html();
        $(".popup-show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span, .overlay").click(function () {
        $(".popup-show").fadeOut();
    });    
});