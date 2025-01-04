document.addEventListener('DOMContentLoaded', function () {
  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.slice(0, 2); // Get the first two characters
  const translationFile = '/translations/translations.json';

  fetch(translationFile)
    .then(response => response.json())
    .then(translations => {
      const currentTranslations = translations[langCode] || translations['en'];

      // Update UI text based on translations
      document.title = currentTranslations.title || "Login";
      document.getElementById('login-title').textContent = currentTranslations.loginTitle || "Login";
      document.getElementById('username').placeholder = currentTranslations.usernamePlaceholder || "Username";
      document.getElementById('password').placeholder = currentTranslations.passwordPlaceholder || "Password";
      document.getElementById('signInButton').textContent = currentTranslations.signIn || "Sign in";
      document.getElementById('error-message').textContent = currentTranslations.errorMessage || "Invalid credentials. Please try again.";

      // Update "Remember me" with its checkbox
      const rememberMeLabel = document.querySelector('.remember-me-label');
      rememberMeLabel.innerHTML = `<input type="checkbox" class="remember-me-checkbox" id="rememberMe"> ${currentTranslations.rememberMe || "Remember me"}`;

      document.getElementById('forgotPassword').textContent = currentTranslations.forgotPassword || "Forgot password?";

      // Update registration message
      const registrationMessage = document.getElementById('registrationMessage');
      const signUpLink = document.getElementById('signUpLink');
      
      // Determine the split keyword based on the language
      const splitKey = currentTranslations.registerMessage.includes('Regístrate') ? 'Regístrate' : 'Register';
      
      // Split the message and update elements
      const [staticText, linkText] = currentTranslations.registerMessage.split(splitKey);
      registrationMessage.childNodes[0].textContent = staticText || "Don't have an account?";
      signUpLink.textContent = linkText || "Register";
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
