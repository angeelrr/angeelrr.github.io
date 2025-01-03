document.addEventListener('DOMContentLoaded', function() {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters

  // Check if the page is in the right language and do the redirection only when necessary
  if (langCode === 'es' && !window.location.pathname.startsWith('/es/')) {
    // Make sure we only add the "/es" path if we're not already on it
    window.location.replace('/es' + window.location.pathname.replace('/login', ''));
  } else if (langCode !== 'es' && window.location.pathname.startsWith('/es')) {
    // Remove "/es" if we are on the Spanish path but the user's language is not Spanish
    window.location.replace(window.location.pathname.replace('/es', ''));
  }

  // Handle form submission for login
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Hardcoded credentials for demo purposes
    const validUsername = "angelrr";
    const validPassword = "Afrr2407";

    if (username === validUsername && password === validPassword) {
      // Redirect to dashboard (replace with your dashboard URL)
      window.location.href = "/dashboard/dashboard.html";
    } else {
      alert('Invalid credentials. Please try again.'); // Show alert message
      errorMessage.style.display = 'block'; // Show error message
    }
  });
});
