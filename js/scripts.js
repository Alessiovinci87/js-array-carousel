const images = document.querySelectorAll('.carousel-image');
let activeIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

}

function nextImage() {
    activeIndex = (activeIndex + 1) % images.length;
    showImage(activeIndex);
  }
  
  function previousImage() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    showImage(activeIndex);
  }
  
  document.querySelector('.arrow-left').addEventListener('click', previousImage);
  document.querySelector('.arrow-right').addEventListener('click', nextImage);



