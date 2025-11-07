# Entertwist Entertainment Website

A pixel-perfect, fully responsive website for Entertwist Entertainment - Balloon Twisting Services.

## 🎈 Project Overview

This is an HTML/CSS/JS replica of the Entertwist Entertainment website featuring beautiful balloon twisting services.

## ✨ Features

### Completed (Home Page)
- ✅ **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Fixed Navigation Bar** - Smooth navigation with active states
- ✅ **Hero Section** - Animated gradient background with scrolling effect
- ✅ **Balloon Animation Section** - Showcasing balloon creation services
- ✅ **What is Balloon Twisting** - Informative section with image
- ✅ **Photo Gallery** - Swiper.js slider with 6 images
- ✅ **Contact Section** - Static contact form with validation
- ✅ **WhatsApp Integration** - Quick contact button
- ✅ **Cookie Consent Banner** - GDPR-compliant cookie notice
- ✅ **Footer** - Professional footer with credits
- ✅ **Smooth Animations** - Scroll animations and transitions

### Typography
- **Primary Font**: Yellow Tail (cursive) - for headings
- **Secondary Font**: Lora (serif) - for body text

### Color Scheme
- **Primary Color**: #ff6b6b (Coral Red)
- **Secondary Color**: #ffd93d (Yellow)
- **Accent Color**: #6bcf7f (Green)
- **Dark Color**: #2c3e50
- **Light Color**: #f8f9fa

## 📁 Project Structure

```
Steve Elfant 2/
├── index.html              # Home page (COMPLETED)
├── about.html              # About page (Placeholder)
├── gallery.html            # Gallery page (Placeholder)
├── services.html           # Services page (Placeholder)
├── contact.html            # Contact page (Placeholder)
├── tutorials.html          # Tutorials page (Placeholder)
├── assets/
│   ├── css/
│   │   ├── style.css       # Custom styles
│   │   ├── bootstrap.min.css
│   │   └── all.min.css     # Font Awesome
│   ├── js/
│   │   ├── main.js         # Custom JavaScript
│   │   └── bootstrap.bundle.min.js
│   └── imgs/
│       ├── logo.jpg
│       ├── Balloon Animation1.jpg
│       ├── Balloon Animation2.jpg
│       ├── Balloon Animation3.jpg
│       ├── What is Ballon.jpg
│       ├── Photo Gallery1.jpg
│       ├── Photo Gallery2.jpg
│       ├── Photo Gallery3.jpg
│       ├── Photo Gallery4.jpg
│       ├── Photo Gallery5.jpg
│       ├── Photo Gallery6.jpg
│       └── Contact Us.jpg
└── README.md
```

## 🚀 How to Run

### Option 1: Python HTTP Server
```bash
cd "path/to/Steve Elfant 2"
python -m http.server 8080
```
Then open: http://localhost:8080/index.html

### Option 2: Direct Open
Simply open `index.html` in your web browser.

## 🎨 Key Features Explained

### 1. Responsive Navigation
- Desktop: Full horizontal menu with contact info
- Tablet/Mobile: Hamburger menu with smooth toggle

### 2. Hero Section
- Animated gradient background
- Bouncing scroll indicator
- Fully centered title with beautiful typography

### 3. Photo Gallery Slider
- Powered by Swiper.js
- Auto-play functionality
- Navigation arrows and pagination dots
- Shows 3 slides on desktop, 2 on tablet, 1 on mobile

### 4. Contact Form
- Static form (no backend submission yet)
- Client-side validation
- Shows success alert on submit
- Ready for backend integration

### 5. Cookie Banner
- Appears after 1 second on first visit
- Stored in localStorage
- Slide-up animation on accept

## 📝 To-Do List for Next Steps

### Pages to Build (Step by Step)
1. ⏳ About Page
2. ⏳ Gallery Page (Full gallery view)
3. ⏳ Our Services Page
4. ⏳ Contact Page (Dedicated contact page)
5. ⏳ Tutorials Page

### Future Enhancements
- [ ] Backend integration for contact form
- [ ] Email notification system
- [ ] Google Maps integration
- [ ] Testimonials section
- [ ] Booking system
- [ ] Admin dashboard

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5** - Responsive framework
- **Swiper.js** - Modern slider library
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Yellow Tail & Lora)

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 991px
- **Desktop**: > 992px

## 🎯 Contact Information

- **Email**: selfant@gmail.com
- **Phone**: 617-908-8839
- **WhatsApp**: +1 (617) 908-8839

## 📄 Notes for Future Development

### WhatsApp Button
The WhatsApp link currently uses a placeholder number (16179088839). To update:
```html
<a href="https://wa.me/YOUR_NUMBER_HERE" class="whatsapp-btn" target="_blank">
```

### Contact Form Integration
To connect the form to a backend:
1. Remove the `e.preventDefault()` in `main.js`
2. Add `action` and `method` attributes to the form
3. Set up server-side processing (PHP, Node.js, etc.)

### Google reCAPTCHA
Currently showing placeholder text. To add real reCAPTCHA:
1. Get site key from Google
2. Add reCAPTCHA script to HTML
3. Add widget to form
4. Verify on backend

## 🎨 Design Philosophy

- **Pixel Perfect** - Matches original website design
- **User-Friendly** - Intuitive navigation and interactions
- **Performance** - Optimized images and code
- **Accessibility** - Semantic HTML and proper contrast ratios
- **Mobile-First** - Designed for all screen sizes

## 📞 Support

For questions or issues, contact the development team at selfant@gmail.com

---

**Copyright**: Entertwist - All Rights Reserved  
**Powered by**: Elfant Productions

---

## Development Log

### Version 1.0.0 (Initial Release)
- ✅ Home page completed
- ✅ Fully responsive design
- ✅ All sections functional
- ✅ Gallery slider working
- ✅ Contact form (static)
- ✅ Cookie banner
- ✅ Navigation system
- ✅ Placeholder pages created

**Next**: Build remaining pages step by step as requested.

