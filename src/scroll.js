   const scrollBtn = document.getElementById('scroll-btn');
    const footer = document.getElementById('footer');
  
    scrollBtn.addEventListener('click', () => {
      footer.scrollIntoView({ behavior: 'smooth' });
    });