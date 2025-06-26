document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');
  const menuLinks = document.querySelectorAll('.mobile-menu-links a');

  if (hamburgerIcon && mobileMenuOverlay) {
    hamburgerIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      mobileMenuOverlay.classList.add('active');
      mobileMenuOverlay.style.display = 'flex';
    });
  }
  if (closeBtn && mobileMenuOverlay) {
    closeBtn.addEventListener('click', function() {
      mobileMenuOverlay.classList.remove('active');
      mobileMenuOverlay.style.display = 'none';
    });
  }
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenuOverlay.classList.remove('active');
      mobileMenuOverlay.style.display = 'none';
    });
  });
  // Optional: close menu if clicking outside overlay (not required for fullscreen)
});
