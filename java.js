// =============================================================
// Image Slider
// =============================================================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  });
  const myJsmedia = (widthSize) => {
    if (widthSize.matches) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
    else{
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
      });
    }
  };
  const widthSize = window.matchMedia("(max-width:780px)");

myJsmedia(widthSize);

widthSize.addEventListener("change", myJsmedia);
  // =============================================================
// Menu
// =============================================================
let menuIcon = document.getElementById('menu-icon');
let navList= document.querySelector('.navlist');
navList.style.right= '-50%';
menuIcon.addEventListener('click', ()=>{
    if (navList.style.right == "-50%") {
        navList.style.right = "0";
      } else {
        navList.style.right = "-50%";
      }
});