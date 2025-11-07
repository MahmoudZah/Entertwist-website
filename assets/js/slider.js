// Simple Image Slider
class ImageSlider {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        
        this.currentIndex = 0;
        this.images = [];
        this.init();
    }
    
    init() {
        // Get all thumbnail images
        const thumbnails = this.container.querySelectorAll('.gallery-thumb');
        thumbnails.forEach((thumb, index) => {
            const imageUrl = thumb.getAttribute('data-image');
            this.images.push(imageUrl);
            
            // Add click event to thumbnails
            thumb.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Create navigation arrows
        this.createNavigation();
        
        // Show first image
        this.showSlide(this.currentIndex);
        
        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }
    
    createNavigation() {
        const mainGallery = this.container.querySelector('.gallery-main');
        
        // Create previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slider-nav slider-nav-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prevSlide());
        
        // Create next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slider-nav slider-nav-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.nextSlide());
        
        mainGallery.appendChild(prevBtn);
        mainGallery.appendChild(nextBtn);
    }
    
    showSlide(index) {
        const mainImage = this.container.querySelector('#mainImage');
        const thumbnails = this.container.querySelectorAll('.gallery-thumb');
        
        // Update main image with fade effect
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = this.images[index];
            mainImage.style.opacity = '1';
        }, 200);
        
        // Update active thumbnail
        thumbnails.forEach((thumb, i) => {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.images.length;
        this.goToSlide(nextIndex);
    }
    
    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.goToSlide(prevIndex);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const slider = new ImageSlider('.photo-gallery');
});

