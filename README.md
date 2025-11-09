# Entertwist Entertainment Website

Fully responsive website for Entertwist Entertainment - Balloon Twisting Services.

## ✨ Features

- Fully responsive design (desktop, tablet, mobile)
- Fixed navigation with hamburger menu
- Photo gallery with Swiper.js slider
- **EmailJS Contact Form** - Sends emails without backend
- Smooth animations and transitions

## 📁 Project Structure

```
Steve Elfant 2/
├── index.html
├── about.html
├── gallery.html
├── services.html
├── contact.html          # EmailJS integrated
├── tutorials.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   └── bootstrap.min.css
│   ├── js/
│   │   ├── main.js
│   │   ├── contact.js    # EmailJS handler
│   │   └── bootstrap.bundle.min.js
│   └── imgs/
└── README.md
```

## 🚀 How to Run

Simply open `index.html` in your web browser.

Or use a local server:
```bash
cd "path/to/Steve Elfant 2"
python -m http.server 8080
```

## 📧 EmailJS Setup (Contact Form)

The contact form uses EmailJS to send emails without a backend server.

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for free

2. **Get Your Keys**
   - Copy your Public Key from Account → General
   - Add an Email Service (Gmail, Outlook, etc.)
   - Create an Email Template with these variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{message}}` - the message

3. **Update Config**
   - Open `assets/js/contact.js`
   - Replace `YOUR_PUBLIC_KEY` with your Public Key
   - Replace `service_ujso3am` with your Service ID
   - Replace `template_82r5u7e` with your Template ID

### Form Features:
- Real-time email sending
- Loading state during submission
- Success/error messages displayed below form
- Automatic form reset on success

## 🔧 Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5 - Responsive framework
- EmailJS - Email service
- Swiper.js - Gallery slider
- Font Awesome - Icons
