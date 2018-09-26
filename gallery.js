/*
I tried to write many different types of JavaScript to complete the slideshow function.
I've left part of my most recent attempt in comments (i've committed this project probably near 100 times and lost a lot of work)
but the only JavaScript code that showed my photos 
was this automatic slide show from W3 Schools.
I have included it here to complete the project and made some edits
The buttons have no function on the final project, but I have left them to show that I did make the attempt.
*/

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("photos");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); 
    // This will change the image every 5 seconds
}


/*
var slides = $(".slides");
var slideIndex = 0;
var currentSlide = slides[slideIndex];

$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
*/
