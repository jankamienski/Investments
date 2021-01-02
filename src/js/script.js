const sliderButton = document.querySelector('.hamburger');
const sliderMenu = document.querySelector('body');

sliderButton.addEventListener('click', function(event) {
  event.preventDefault();
  sliderMenu.classList.toggle('active');
  //topper.classList.toggle('hide');
});