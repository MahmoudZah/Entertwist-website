// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Cookie Banner
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  if (cookieBanner && acceptCookies) {
    // Check if cookies are already accepted
    if (!localStorage.getItem("cookiesAccepted")) {
      setTimeout(() => {
        cookieBanner.classList.add("show");
      }, 1000);
    }

    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.animation = "slideDown 0.5s ease";
      setTimeout(() => {
        cookieBanner.style.display = "none";
      }, 500);
    });
  }

  // Navbar scroll effect
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
      } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }
    });
  }

  // Close offcanvas on nav link click
  const navLinks = document.querySelectorAll(".offcanvas .nav-link");
  const offcanvasElement = document.getElementById("navbarOffcanvas");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    });
  });

  // Contact Form Link
  const contactFormLink = document.querySelector(".contact-form-link");
  if (contactFormLink) {
    contactFormLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "contact.html";
    });
  }

  // Prevent default for placeholder links
  const placeholderLinks = document.querySelectorAll(
    'a[href="about.html"], a[href="gallery.html"], a[href="services.html"], a[href="contact.html"], a[href="tutorials.html"]'
  );
  placeholderLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert("This page is coming soon!");
    });
  });
});

// Add slide down animation for cookie banner
const style = document.createElement("style");
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(100%);
        }
    }
`;
document.head.appendChild(style);
