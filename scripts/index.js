document.addEventListener('DOMContentLoaded', async function() {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters (e.g., "en", "es")

  // Load translations from JSON file
  const translations = await fetch(`/translations/${langCode}.json`)
    .then(response => {
      if (!response.ok) {
        console.warn(`Language file for '${langCode}' not found. Falling back to English.`);
        return fetch(`/translations/en.json`);
      }
      return response;
    })
    .then(response => response.json())
    .catch(error => {
      console.error("Error loading translations:", error);
      return {};
    });

  // Update UI text based on translations
  document.getElementById('title').textContent = translations.title || "Login";
  document.getElementById('signInButton').textContent = translations.signInButton || "Sign in";
  document.getElementById('forgotPassword').textContent = translations.forgotPassword || "Forgot password?";
  document.getElementById('rememberMe').nextSibling.textContent = translations.rememberMe || "Remember me";
  document.getElementById('registrationMessage').innerHTML = translations.registrationMessage || "Don't have an account? <a href='/registration/registration.html'>Sign up</a>";

  // Handle form submission for login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Hardcoded credentials for demo purposes
    const validUsername = "angelrr";
    const validPassword = "Afrr2407";

    if (username === validUsername && password === validPassword) {
      // Redirect to dashboard
      window.location.href = "/dashboard/dashboard.html";
    } else {
      alert('Invalid credentials. Please try again.'); // Show alert message
      errorMessage.style.display = 'block'; // Show error message
    }
  });
});
