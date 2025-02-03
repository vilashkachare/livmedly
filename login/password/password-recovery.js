document.getElementById('recovery-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    const recoveryButton = document.querySelector('.btn');
    recoveryButton.textContent = 'Sending...';
    recoveryButton.disabled = true;
  
    // Send request to backend
    fetch('http://localhost:3000/send-reset-link', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send reset link');
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        alert('An error occurred: ' + error.message);
      })
      .finally(() => {
        recoveryButton.textContent = 'Send Reset Link';
        recoveryButton.disabled = false;
      });
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  