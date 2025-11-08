// Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = new FormData(contactForm);

      // Show success message (you can customize this)
      alert(
        "Thank you for your message! We will get back to you as soon as possible."
      );

      // Reset form
      contactForm.reset();

      // In a real implementation, you would send this data to a server
      // Example:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   body: formData
      // })
      // .then(response => response.json())
      // .then(data => {
      //   alert('Thank you for your message!');
      //   contactForm.reset();
      // })
      // .catch(error => {
      //   alert('There was an error sending your message. Please try again.');
      // });
    });
  }
});

