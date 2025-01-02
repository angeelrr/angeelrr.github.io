document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const validUsername = "angelrr";
  const validPassword = "Afrr2407";

  if (username === validUsername && password === validPassword) {
    window.location.href = "dashboard.html";
  } else {
    // Show error message
    errorMessage.classList.add('visible');

    // Highlight invalid fields
    document.getElementById('username').classList.add('invalid');
    document.getElementById('password').classList.add('invalid');

    // Remove the invalid class after 0.5 seconds
    setTimeout(() => {
      document.getElementById('username').classList.remove('invalid');
      document.getElementById('password').classList.remove('invalid');
    }, 500);
  }
});
