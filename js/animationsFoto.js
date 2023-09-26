let currentImageIndex = 0;
const images = document.querySelectorAll(".imgSlide");

images[currentImageIndex].style.opacity = "1";

setInterval(() => {
    images[currentImageIndex].style.opacity = "0";  
    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].style.opacity = "1"; 
}, 5000);
