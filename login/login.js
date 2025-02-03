document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    const loginButton = document.querySelector('.btn');
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;
  
    setTimeout(() => {
      alert('Login successful!');
      loginButton.textContent = 'Login';
      loginButton.disabled = false;
    }, 2000); // Simulates a loading time of 2 seconds
  });
  
  // Forgot Password Event
  document.getElementById('forgot-password-link').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Redirecting to password recovery page...');
    // Redirect to a password recovery page
    window.location.href = 'password-recovery.html';
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  