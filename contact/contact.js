// Function to create and submit the contact form
function createContactForm() {
    // Create the form dynamically
    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";
    contactForm.action = "https://api.web3forms.com/submit";
    contactForm.method = "POST";
  
    // Add hidden fields
    contactForm.innerHTML = `
      <input type="hidden" name="access_key" id="access-key" value="7dad968d-d42f-4ab7-a9ee-9c37b64ea7eb">
      <input type="hidden" name="redirect" value="https://hetdabhi.github.io/livmedly-thankyou-page/">
      <input type="text" name="name" placeholder="Enter your name" required>
      <input type="email" name="email" placeholder="Enter your email" required>
      <textarea name="message" placeholder="Enter your message" required></textarea>
      <button type="submit" class="btn">Send Message</button>
    `;
  
    // Append the form to the body or a specific container
    document.body.appendChild(contactForm);
  
    // Add event listener to handle form submission
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Optionally, show a confirmation message or redirect after form submission
      alert("Message sent successfully!");
  
      // You can also submit the form via AJAX if desired
      contactForm.submit();
    });
  }
  
  // Call the function to create the contact form when needed (e.g., on a button click)
  document.querySelector(".btn-send-message").addEventListener("click", createContactForm);
  