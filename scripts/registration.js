document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');

    console.log('Javascript is running...');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Reset any previous error messages
        errorElement.innerHTML = '';

        // Get form inputs
        const username = document.getElementById('usernameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const password = document.getElementById('passwordInput').value.trim();
        const confirmation = document.getElementById('confirmationInput').value.trim();

        // Perform basic validation
        if (!username || !email || !password || !confirmation) {
            displayError('All fields are required.');
            console.log('All fields are required.');
            return;
        }

        // Additional validation
        if (username.length < 6) {
            displayError('Username must be at least 6 characters.');
            console.log('Username must be at least 6 characters.');
            return;
        }

        if (password.length < 8) {
            displayError('Password must be at least 8 characters.');
            console.log('Password must be at least 8 characters.');
            return;
        }

        if (password.length > 155) {
            displayError('Password must be at most 155 characters.');
            console.log('Password must be at most 155 characters.');
            return;
        }

        // Check if the email input contains a valid email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayError('Invalid email address.');
            console.log('Invalid email address.');
            return;
        }

        // Check if the password contains at least one uppercase, one lowercase, and one number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            displayError('Password must contain at least one uppercase letter, one lowercase letter, and at least one number.');
            console.log('Password must contain at least one uppercase letter, one lowercase letter, and at least one number.');
            return;
        }

        if (password !== confirmation) {
            displayError('Passwords do not match.');
            console.log('Passwords do not match.');
            return;
        }

        // If all validation passes, show alert, redirect, or perform further actions
        alert('Signed up successfully!');
        // Redirect to the login page
        window.location.href = 'index.html';
    });

    function displayError(message) {
        errorElement.innerHTML = `<p class="error-message">${message}</p>`;
    }
});
