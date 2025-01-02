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
    window.location.href = "dashboard.html";
  } else {
    errorMessage.style.display = 'block'; // Show error message
  }
});
