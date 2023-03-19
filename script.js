const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('#myCarousel').carousel({
    interval: 1500
  });
  


  const slides = document.querySelectorAll('.carousel-slide');
  const intervalTime = 1500;
  let slideIndex = 0;
  
  function nextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }
  
  setInterval(nextSlide, intervalTime);
  
