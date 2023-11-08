const Button = document.querySelector('.scroll-btn');
window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    Button.classList.add('scroll-come');
  } else {
    Button.classList.remove('scroll-come');
  }
});
