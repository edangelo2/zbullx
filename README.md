# ZBull-X Technologies - Corporate Website

A professional static HTML institutional website for ZBull-X Technologies, a capital markets technology consulting startup specializing in Calypso, Murex, and Lumina Americas implementations.

## 🚀 Features

- **Fully Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Modern UI/UX**: Professional, clean design emphasizing expertise and trust
- **Fast Performance**: Optimized for speed with lazy loading and minimal dependencies
- **SEO Optimized**: Semantic HTML, proper meta tags, and structured content
- **Accessible**: WCAG 2.1 Level AA compliant with keyboard navigation support
- **Interactive Elements**: Smooth animations, scroll effects, and dynamic form validation
- **Contact Form**: Integrated with FormSubmit for email delivery

## 📁 Project Structure

```
zbullx/
├── index.html              # Home page
├── solutions.html          # Solutions & platform expertise
├── team.html              # Team & company information
├── insights.html          # Blog articles & white papers
├── partnerships.html      # Technology partnerships
├── contact.html           # Contact form & information
├── css/
│   ├── reset.css         # CSS reset
│   ├── main.css          # Main styles
│   └── responsive.css    # Responsive breakpoints
├── js/
│   ├── main.js           # Main functionality
│   └── contact-form.js   # Form validation
├── images/
│   ├── favicon.svg       # Site favicon
│   └── logo.svg          # Company logo
└── README.md             # This file
```

## 🎨 Design System

### Color Palette
- **Primary Navy**: #1a365d
- **Primary Blue**: #2563eb
- **Accent Blue**: #3b82f6
- **Neutral Dark**: #1e293b
- **Neutral Gray**: #64748b
- **Neutral Light**: #f1f5f9
- **White**: #ffffff

### Typography
- **Body Font**: Inter (Google Fonts)
- **Heading Font**: Montserrat (Google Fonts)

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Quick Start

1. **Clone or download the repository**
   ```bash
   cd zbullx
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (with http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **View the site**
   - Open your browser and navigate to `http://localhost:8000`

## 📝 Configuration

### Contact Form Setup

The contact form uses FormSubmit.co for email delivery. To configure:

1. Open `contact.html`
2. Locate the form action attribute:
   ```html
   <form action="https://formsubmit.co/info@zbullx.com" method="POST">
   ```
3. Replace `info@zbullx.com` with your actual email address
4. On first submission, FormSubmit will send a verification email
5. Click the link in the email to activate the form

### Customizing Content

- **Company Information**: Update text in HTML files
- **Contact Details**: Edit footer sections and `contact.html`
- **Team Members**: Modify team cards in `team.html`
- **Articles**: Update article cards in `insights.html`
- **Colors**: Modify CSS custom properties in `css/main.css`

## 🎯 Key Pages

### Home Page (`index.html`)
- Hero section with primary CTA
- Expertise pillars (3 columns)
- About ZBull-X Technologies section
- Featured solutions cards
- Call-to-action section

### Solutions Page (`solutions.html`)
- Murex MX.3 capabilities
- Calypso platform services
- Lumina Americas & regional systems
- The ZBL Approach (3-step process)

### Team Page (`team.html`)
- Company introduction
- Leadership team profiles
- Career opportunities callout

### Insights Page (`insights.html`)
- Latest articles grid (6 articles)
- White papers section with download forms
- Newsletter signup

### Partnerships Page (`partnerships.html`)
- Strategic technology partnerships (Calypso, Murex, Lumina)
- Strategic alliances (Cloud, Data, Security, etc.)
- Partnership CTA

### Contact Page (`contact.html`)
- Contact form with validation
- Email, phone, and office information
- Social media links

## 🔧 Features & Functionality

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-closes on link click or window resize

### Form Validation
- Real-time field validation
- Clear error messages
- Email format validation
- Required field checking
- Form data auto-save (localStorage)

### Scroll Effects
- Sticky header on scroll
- Fade-in animations for cards
- Back-to-top button
- Smooth scrolling for anchor links

### Performance Optimizations
- Lazy loading for images
- Optimized SVG icons
- Minimal external dependencies
- Efficient CSS with custom properties

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for images
- Proper heading hierarchy
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader friendly

## 🚀 Deployment

### Static Hosting Options

1. **Netlify**
   - Drag and drop the folder to Netlify
   - Or connect to Git repository for automatic deployments

2. **Vercel**
   ```bash
   npx vercel
   ```

3. **GitHub Pages**
   - Push code to GitHub
   - Enable GitHub Pages in repository settings
   - Select source branch

4. **AWS S3 + CloudFront**
   - Upload files to S3 bucket
   - Configure bucket for static website hosting
   - Set up CloudFront distribution

5. **Traditional Web Hosting**
   - Upload files via FTP/SFTP
   - Ensure `index.html` is in the root directory

## 🔒 Security Considerations

- FormSubmit.co used for secure form submission
- No sensitive data in client-side code
- Honeypot field for spam prevention
- HTTPS recommended for production

## 📊 SEO Optimization

- Unique title tags for each page
- Meta descriptions (150-160 characters)
- Semantic HTML structure
- Open Graph meta tags
- Proper heading hierarchy
- Fast page load times
- Mobile-friendly design

## 🎨 Customization Guide

### Changing Colors
Edit CSS custom properties in `css/main.css`:
```css
:root {
    --primary-navy: #1a365d;
    --primary-blue: #2563eb;
    /* ... */
}
```

### Adding New Pages
1. Copy an existing HTML page
2. Update content
3. Add navigation link in header
4. Add link in footer

### Adding Images
1. Place images in `images/` folder
2. Use descriptive filenames (e.g., `hero-background.jpg`)
3. Optimize images before upload (WebP format recommended)
4. Add proper alt text

## 📧 Contact Form Integration Alternatives

If you prefer a different form backend:

1. **Formspree**
   - Action: `https://formspree.io/f/{your-form-id}`

2. **FormKeep**
   - Action: `https://formkeep.com/f/{your-form-id}`

3. **Basin**
   - Action: `https://usebasin.com/f/{your-form-id}`

4. **Custom Backend**
   - Create your own API endpoint
   - Update form action URL
   - Modify JavaScript in `contact-form.js`

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify FormSubmit email address is correct
- Check that you've confirmed the verification email
- Ensure JavaScript is enabled in browser

### Mobile Menu Not Opening
- Check browser console for JavaScript errors
- Verify `main.js` is loading correctly
- Clear browser cache

### Styles Not Loading
- Verify CSS file paths are correct
- Check for CSS syntax errors
- Clear browser cache

## 📄 License

Copyright © 2025 ZBull-X Technologies. All rights reserved.

## 👥 Credits

- Design & Development: Custom built for ZBull-X Technologies
- Fonts: Google Fonts (Inter, Montserrat)
- Icons: Custom SVG icons
- Form Backend: FormSubmit.co

## 📞 Support

For questions or support regarding this website:
- Email: info@zbullx.com
- Phone: +1 (555) 123-4567

---

**ZBull-X Technologies** - Accelerating Capital Markets Technology

