# Deployment Guide - Vercel

This guide will walk you through deploying your wedding invitation website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is perfect)
- Supabase project configured (see QUICKSTART.md)

## Step 1: Prepare Your Repository

### Initialize Git (if not already done)

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Wedding invitation website"
\`\`\`

### Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
3. Copy the repository URL

### Push to GitHub

\`\`\`bash
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
\`\`\`

## Step 2: Deploy to Vercel

### Connect Vercel to GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (use GitHub authentication for easier setup)
3. Click "Add New Project"
4. Click "Import Git Repository"
5. Select your wedding invitation repository

### Configure Project

Vercel will auto-detect Next.js. Verify these settings:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: ./
- **Build Command**: \`npm run build\`
- **Output Directory**: \`.next\` (default)
- **Install Command**: \`npm install\`

### Add Environment Variables

Click "Environment Variables" and add each variable:

| Name | Value | Notes |
|------|-------|-------|
| \`NEXT_PUBLIC_SUPABASE_URL\` | Your Supabase project URL | From Supabase Settings → API |
| \`NEXT_PUBLIC_SUPABASE_ANON_KEY\` | Your Supabase anon key | From Supabase Settings → API |
| \`NEXT_PUBLIC_ADMIN_PASSWORD\` | Your chosen admin password | Choose a strong password |
| \`NEXT_PUBLIC_BRIDE_NAME\` | Bride's name | e.g., "Sarah" |
| \`NEXT_PUBLIC_GROOM_NAME\` | Groom's name | e.g., "Michael" |
| \`NEXT_PUBLIC_WEDDING_DATE\` | Wedding date/time in ISO format | e.g., "2026-06-15T16:00:00" |
| \`NEXT_PUBLIC_WEDDING_CITY\` | City name | e.g., "San Francisco" |
| \`NEXT_PUBLIC_WEDDING_VENUE\` | Venue name | e.g., "Golden Gate Park" |

**Pro tip**: Add these to all environments (Production, Preview, Development)

### Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at \`https://your-project-name.vercel.app\`

## Step 3: Configure Custom Domain (Optional)

### Add Your Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain (e.g., \`ourwedding.com\`)

### Configure DNS

Vercel will provide DNS instructions. Common setups:

#### For Apex Domain (yourwedding.com)
Add an A record:
- Type: \`A\`
- Name: \`@\`
- Value: \`76.76.21.21\`

#### For www Subdomain
Add a CNAME record:
- Type: \`CNAME\`
- Name: \`www\`
- Value: \`cname.vercel-dns.com\`

**Note**: DNS propagation can take 24-48 hours

## Step 4: Test Your Deployment

### Test Main Pages

Visit your deployed URL and check:
- [x] Hero section displays correctly
- [x] Countdown timer is working
- [x] All sections scroll smoothly
- [x] Gallery images load
- [x] Animations are smooth

### Test RSVP Functionality

1. Fill out the RSVP form with test data
2. Submit the form
3. Check for success message
4. Go to \`your-domain.com/admin\`
5. Login with your admin password
6. Verify the test RSVP appears

### Test Admin Dashboard

1. Visit \`/admin\`
2. Login with your password
3. Check that RSVPs display correctly
4. Test the CSV export function
5. Try refreshing the data

## Step 5: Continuous Deployment

Vercel automatically deploys when you push to GitHub:

\`\`\`bash
# Make changes to your code
git add .
git commit -m "Update wedding details"
git push

# Vercel will automatically deploy the changes
\`\`\`

### Preview Deployments

- Every branch gets a unique preview URL
- Pull requests get automatic deployment previews
- Production branch (main) deploys to your main domain

## Monitoring and Analytics

### View Deployment Logs

1. Go to Vercel dashboard
2. Click on your deployment
3. Check "Functions" tab for API logs
4. Check "Build Logs" for build issues

### Add Analytics (Optional)

Enable Vercel Analytics:
1. Go to "Analytics" tab
2. Click "Enable"
3. Free tier includes basic analytics

## Troubleshooting

### Build Fails

**Check build logs in Vercel dashboard**

Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

Solution: Fix locally first, test with \`npm run build\`, then push

### RSVPs Not Working

**Symptoms**: Form submits but data doesn't save

Check:
1. Supabase URL and key are correct in Vercel environment variables
2. Supabase RLS policies are enabled
3. Check Vercel Function logs for errors

### Admin Page Shows Wrong Password

**Issue**: Using old password or wrong variable

Solution:
1. Update \`NEXT_PUBLIC_ADMIN_PASSWORD\` in Vercel
2. Redeploy or wait for automatic redeployment

### Images Not Loading

**Issue**: Images work locally but not in production

Solution:
1. Ensure images are in \`public/images/\` directory
2. Use paths starting with \`/images/...\`
3. Check image file sizes (optimize large images)
4. Verify images are committed to git

### Custom Domain Not Working

**Issue**: Domain shows error or doesn't redirect

Check:
1. DNS records are correctly configured
2. SSL certificate is provisioned (automatic, takes 1-2 minutes)
3. Wait 24-48 hours for DNS propagation
4. Use [dnschecker.org](https://dnschecker.org) to verify DNS

## Performance Optimization

### Enable Caching

Vercel automatically caches static assets. To optimize:

1. Use Next.js Image component (already implemented)
2. Optimize images before uploading
3. Use WebP format for better compression

### Monitor Performance

Use Vercel Speed Insights:
1. Go to "Speed Insights" tab
2. Enable for free
3. Monitor Core Web Vitals

## Security Best Practices

### Secure Admin Access

Current implementation uses environment variable for password. For better security:

1. Use a strong admin password
2. Consider implementing proper authentication (NextAuth.js)
3. Don't share admin URL publicly

### Supabase Security

1. Use Row Level Security (RLS) policies (already enabled)
2. Don't expose service role key
3. Monitor Supabase logs for suspicious activity

### Environment Variables

1. Never commit \`.env.local\` to git (already in .gitignore)
2. Use different passwords for production vs development
3. Rotate passwords if compromised

## Updating Your Site

### Update Content

\`\`\`bash
# Edit your components
code components/OurStory.tsx

# Commit and push
git add .
git commit -m "Update our story"
git push

# Vercel deploys automatically
\`\`\`

### Update Dependencies

\`\`\`bash
npm update
npm audit fix
git commit -am "Update dependencies"
git push
\`\`\`

## Rollback

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find the last working deployment
4. Click "..." → "Promote to Production"

## Cost

### Free Tier Includes:
- Unlimited deployments
- 100GB bandwidth per month
- Automatic HTTPS
- Preview deployments
- 100GB-hours of function execution

**This is more than enough for a wedding website!**

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

## Post-Wedding

After your wedding, you can:
1. Keep the site as a memory
2. Remove the RSVP form
3. Add wedding photos to the gallery
4. Export all RSVPs for thank-you cards

---

**Congratulations on your deployment! Your guests can now RSVP! 🎉**
