// hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

// carosel 

var slideIndex = 1;
showSlide(slideIndex);

function nextSlide (n){
    showSlide(slideIndex += n);
}

function showSlide(n){   
    var i 
    var slides = document.getElementsByClassName("content-slide")

    if(n>slides.length){
        slideIndex =1;
    }
    
    if(n<1){
        slideIndex = slides.length;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }

    slides[slideIndex - 1].style.display="block"
}

// slide model
var slideIndex = 1;
showSlide(slideIndex);

function nextSlide (n){
    showSlide(slideIndex += n);
}

function showSlide(n){   
    var i 
    var slides = document.getElementsByClassName("color-slide")

    if(n>slides.length){
        slideIndex =1;
    }
    
    if(n<1){
        slideIndex = slides.length;
    }

    for(i=0;i<slides.length;i++){
        slides[i].style.display="none"
    }

    slides[slideIndex - 1].style.display="block"
}


// slide

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
