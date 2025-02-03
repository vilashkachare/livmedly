document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Collect form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const appointmentDate = document.getElementById("appointment-date").value;
    const timeSlot = document.getElementById("time-slot").value;
    const message = document.getElementById("message").value.trim();
  
    // Simple Validation
    if (!name || !email || !phone || !appointmentDate || !timeSlot) {
      alert("Please fill in all required fields.");
      return;
    }
  
    // Display a confirmation message with the collected data
    alert(`Appointment Booked!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${appointmentDate}\nTime Slot: ${timeSlot}\nMessage: ${message}`);
  
    // Dynamically create and append the contact form to submit data to Web3Forms
    const contactForm = document.createElement("form");
    contactForm.id = "contact-form";
    contactForm.action = "https://api.web3forms.com/submit";
    contactForm.method = "POST";
  
    // Add hidden fields for Web3Forms
    contactForm.innerHTML = `
      <input type="hidden" name="access_key" id="access-key" value="c6340763-8a61-4e42-8349-a212711c2752">
      <input type="hidden" name="redirect" value="https://hetdabhi.github.io/livmedly-thankyou-page/">
      <input type="hidden" name="name" value="${name}">
      <input type="hidden" name="email" value="${email}">
      <input type="hidden" name="phone" value="${phone}">
      <input type="hidden" name="appointment_date" value="${appointmentDate}">
      <input type="hidden" name="time_slot" value="${timeSlot}">
      <input type="hidden" name="message" value="${message}">
    `;
  
    // Append the dynamically created form to the body
    document.body.appendChild(contactForm);
  
    // Submit the form to Web3Forms
    contactForm.submit();
  
    // Optionally, clear the form after submission
    document.getElementById("appointment-form").reset();
  });
  