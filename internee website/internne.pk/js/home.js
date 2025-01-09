document.addEventListener('DOMContentLoaded', function() {
  const navIcon = document.querySelector('.nav-icon');
  const navMenu = document.querySelector('.nav');

  navIcon.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
});




