// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = '🔆';
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  themeToggle.textContent = '🌙';
  localStorage.setItem('darkMode', null);
};

// Toggle theme
themeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Check on load
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Optional: Auto-enable dark mode based on user preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  if (!localStorage.getItem('darkMode')) {
    enableDarkMode();
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});