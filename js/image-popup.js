$(function () {
    "use strict";
    
    $(".card__info").click(function () {
        var $src = $(this).children().filter("img").attr("src");
        $(".popup-show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span, .overlay").click(function () {
        $(".popup-show").fadeOut();
    });
    
    
});