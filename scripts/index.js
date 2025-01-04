document.addEventListener('DOMContentLoaded', function () {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters
  const translationFile = '/translations/translations.json';

  fetch(translationFile)
    .then(response => response.json())
    .then(translations => {
      const currentTranslations = translations[langCode] || translations['en'];

      // Update UI text based on translations
      document.getElementById('login-title').textContent = currentTranslations.loginTitle || "Login";
      document.getElementById('username').placeholder = currentTranslations.placeholderUsername || "Username";
      document.getElementById('password').placeholder = currentTranslations.placeholderPassword || "Password";
      document.getElementById('signInButton').textContent = currentTranslations.signIn || "Sign in";
      document.getElementById('error-message').textContent = currentTranslations.errorMessage || "Invalid credentials. Please try again.";
      document.querySelector('.remember-me-label').textContent = currentTranslations.rememberMe || "Remember me";
      document.getElementById('forgotPassword').textContent = currentTranslations.forgotPassword || "Forgot password?";
      
      // Update registration message
      const registrationMessage = currentTranslations.registerMessage || "Don't have an account? Register";
      const [staticText, linkText] = registrationMessage.split('Register');
      document.getElementById('registrationMessage').childNodes[0].textContent = staticText || "Don't have an account?";
      document.getElementById('signUpLink').textContent = linkText || "Register";
    })
    .catch(error => {
      console.error('Error loading translations:', error);
    });

  // Existing login logic
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = "angelrr";
    const validPassword = "Afrr2407";

    if (username === validUsername && password === validPassword) {
      window.location.href = "/dashboard/dashboard.html";
    } else {
      errorMessage.style.display = 'block';
    }
  });
});
