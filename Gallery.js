/*
I tried to write many different types of JavaScript to complete the slideshow function.
I've left them in comments to show my attempts, but the only JavaScript code that showed my photos 
was this automatic slide show from W3 Schools.
I have included it here to complete the project and made some edits
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
    setTimeout(carousel, 5000); // This will change the image every 5 seconds
}

/*
var slides = $(".photos");
var slideIndex = 0;
var currentSlide = slides[slideIndex];
*/ 
