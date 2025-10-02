// Carousel function
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
const slideCount = slides.length;

// Switch the carousel
function goToSlide(index) {
  if (index < 0) index = slideCount - 1;
  if (index >= slideCount) index = 0;
  carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Button click event
prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

// Automatic carousel (optional)
setInterval(() => goToSlide(currentIndex + 1), 5000);






//Automatic carousel logic
setInterval(() => {
  document.querySelector('.next').click();
}, 5000);




//Add filtering logic.

const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const category = btn.dataset.category;
    productCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});