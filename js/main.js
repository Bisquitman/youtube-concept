const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});