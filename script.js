document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create the mailto link
  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  const mailtoLink = `mailto:uyahaya95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the default email client
  window.location.href = mailtoLink;

  // Optional: Show a success message
  alert('Your message has been sent!');
});