var slides = $(".slides");
var slideIndex = 0;
var currentSlide = slides[slideIndex];

$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
