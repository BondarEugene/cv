const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slideToClickedSlide: true,
  grabCursor: true,
  autoHeight: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  zoom: {
    toggle: true,
    maxRatio: 3,
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },

  autoplay: {
    delay: 5000,
    //delay: 2000,
    //delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
