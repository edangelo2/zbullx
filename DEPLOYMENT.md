# ZBull-X Technologies Website - Deployment Guide

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Via Drag & Drop:**
1. Go to https://www.netlify.com/
2. Sign up for a free account
3. Drag and drop the entire `zbullx` folder onto the Netlify dashboard
4. Your site will be live in seconds!
5. Configure custom domain in Site Settings > Domain Management

**Via Git:**
1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Netlify
3. Netlify will auto-deploy on every push
4. Configure build settings if needed

**Custom Domain Setup:**
- Add custom domain in Netlify dashboard
- Update DNS records at your domain registrar
- Enable HTTPS (automatic with Let's Encrypt)

---

### Option 2: Vercel (Great for developers)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy from terminal:
   ```bash
   cd /Users/edangelo/ai/zbullx
   vercel
   ```

3. Follow prompts to deploy
4. Site will be live with automatic HTTPS

**Custom Domain:**
```bash
vercel domains add yourdomain.com
```

---

### Option 3: GitHub Pages (Free)

1. **Create GitHub repository:**
   ```bash
   cd /Users/edangelo/ai/zbullx
   git init
   git add .
   git commit -m "Initial commit - ZBull-X Technologies website"
   git branch -M main
   git remote add origin https://github.com/yourusername/zbullx-technologies.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select source: `main` branch, `/ (root)` folder
   - Click Save

3. **Access site:**
   - Site will be available at: `https://yourusername.github.io/zbullx-technologies/`

4. **Custom Domain:**
   - Add `CNAME` file in root with your domain
   - Configure DNS at domain registrar

---

### Option 4: AWS S3 + CloudFront (Enterprise)

**Step 1: Create S3 Bucket**
```bash
aws s3 mb s3://zbullx.com
```

**Step 2: Upload Files**
```bash
cd /Users/edangelo/ai/zbullx
aws s3 sync . s3://zbullx.com --exclude ".git/*" --exclude "*.md"
```

**Step 3: Configure Static Website Hosting**
```bash
aws s3 website s3://zbullx.com \
  --index-document index.html \
  --error-document 404.html
```

**Step 4: Set Bucket Policy**
Create `bucket-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::zbullx.com/*"
    }
  ]
}
```

Apply policy:
```bash
aws s3api put-bucket-policy \
  --bucket zbullx.com \
  --policy file://bucket-policy.json
```

**Step 5: Create CloudFront Distribution**
- Go to AWS CloudFront console
- Create distribution
- Set origin to S3 bucket
- Enable HTTPS
- Add alternate domain names (CNAME)
- Request SSL certificate via ACM

**Step 6: Update DNS**
- Add CNAME record pointing to CloudFront distribution
- Or use Route 53 for DNS

---

### Option 5: Traditional Web Hosting (cPanel/FTP)

**Via FTP:**
1. Connect to your hosting via FTP client (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` directory
3. Ensure `index.html` is in root
4. Set proper file permissions (644 for files, 755 for directories)

**Via cPanel File Manager:**
1. Log in to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload ZIP file and extract, or upload files directly
5. Verify files are in correct location

---

### Option 6: Azure Static Web Apps

1. Install Azure CLI:
   ```bash
   brew install azure-cli  # macOS
   ```

2. Login and deploy:
   ```bash
   az login
   az staticwebapp create \
     --name zbullx-technologies \
     --resource-group YourResourceGroup \
     --location "eastus"
   ```

3. Deploy files via GitHub Actions or Azure CLI

---

## Pre-Deployment Checklist

### 1. Update Contact Form
- [ ] Change FormSubmit email address in `contact.html`
- [ ] Test form submission
- [ ] Verify email delivery

### 2. Update Contact Information
- [ ] Replace placeholder email addresses
- [ ] Update phone numbers
- [ ] Verify office address
- [ ] Update social media links

### 3. Update Content
- [ ] Review all text for accuracy
- [ ] Check for placeholder text
- [ ] Verify team member information
- [ ] Update article dates if needed

### 4. Optimize Assets
- [ ] Compress images (if adding real images)
- [ ] Minify CSS (optional for production)
- [ ] Minify JavaScript (optional for production)

### 5. Configure SEO
- [ ] Verify meta descriptions
- [ ] Check page titles
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

### 6. Security
- [ ] Enable HTTPS
- [ ] Add security headers
- [ ] Configure CSP (Content Security Policy)

---

## Post-Deployment Steps

### 1. Verify Deployment
```bash
# Check if site is accessible
curl -I https://zbullx.com

# Check for broken links
# Use online tools like Dead Link Checker
```

### 2. Set Up Monitoring
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Uptime monitoring (UptimeRobot, Pingdom)

### 3. Performance Optimization
- [ ] Run Google PageSpeed Insights
- [ ] Optimize based on recommendations
- [ ] Enable Gzip compression
- [ ] Configure browser caching

### 4. SEO Setup
```bash
# Create sitemap.xml
# Add to root directory
```

Example `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://zbullx.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://zbullx.com/solutions.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zbullx.com/team.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zbullx.com/insights.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zbullx.com/partnerships.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://zbullx.com/contact.html</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

Create `robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://zbullx.com/sitemap.xml
```

---

## Custom Domain Configuration

### DNS Records to Add:

**For root domain (zbullx.com):**
```
Type: A
Name: @
Value: [Your hosting IP or use ALIAS/ANAME for CDN]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: zbullx.com
```

**For Netlify/Vercel:**
```
Type: CNAME
Name: www
Value: [provider-specific domain].netlify.app
```

---

## SSL/HTTPS Setup

### Let's Encrypt (Free)
Most modern hosting providers (Netlify, Vercel, GitHub Pages) provide automatic HTTPS via Let's Encrypt.

### Manual SSL Certificate
1. Purchase SSL certificate from CA
2. Generate CSR on server
3. Install certificate files
4. Configure web server for HTTPS
5. Force HTTPS redirect

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=.
```

---

## Troubleshooting

### Site Not Loading
- Check DNS propagation (can take 24-48 hours)
- Verify files are in correct directory
- Check file permissions

### Images Not Showing
- Verify image paths are correct
- Check file names (case-sensitive on Linux)
- Ensure images are uploaded

### Form Not Working
- Verify FormSubmit email is confirmed
- Check JavaScript console for errors
- Test form in different browsers

### Mobile Menu Not Working
- Ensure JavaScript files are loading
- Check for console errors
- Verify file paths are correct

---

## Backup & Versioning

### Git Version Control
```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Regular backups
git add .
git commit -m "Update content"
git push
```

### Manual Backups
- Download entire site via FTP regularly
- Keep local copies of all files
- Use hosting provider's backup features

---

## Performance Optimization

### Enable Compression
Add to `.htaccess` (Apache):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/javascript application/javascript
</IfModule>
```

### Browser Caching
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Support & Maintenance

- Regularly update content
- Monitor form submissions
- Check for broken links monthly
- Review analytics quarterly
- Update browser compatibility as needed
- Backup site regularly

---

**Need Help?** 
Contact: info@zbullx.com

