// Gallery Show More Functionality
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const hiddenItems = document.querySelectorAll(".gallery-hidden");

  if (showMoreBtn && hiddenItems.length > 0) {
    let isExpanded = false;

    showMoreBtn.addEventListener("click", function () {
      isExpanded = !isExpanded;

      hiddenItems.forEach((item) => {
        if (isExpanded) {
          item.style.display = "block";
          // Trigger animation
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 10);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.9)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });

      // Update button text and icon
      if (isExpanded) {
        showMoreBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less';
        showMoreBtn.classList.add("active");
      } else {
        showMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Show More';
        showMoreBtn.classList.remove("active");
        
        // Scroll to gallery section
        document.querySelector(".gallery-grid-section").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    // Set initial styles for hidden items
    hiddenItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "scale(0.9)";
      item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    });
  }

  // Gallery lightbox (optional - click on image to view larger)
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      const imgSrc = img.src;

      // Create lightbox
      const lightbox = document.createElement("div");
      lightbox.classList.add("gallery-lightbox");
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${imgSrc}" alt="Gallery Image">
        </div>
      `;

      document.body.appendChild(lightbox);

      // Add styles for lightbox
      const style = document.createElement("style");
      style.textContent = `
        .gallery-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }

        .lightbox-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          color: #fff;
          font-size: 3rem;
          font-weight: 300;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .lightbox-close:hover {
          color: #ff6b6b;
        }
      `;

      if (!document.getElementById("lightbox-styles")) {
        style.id = "lightbox-styles";
        document.head.appendChild(style);
      }

      // Close lightbox
      const closeBtn = lightbox.querySelector(".lightbox-close");
      closeBtn.addEventListener("click", function () {
        lightbox.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => {
          lightbox.remove();
        }, 300);
      });

      // Close on outside click
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
          lightbox.style.animation = "fadeOut 0.3s ease";
          setTimeout(() => {
            lightbox.remove();
          }, 300);
        }
      });

      // Add fadeOut animation
      const fadeOutStyle = document.createElement("style");
      fadeOutStyle.textContent = `
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `;
      if (!document.getElementById("fadeout-styles")) {
        fadeOutStyle.id = "fadeout-styles";
        document.head.appendChild(fadeOutStyle);
      }
    });
  });
});

