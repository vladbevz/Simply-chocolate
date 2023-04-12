const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('click', function() {
  const targetSection = document.querySelector('#made-section');
  const targetOffset = targetSection.offsetTop;

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth"
  });
});
