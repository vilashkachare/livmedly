document.getElementById("appointment-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Retrieve form data
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("appointment-date").value;
  const timeSlot = document.getElementById("time-slot").value;
  const message = document.getElementById("message").value.trim();

  // Simple Validation
  if (!name || !email || !phone || !date || !timeSlot) {
    alert("Please fill in all required fields.");
    return;
  }

  // Confirm submission
  alert(`Thank you for booking your appointment! 📋\n\nHere are your details:\n
    - Name: ${name}
    - Email: ${email}
    - Phone: ${phone}
    - Appointment Date: ${date}
    - Time Slot: ${timeSlot}
    - Message: ${message ? message : "No additional message"}\n\n
    You will receive a confirmation email shortly. ✅`);
    

  // Dynamically create and append the contact form
  const contactForm = document.createElement("form");
  contactForm.id = "contact-form";
  contactForm.action = "https://api.web3forms.com/submit";
  contactForm.method = "POST";

  // Add hidden fields
  contactForm.innerHTML = `
    <input type="hidden" name="access_key" id="access-key" value="c6340763-8a61-4e42-8349-a212711c2752">
    <input type="hidden" name="redirect" value="https://hetdabhi.github.io/livmedly-thankyou-page/">
    <input type="hidden" name="name" value="${name}">
    <input type="hidden" name="email" value="${email}">
    <input type="hidden" name="phone" value="${phone}">
    <input type="hidden" name="appointment_date" value="${date}">
    <input type="hidden" name="time_slot" value="${timeSlot}">
    <input type="hidden" name="message" value="${message}">
  `;

  // Append the form to the body and submit it
  document.body.appendChild(contactForm);
  contactForm.submit();
});
