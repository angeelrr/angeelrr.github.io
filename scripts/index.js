document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

const userLang = navigator.language || navigator.userLanguage; // e.g., "es-ES" or "en-US"
if (userLang.startsWith('es')) {
  // Load Spanish content
  window.location.href = '/es/index.html';
} else {
  // Load English content
  window.location.href = '/en/index.html';
}

  const userLang = navigator.language || 'en'; // Default to English


  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Hardcoded credentials for demo purposes
  const validUsername = "angelrr";
  const validPassword = "Afrr2407";

  if (username === validUsername && password === validPassword) {
    // Redirect to dashboard (replace with your dashboard URL)
    window.location.href = "../dashboard/dashboard.html";
  } else {
    alert('Invalid credentials. Please try again.'); // Show alert message
    errorMessage.style.display = 'block'; // Show error message
  }
});
