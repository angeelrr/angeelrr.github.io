document.addEventListener('DOMContentLoaded', async function () {
  const TRANSLATIONS_PATH = '/translations/translations.json';

  try {
    const response = await fetch(TRANSLATIONS_PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const translations = await response.json();

    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.slice(0, 2); // 'en', 'es', etc.

    const language = translations[langCode] || translations['en']; // Fallback to English if not found

    // Update the UI with translations
    document.title = language.title;
    document.getElementById('username').placeholder = language.placeholderUsername;
    document.getElementById('password').placeholder = language.placeholderPassword;
    document.querySelector('.login-button').textContent = language.signIn;
    document.getElementById('error-message').textContent = language.errorMessage;
    document.querySelector('.forgot-password-link').textContent = language.forgotPassword;
    document.querySelector('.remember-me-label').textContent = language.rememberMe;
    document.querySelector('.registration-message').innerHTML = language.registerMessage;

  } catch (error) {
    console.error('Error loading translations:', error);
  }
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
);
