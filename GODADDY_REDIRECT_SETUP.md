# GoDaddy Permanent Redirect Setup Guide

## Step 1: Access GoDaddy File Manager

### Login to GoDaddy:
1. Go to **godaddy.com**
2. Click **Sign In** (top right)
3. Enter your GoDaddy username/password

### Access Hosting Control Panel:
1. Click **My Products** (top menu)
2. Find your hosting plan
3. Click **Manage** next to your hosting account
4. Click **File Manager** (in hosting dashboard)

## Step 2: Navigate to Website Root

1. In File Manager, click **public_html** folder
2. This is where your website files go
3. **Delete all existing files** in public_html (backup first if needed)

## Step 3: Upload Redirect Files

### Upload Method 1 - Drag & Drop:
1. Download these 2 files from your project:
   - `godaddy_redirect_package/index.html`
   - `godaddy_redirect_package/.htaccess`
2. Drag both files into the public_html folder
3. Wait for upload completion

### Upload Method 2 - Upload Button:
1. Click **Upload** button in File Manager
2. Select both files from godaddy_redirect_package folder
3. Upload to public_html directory

## Step 4: Verify Files

After upload, you should see in public_html:
```
public_html/
├── index.html     (2KB)
└── .htaccess      (1KB)
```

## Step 5: Test Redirect

1. Open your GoDaddy domain in browser
2. You should be instantly redirected to: `https://bondliden.github.io/lagobravo-website`
3. Test with www version too: `www.yourdomain.com`

## Alternative: cPanel Method

If your GoDaddy uses cPanel:
1. Login to **cPanel** (not File Manager)
2. Find **File Manager** icon
3. Go to **public_html** folder
4. Upload the same 2 files

## Troubleshooting

**If redirect doesn't work:**
1. Check file names are exact: `index.html` and `.htaccess`
2. Make sure .htaccess file starts with a dot
3. Clear browser cache and try again
4. Wait 5-10 minutes for DNS propagation

**File Permissions:**
- index.html: 644
- .htaccess: 644

## What This Does

✅ **301 Permanent Redirect** - SEO friendly
✅ **All pages redirect** - any URL on your domain
✅ **HTTPS enforced** - secure connections
✅ **Instant redirect** - visitors go directly to GitHub Pages

Your visitors will see your complete Lago Bravo luxury resort website hosted on GitHub Pages, but accessed through your GoDaddy domain name.