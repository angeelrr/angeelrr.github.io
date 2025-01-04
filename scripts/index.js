// Ensure the error message is updated based on the current translation
document.addEventListener('DOMContentLoaded', function () {
  // Fetch translations and apply them
  fetch('/translations/translations.json')
    .then(response => response.json())
    .then(data => {
      const langCode = navigator.language.slice(0, 2); // e.g., 'en', 'es'
      const currentTranslations = data[langCode] || data['en']; // Fallback to English if langCode is not found

      // Apply translations to UI
      document.title = currentTranslations.title || "Login";
      document.getElementById('username').placeholder = currentTranslations.placeholderUsername || "Username";
      document.getElementById('password').placeholder = currentTranslations.placeholderPassword || "Password";
      document.querySelector('.login-button').textContent = currentTranslations.signIn || "Sign In";
      document.getElementById('error-message').textContent = currentTranslations.errorMessage || "Invalid credentials. Please try again.";
      document.querySelector('.forgot-password-link').textContent = currentTranslations.forgotPassword || "Forgot Password?";
      document.querySelector('.remember-me-label').childNodes[1].textContent = ` ${currentTranslations.rememberMe || "Remember me"}`;
      
      const registrationMessage = document.querySelector('.registration-message');
      const registerMessageParts = currentTranslations.registerMessage ? currentTranslations.registerMessage.split('?') : ["Don't have an account", " Register"];
      registrationMessage.firstChild.textContent = registerMessageParts[0] + '? ';
      registrationMessage.lastChild.textContent = registerMessageParts[1];
    })
    .catch(error => {
      console.error('Error loading translations:', error);
    });

  // Add event listener for form submission
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = "angelrr";
    const validPassword = "Afrr2407";

    if (username === validUsername && password === validPassword) {
      // Redirect to dashboard
      window.location.href = "/dashboard/dashboard.html";
    } else {
      errorMessage.style.display = 'block'; // Show error message
    }
  });
});
