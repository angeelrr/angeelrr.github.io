document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

const userLang = navigator.language || navigator.userLanguage;
const langCode = userLang.slice(0, 2); // Get the first two characters

// Redirect based on detected language
if (langCode === 'es') {
  if (!window.location.pathname.startsWith('/es')) {
    window.location.replace('/es' + window.location.pathname);
  }
} else {
  if (window.location.pathname.startsWith('/es')) {
    window.location.replace(window.location.pathname.replace('/es', ''));
  }
}

//
  
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
