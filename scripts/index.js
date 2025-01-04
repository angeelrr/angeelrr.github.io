document.addEventListener('DOMContentLoaded', async function() {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters (e.g., "en", "es")

  // Load translations from the single JSON file
  const translations = await fetch(`/translations/translations.json`)
    .then(response => response.json())
    .catch(error => {
      console.error("Error loading translations:", error);
      return {};
    });

  // Default to English if the user's language is not found
  const currentTranslations = translations[langCode] || translations['en'];

  // Update UI text based on translations
  document.getElementById('title').textContent = currentTranslations.title || "Login";
  document.getElementById('signInButton').textContent = currentTranslations.signInButton || "Sign in";
  document.getElementById('forgotPassword').textContent = currentTranslations.forgotPassword || "Forgot password?";
  document.getElementById('rememberMe').nextSibling.textContent = currentTranslations.rememberMe || "Remember me";
  document.getElementById('registrationMessage').innerHTML = currentTranslations.registrationMessage || "Don't have an account? <a href='/registration/registration.html'>Sign up</a>";

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
