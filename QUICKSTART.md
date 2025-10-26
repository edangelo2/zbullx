# ZBull-X Technologies Website - Quick Start Guide

## 🚀 Get Your Site Running in 5 Minutes

### Step 1: View Locally (30 seconds)

**Option A: Direct File Open**
```bash
cd /Users/edangelo/ai/zbullx
open index.html
```

**Option B: Local Server (Recommended)**
```bash
cd /Users/edangelo/ai/zbullx

# Using Python
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Step 2: Configure Contact Form (2 minutes)

1. Open `contact.html` in a text editor
2. Find line 58:
   ```html
   <form action="https://formsubmit.co/info@zbullx.com" method="POST">
   ```
3. Replace `info@zbullx.com` with your actual email
4. Save the file
5. Test the form - FormSubmit will send you a confirmation email
6. Click the confirmation link in the email

✅ **Done!** Your contact form is now live.

### Step 3: Deploy to Netlify (2 minutes)

**Easiest Deployment Method:**

1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `zbullx` folder
3. Your site is now live! 🎉

**Your site URL:** `https://random-name-12345.netlify.app`

**To use custom domain:**
- Click "Domain Settings" in Netlify
- Add your custom domain
- Update DNS records at your domain registrar

---

## 📝 Essential Customizations

### Update Company Information

**Files to edit:**
- All pages: Footer contact information
- `contact.html`: Contact details
- `team.html`: Team member profiles

**Find and replace:**
- `info@zbullx.com` → Your email
- `+1 (555) 123-4567` → Your phone
- `123 Financial Plaza, Suite 4500` → Your address

### Update Social Media Links

**Find in all HTML files:**
```html
<a href="https://www.linkedin.com/company/zbl-technologies"...>
```

Replace with your actual LinkedIn URL.

---

## 🎨 Customization Quick Reference

### Change Colors

Edit `css/main.css`, lines 2-13:
```css
:root {
    --primary-navy: #1a365d;    /* Main dark blue */
    --primary-blue: #2563eb;    /* Accent blue */
    --accent-blue: #3b82f6;     /* Light accent */
    /* ... */
}
```

### Add Your Logo

1. Replace `images/logo.svg` with your logo file
2. Update all pages:
   ```html
   <a href="index.html" class="logo">
       <img src="images/logo.svg" alt="ZBull-X Technologies" class="logo-image">
   </a>
   ```

### Add Real Images

1. Place images in `images/` folder
2. Optimize images (use WebP format for best performance)
3. Update image paths in HTML
4. Recommended sizes:
   - Hero background: 1920x1080px
   - Team photos: 400x400px
   - Article images: 800x600px

---

## ✅ Pre-Launch Checklist

- [ ] Update contact form email
- [ ] Test form submission
- [ ] Update all contact information
- [ ] Replace placeholder phone numbers
- [ ] Update social media links
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Check spelling and grammar
- [ ] Test contact form

---

## 🐛 Common Issues & Fixes

### Form Not Sending Emails
**Solution:** Verify you confirmed the FormSubmit verification email.

### Mobile Menu Not Working
**Solution:** Make sure `js/main.js` is loading. Check browser console for errors.

### Styles Look Wrong
**Solution:** Clear browser cache or hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows).

### Images Not Loading
**Solution:** Check file paths are correct and images are in the `images/` folder.

---

## 📱 Test Your Site

**Desktop:** Open http://localhost:8000 in your browser

**Mobile:** 
1. Start local server: `python3 -m http.server 8000`
2. Find your computer's IP: `ifconfig | grep inet` (Mac) or `ipconfig` (Windows)
3. On mobile, open: `http://YOUR_IP:8000`

**Or use Chrome DevTools:**
1. Open site in Chrome
2. Press F12 (DevTools)
3. Click device icon (top-left)
4. Test different device sizes

---

## 🚀 Deploy Options Comparison

| Platform | Speed | Cost | Custom Domain | Ease |
|----------|-------|------|---------------|------|
| **Netlify** | ⚡ Instant | Free | ✅ Yes | 🟢 Easy |
| **Vercel** | ⚡ Instant | Free | ✅ Yes | 🟡 Medium |
| **GitHub Pages** | 🐌 ~2 min | Free | ✅ Yes | 🟡 Medium |
| **AWS S3** | 🚀 Fast | ~$1/mo | ✅ Yes | 🔴 Complex |
| **Traditional Host** | 🚀 Fast | $3-10/mo | ✅ Yes | 🟢 Easy |

**Recommendation:** Start with Netlify for easiest deployment.

---

## 📞 Need Help?

1. **Check README.md** for detailed documentation
2. **Check TESTING.md** for testing guidelines
3. **Check DEPLOYMENT.md** for deployment options
4. **Email:** info@zbullx.com

---

## 🎯 Next Steps

1. ✅ View site locally
2. ✅ Configure contact form
3. ✅ Deploy to Netlify
4. ✅ Add custom domain (optional)
5. ✅ Add real content and images
6. ✅ Set up Google Analytics (optional)
7. ✅ Submit to search engines

---

**That's it! Your professional website is ready to go live! 🎉**

---

## Quick Command Reference

```bash
# View locally
cd /Users/edangelo/ai/zbullx && python3 -m http.server 8000

# Deploy to Netlify (via CLI)
npm i -g netlify-cli
netlify deploy

# Deploy to Vercel
npm i -g vercel
vercel

# Create Git repository
git init
git add .
git commit -m "Initial commit"

# Check for broken links (requires npm)
npx broken-link-checker http://localhost:8000
```

---

**Pro Tip:** Bookmark this file for quick reference!

