// SCROLLING ANIMATIONS
ScrollOut({
  once: true,
  threshold: 0.2
});

// TESTIMONIALS CAROUSEL
new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  dots: '#dots',
  draggable: false,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});
