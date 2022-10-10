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
    return slider_img.setAttribute('src', "images/"+images[i]);	
}


var Index = 1;

function plusSlides(x) {
    var imagens = document.getElementById('my_img');
    
    if (Index == 0) {
        imagens.src = 'images/foto1.jpg';
        Index;
    }
    else if(Index == 1 ){
        imagens.src = 'images/teste2.jpg';
        Index++;
    }
    else if(Index == 2){
        imagens.src = 'images/teste3.jpg';
        Index++;
    }
    else if(Index == 3) {
        imagens.src = 'images/teste4.jpg';
        Index++;
    }
    else if(Index == 4) {
        imagens.src = 'images/teste5.jpg';
        Index++;
    }
    else {
        Index = 0;
        plusSlides(x);
    }
}

