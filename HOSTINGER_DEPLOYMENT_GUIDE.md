# Hostinger Deployment Guide for Lago Bravo Website

## Important Notice
Your Lago Bravo website has TWO parts:
1. **Frontend** (the visual website) - CAN be hosted on Hostinger ✓
2. **Backend + Database** (reservations, forms, data) - CANNOT be hosted on Hostinger basic plans ✗

## What This Means
- Your website will DISPLAY correctly on Hostinger
- But reservation forms and wedding inquiries will NOT work without the backend
- You need to either:
  - Keep using Replit for the backend (recommended)
  - Or upgrade to Hostinger VPS to run the full application

## Files to Upload to Hostinger

Upload ALL files from the `dist/public` folder:

### Main Files:
- `index.html` - Main website file
- `favicon.ico` - Browser tab icon
- `favicon-16x16.png` - Small icon
- `favicon-32x32.png` - Medium icon
- `apple-touch-icon.png` - Apple devices icon
- `android-chrome-192x192.png` - Android icon
- `favicon.png` - General icon

### Assets Folder (upload entire folder):
- `assets/index-D9cqXeX2.css` - Website styles
- `assets/index-h_QI_2ZL.js` - Website functionality
- `assets/Lago Bravo_1753205553192-By_VT3NU.png` - Logo image
- `assets/lago-bravo-logo_1753204556550-C-Fp-48j.webp` - Logo webp format

## How to Upload to Hostinger

### Method 1: File Manager (Easiest)
1. Log into your Hostinger account
2. Go to Hosting → Manage → File Manager
3. Navigate to `public_html` folder
4. Delete any existing files (like default index.html)
5. Click "Upload Files"
6. Select ALL files from `dist/public` folder
7. Upload the `assets` folder separately as a folder

### Method 2: FTP (For larger files)
1. Use FileZilla or similar FTP client
2. Connect using your Hostinger FTP credentials
3. Navigate to `public_html` folder
4. Upload all files and the assets folder

## After Upload
1. Visit your domain (www.lagobravo.com)
2. The website should display correctly
3. Note: Forms will show error messages when submitted because the backend is not on Hostinger

## To Make Forms Work
You have 3 options:

### Option 1: Keep Backend on Replit (Recommended)
- Leave the backend running on Replit
- Update the frontend to point to Replit backend API
- This requires modifying the code

### Option 2: Upgrade to Hostinger VPS
- Upgrade to VPS hosting plan
- Install Node.js and PostgreSQL
- Deploy the full application

### Option 3: Use Hostinger's Form Builder
- Replace custom forms with Hostinger's built-in form builder
- Loses database functionality but forms will work

## Domain Setup in Hostinger
1. Add your domain (lagobravo.com) in Hostinger
2. Update nameservers at GoDaddy to point to Hostinger
3. Or use A records to point to Hostinger's IP address

## Files Location in This Replit
All files to upload are in: `/home/runner/lago-bravo-integrated-resorts/dist/public/`