const sliderButton = document.querySelector('.hamburger');
const sliderMenu = document.querySelector('#sidebar-menu');

sliderButton.addEventListener('click', function(event) {
  event.preventDefault();
  sliderMenu.classList.toggle('active');
});