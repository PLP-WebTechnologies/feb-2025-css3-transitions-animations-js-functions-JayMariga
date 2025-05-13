// Store user preference
function storePreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  // Retrieve user preference
  function getPreference(key) {
    return localStorage.getItem(key);
  }
  
  // Set a default theme or preference if not stored
  document.addEventListener('DOMContentLoaded', () => {
    const theme = getPreference('theme') || 'default';
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    }
    // Apply animation preference if stored
    const animatedButton = getPreference('animatedButton');
    if (animatedButton === 'true') {
      document.querySelector('.button').classList.add('animated');
    }
  });
  
  // Example of setting the animation preference
  document.querySelector('.toggle-animation').addEventListener('click', () => {
    const isAnimated = document.querySelector('.button').classList.contains('animated');
    storePreference('animatedButton', !isAnimated);
    document.querySelector('.button').classList.toggle('animated');
  });
  