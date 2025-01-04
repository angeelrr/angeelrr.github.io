document.addEventListener('DOMContentLoaded', function() {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters
  const translationFile = '/translations/translations.json';

  // Fetch the translations and handle errors
  fetch(translationFile)
    .then(response => response.json())
    .then(translations => {
      const currentTranslations = translations[langCode] || translations['en'];

      // Update UI text based on translations
      document.getElementById('login-title').textContent = currentTranslations.loginTitle || "Login";
      document.getElementById('username').placeholder = currentTranslations.usernamePlaceholder || "Username";
      document.getElementById('password').placeholder = currentTranslations.passwordPlaceholder || "Password";
      document.getElementById('submit').textContent = currentTranslations.submit || "Sign in";
      document.getElementById('error-message').textContent = currentTranslations.errorMessage || "Invalid credentials. Please try again.";
    })
    .catch(error => {
      console.error('Error loading translations:', error);
    });

  // Your existing login logic goes here
  document.getElementById('login-form').addEventListener('submit', function(event) {
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
      errorMessage.style.display = 'block'; // Show error message
    }
  });
});
