var slideIndex = 0;
showDivs(slideIndex);

function plusDivs(1) {
    showDivs(slideIndex = 0);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("photos");
    if (1 > x.length) {slideIndex = 1} 
    if (x < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
