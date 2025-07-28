# GoDaddy DNS Settings for GitHub Pages

## Method 1: CNAME Record (Recommended)

### Access GoDaddy DNS Management:
1. Login to **godaddy.com**
2. Go to **My Products** → **All Products and Services**
3. Find your domain → Click **DNS**
4. Or go to **Domain Manager** → Select domain → **DNS**

### DNS Records to Add:

#### For www subdomain:
```
Type: CNAME
Name: www
Value: bondliden.github.io
TTL: 1 Hour (3600)
```

#### For root domain (apex):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 1 Hour

Type: A  
Name: @
Value: 185.199.109.153
TTL: 1 Hour

Type: A
Name: @
Value: 185.199.110.153
TTL: 1 Hour

Type: A
Name: @
Value: 185.199.111.153
TTL: 1 Hour
```

## Method 2: Simple CNAME Only

If you only want www.yourdomain.com to work:

```
Type: CNAME
Name: www
Value: bondliden.github.io
TTL: 1 Hour
```

Then add redirect from root (@) to www:
```
Type: CNAME
Name: @
Value: www.yourdomain.com
TTL: 1 Hour
```

## Complete DNS Configuration

### Step-by-Step in GoDaddy:

1. **Delete existing A records** pointing to GoDaddy servers
2. **Add these DNS records**:

| Type  | Name | Value                    | TTL    |
|-------|------|--------------------------|--------|
| A     | @    | 185.199.108.153         | 1 Hour |
| A     | @    | 185.199.109.153         | 1 Hour |
| A     | @    | 185.199.110.153         | 1 Hour |
| A     | @    | 185.199.111.153         | 1 Hour |
| CNAME | www  | bondliden.github.io     | 1 Hour |

### After DNS Changes:

1. **Wait 24-48 hours** for full propagation
2. **Configure GitHub Pages** custom domain:
   - Go to GitHub repository settings
   - Pages section → Custom domain
   - Enter: `yourdomain.com`
   - Check "Enforce HTTPS"

## Alternative: Forwarding Method

If DNS seems complex, use GoDaddy Domain Forwarding:

1. Go to **Domain Manager**
2. Click your domain
3. Click **Forwarding**
4. Set up forwarding:
   - Forward to: `https://bondliden.github.io/lagobravo-website`
   - Forward type: **Permanent (301)**
   - Settings: **Forward only**

## Verification

Test your setup:
```bash
# Check DNS propagation
nslookup yourdomain.com
nslookup www.yourdomain.com

# Online tools
- whatsmydns.net
- dnschecker.org
```

## GitHub Pages IP Addresses (Current)

These are GitHub's official IP addresses for custom domains:
- 185.199.108.153
- 185.199.109.153  
- 185.199.110.153
- 185.199.111.153

**Note**: These IPs can change. Always check GitHub's official documentation for current addresses.

## Timeline

- **DNS changes**: 5-10 minutes locally
- **Global propagation**: 24-48 hours
- **SSL certificate**: 24 hours after GitHub detects domain

Your domain will point directly to your GitHub Pages website without redirects!