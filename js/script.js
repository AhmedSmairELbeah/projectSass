$(function () {
    "use strict";

    $(".bullets li").on("click", function () {

        $(".myImgSlider .imgSlider").hide();

        $($(this).data("text")).fadeIn(600).siblings().fadeOut(600)
    });

    //toggle button
    $(".toggleButton").on("click", function () {

        $(".link").slideToggle(600)

    });

});