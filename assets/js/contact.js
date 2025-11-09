// Contact Form Handling with EmailJS
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your Public Key
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  emailjs.init("RHcNxAyguA307cABG");

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get the submit button
      const submitBtn = contactForm.querySelector(".btn-send");
      const originalBtnText = submitBtn.textContent;

      // Hide any previous messages
      formMessage.style.display = "none";
      formMessage.className = "form-message mt-3";

      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // Send email using EmailJS
      emailjs.sendForm("service_ujso3am", "template_82r5u7e", contactForm).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          // Show success message
          formMessage.textContent =
            "Thank you for your message! We will get back to you as soon as possible.";
          formMessage.className = "form-message mt-3 success";
          formMessage.style.display = "block";

          contactForm.reset();

          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        },
        function (error) {
          console.log("FAILED...", error);

          // Show error message
          formMessage.textContent =
            "There was an error sending your message. Please try again or contact us directly.";
          formMessage.className = "form-message mt-3 error";
          formMessage.style.display = "block";

          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      );
    });
  }
});
