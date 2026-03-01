# Quick Start Guide

Get your wedding invitation website running in 5 minutes!

## Step 1: Install Dependencies

\`\`\`bash
npm install
\`\`\`

## Step 2: Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor in your Supabase dashboard
4. Copy the contents of \`supabase-schema.sql\` and run it in the SQL Editor
5. Go to Settings → API and copy your:
   - Project URL
   - Anon/Public key

## Step 3: Configure Environment Variables

Edit the \`.env.local\` file (already created) with your details:

\`\`\`env
# Replace with your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Set a secure admin password
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password

# Customize your wedding details
NEXT_PUBLIC_BRIDE_NAME=Your Bride Name
NEXT_PUBLIC_GROOM_NAME=Your Groom Name
NEXT_PUBLIC_WEDDING_DATE=2026-06-15T16:00:00
NEXT_PUBLIC_WEDDING_CITY=Your City
NEXT_PUBLIC_WEDDING_VENUE=Your Venue Name
\`\`\`

## Step 4: Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your site!

## Step 5: Customize Content

### Update Your Story
Edit \`components/OurStory.tsx\` - change the timeline events to tell your story.

### Add Your Photos
1. Place your photos in \`public/images/\`
2. Edit \`components/Gallery.tsx\` and update the \`photos\` array with your image paths

### Customize Colors
Edit \`tailwind.config.ts\` to change the color scheme in the \`colors\` section.

### Update Event Details
Edit \`components/EventDetails.tsx\` to customize ceremony and reception information.

## Step 6: Test RSVP

1. Go to [http://localhost:3000](http://localhost:3000)
2. Scroll to RSVP form and submit a test RSVP
3. Visit [http://localhost:3000/admin](http://localhost:3000/admin)
4. Login with your admin password
5. See your test RSVP!

## Step 7: Deploy to Vercel

\`\`\`bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin your-github-repo-url
git push -u origin main
\`\`\`

Then:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Add all environment variables from \`.env.local\`
4. Deploy!

## Need Help?

Check the full [README.md](README.md) for detailed documentation.

## Common Issues

**RSVPs not saving?**
- Check that Supabase URL and key are correct
- Verify the SQL schema was run in Supabase

**Images not loading?**
- Make sure images are in \`public/images/\` folder
- Use paths starting with \`/images/...\`

**Admin page not working?**
- Check that \`NEXT_PUBLIC_ADMIN_PASSWORD\` is set in \`.env.local\`

---

**Enjoy your wedding website! 💒**
