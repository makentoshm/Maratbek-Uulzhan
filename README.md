# Wedding Invitation Website

A modern, elegant wedding invitation website built with Next.js, Supabase, and Tailwind CSS. Features a beautiful responsive design, RSVP functionality, photo gallery, and admin dashboard.

## Features

- ✨ **Elegant Design**: Romantic, minimal aesthetic with soft pastel colors
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices
- ⏱️ **Live Countdown**: Real-time countdown to the wedding date
- 📖 **Our Story**: Timeline section to share your love story
- 📍 **Event Details**: Ceremony and reception information with Google Maps integration
- 🖼️ **Photo Gallery**: Image grid with lightbox modal for viewing photos
- 👗 **Dress Code & Gifts**: Information sections for guest guidance
- 📝 **RSVP Form**: Interactive form with Supabase backend
- 🔐 **Admin Dashboard**: Password-protected view to manage RSVPs and export data
- 🎨 **Smooth Animations**: Subtle Framer Motion animations throughout
- 🚫 **Spam Protection**: Honeypot field and rate limiting for RSVP submissions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Image Gallery**: yet-another-react-lightbox
- **Language**: TypeScript
- **Hosting**: Vercel-ready

## Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier works great)
- Vercel account (for deployment)

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
cd wedding-invitation
npm install
\`\`\`

### 2. Supabase Configuration

#### Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be fully set up

#### Run the Database Schema

1. In your Supabase project dashboard, go to the SQL Editor
2. Open the \`supabase-schema.sql\` file from this project
3. Copy and paste the entire contents into the SQL Editor
4. Click "Run" to execute the schema

This will create:
- The \`rsvps\` table with all necessary columns
- Row Level Security (RLS) policies for public submissions
- Indexes for optimal performance

#### Get Your API Keys

1. In Supabase dashboard, go to Settings → API
2. Copy your:
   - Project URL
   - Anon/Public key

### 3. Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`bash
cp .env.local.example .env.local
\`\`\`

Edit \`.env.local\` with your configuration:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Admin Password (for /admin route)
ADMIN_PASSWORD=your-secure-password

# Wedding Configuration
NEXT_PUBLIC_BRIDE_NAME=Bride Name
NEXT_PUBLIC_GROOM_NAME=Groom Name
NEXT_PUBLIC_WEDDING_DATE=2026-06-15T16:00:00
NEXT_PUBLIC_WEDDING_CITY=City Name
NEXT_PUBLIC_WEDDING_VENUE=Venue Name
\`\`\`

**Note**: For production, you'll need to set \`NEXT_PUBLIC_ADMIN_PASSWORD\` as an environment variable in Vercel (without the NEXT_PUBLIC_ prefix for security). The admin page uses \`NEXT_PUBLIC_ADMIN_PASSWORD\` in the current implementation for simplicity, but for better security, consider implementing proper authentication.

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Customization Guide

### Personalize Content

#### Wedding Information
Edit the environment variables in \`.env.local\` to customize names, date, and location.

#### Our Story Timeline
Edit \`components/OurStory.tsx\` and modify the \`timeline\` array:

\`\`\`typescript
const timeline = [
  {
    year: '2018',
    title: 'First Met',
    description: 'Your story here...',
  },
  // Add more milestones
];
\`\`\`

#### Event Details
Edit \`components/EventDetails.tsx\` to customize ceremony and reception details.

#### Dress Code & Gifts
Edit \`components/DressCodeAndGifts.tsx\` to customize the dress code requirements and gift preferences.

### Customize Colors

Edit \`tailwind.config.ts\` to change the color scheme:

\`\`\`typescript
colors: {
  romantic: {
    // Customize these colors
    50: '#fdf4f5',
    500: '#e74c6b',
    // ...
  },
}
\`\`\`

### Add Your Photos

#### Gallery Photos
Edit \`components/Gallery.tsx\` and replace the placeholder images:

\`\`\`typescript
const photos = [
  { src: '/images/photo1.jpg', alt: 'Description' },
  { src: '/images/photo2.jpg', alt: 'Description' },
  // Add more photos
];
\`\`\`

Place your images in the \`public/images\` directory.

#### Background Images
To add a hero background image, edit \`components/Hero.tsx\` and add:

\`\`\`tsx
<div className="absolute inset-0">
  <Image
    src="/images/hero-bg.jpg"
    alt="Wedding"
    fill
    className="object-cover opacity-20"
  />
</div>
\`\`\`

### Customize Fonts

The project uses Google Fonts. To change fonts, edit:
1. The \`@import\` statement in \`app/globals.css\`
2. The \`fontFamily\` section in \`tailwind.config.ts\`

## Admin Dashboard

Access the admin dashboard at \`/admin\` with your configured password.

Features:
- View all RSVP submissions
- See attendance statistics
- Export RSVPs to CSV
- Refresh data in real-time

## Deployment to Vercel

### 1. Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
\`\`\`

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: \`npm run build\`
   - Output Directory: \`.next\`
5. Add Environment Variables:
   - Click "Environment Variables"
   - Add all variables from your \`.env.local\` file
   - Make sure to use the same names
6. Click "Deploy"

### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration instructions

## Environment Variables for Production

In Vercel, add these environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| \`NEXT_PUBLIC_SUPABASE_URL\` | Your Supabase project URL | \`https://xxx.supabase.co\` |
| \`NEXT_PUBLIC_SUPABASE_ANON_KEY\` | Your Supabase anon key | \`eyJxxx...\` |
| \`NEXT_PUBLIC_ADMIN_PASSWORD\` | Admin dashboard password | \`SecurePassword123\` |
| \`NEXT_PUBLIC_BRIDE_NAME\` | Bride's name | \`Sarah\` |
| \`NEXT_PUBLIC_GROOM_NAME\` | Groom's name | \`Michael\` |
| \`NEXT_PUBLIC_WEDDING_DATE\` | Wedding date/time (ISO format) | \`2026-06-15T16:00:00\` |
| \`NEXT_PUBLIC_WEDDING_CITY\` | Wedding city | \`San Francisco\` |
| \`NEXT_PUBLIC_WEDDING_VENUE\` | Venue name | \`Golden Gate Park\` |

## Project Structure

\`\`\`
wedding-invitation/
├── app/
│   ├── admin/              # Admin dashboard
│   │   └── page.tsx
│   ├── api/
│   │   └── rsvp/          # RSVP API endpoint
│   │       └── route.ts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Countdown.tsx
│   ├── DressCodeAndGifts.tsx
│   ├── EventDetails.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── OurStory.tsx
│   └── RsvpForm.tsx
├── lib/
│   └── supabase.ts       # Supabase client
├── public/
│   └── images/           # Your wedding photos
├── .env.local.example    # Environment variables template
├── supabase-schema.sql   # Database schema
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
\`\`\`

## Troubleshooting

### RSVPs Not Saving

1. Check Supabase connection in browser console
2. Verify environment variables are set correctly
3. Ensure RLS policies are enabled in Supabase
4. Check Supabase logs for errors

### Admin Page Not Loading

1. Verify \`NEXT_PUBLIC_ADMIN_PASSWORD\` is set
2. Clear browser cache
3. Check browser console for errors

### Images Not Loading

1. Ensure images are in \`public/images/\` directory
2. Use correct paths (start with \`/images/...\`)
3. Check Next.js image optimization settings in \`next.config.ts\`

### Build Errors

1. Run \`npm install\` to ensure all dependencies are installed
2. Delete \`.next\` folder and \`node_modules\`, then reinstall
3. Check for TypeScript errors with \`npm run build\`

## Security Considerations

- The current admin implementation uses a simple password check. For production, consider:
  - Implementing proper authentication (NextAuth.js, Supabase Auth)
  - Using server-side password verification
  - Adding rate limiting to the admin login
- The RSVP form includes:
  - Honeypot field for spam prevention
  - Rate limiting (3 requests per minute per IP)
  - Input validation and sanitization
- Supabase RLS policies are enabled for database security

## Performance Optimization

- Images are optimized using Next.js Image component
- Components use lazy loading where appropriate
- Framer Motion animations are GPU-accelerated
- Static generation for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is provided as-is for personal use. Feel free to customize it for your wedding!

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the Supabase and Next.js documentation
3. Check browser console for errors

---

**Congratulations on your wedding! 🎉**

Built with ❤️ using Next.js, Supabase, and Tailwind CSS
