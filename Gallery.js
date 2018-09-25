/*
I tried to write many different types of JavaScript to complete the slideshow function.
I've left them in comments to show my attempts, but the only JavaScript code that showed my photos was this automatic slide show from W3 Schools.
*/

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*
var slides = $(".photos");
var slideIndex = 0;
var currentSlide = slides[slideIndex];
*/ 
