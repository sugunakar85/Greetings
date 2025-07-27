const navToggle = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
navToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Accordion functionality
const accToggles = document.querySelectorAll('.accordion-toggle');
accToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    toggle.classList.toggle('active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

