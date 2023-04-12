var swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 18,
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 'auto',
  direction: 'horizontal',
  rewind: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
