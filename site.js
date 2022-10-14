var slider_img = document.querySelector('.slider-img');
var images = ['foto1.jpg', 'teste2.jpg', 'teste3.jpg', 'teste4.jpg', 'teste5.jpg'];
var i = 0;


function prev(){
    if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
    if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
    if (i == 0) {
        slider_img.setAttribute('src', "images/foto1.jpg")
    }
    else {
        slider_img.setAttribute('src', "images/teste2.jpg")
    }
    return slider_img.setAttribute('src', "images/"+images[i]);	
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
