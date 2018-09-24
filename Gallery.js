var slides = $(".slideshow-main");
var slideIndex = 0;
var currentSlide = slides[slideIndex];

function nextSlide() {
    slides[currentSlide].photos = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].photos = 'slide showing';
}
