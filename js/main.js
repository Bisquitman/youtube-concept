const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const recommendedSwiper = new Swiper('.recommended-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});

const forYouSwiper = new Swiper('.foryou-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.foryou-button-next',
    prevEl: '.foryou-button-prev',
  },

});