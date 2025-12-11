# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern and clean design
- Fully responsive (mobile, tablet, desktop)
- Fast page loads with Next.js App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Contact form with validation
- Project showcase
- About me section with skills

## Pages

- **Home**: Hero section with introduction
- **About**: Bio, skills, and downloadable resume
- **Projects**: Showcase of your work with links to demos and GitHub
- **Contact**: Contact form and contact information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Home Page** (`app/page.tsx`):
   - Update your name and tagline
   - Modify the hero section text

2. **About Page** (`app/about/page.tsx`):
   - Replace the bio text
   - Update skills and technologies
   - Add your profile photo
   - Update resume link

3. **Projects Page** (`app/projects/page.tsx`):
   - Replace example projects with your own
   - Update project titles, descriptions, technologies
   - Add your GitHub and demo links
   - Add project screenshots

4. **Contact Page** (`app/contact/page.tsx`):
   - Update email address
   - Update location
   - Update GitHub and LinkedIn URLs

5. **Navigation** (`components/Navigation.tsx`):
   - Customize the portfolio name/logo

### Adding Images

1. Add your images to the `public` folder
2. Reference them in your code:
```tsx
<img src="/your-image.jpg" alt="Description" />
```

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Fonts in `app/layout.tsx`
- Global styles in `app/globals.css`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Your site will be live in minutes.

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Contact Form Setup

The contact form currently logs to console. To make it functional:

### Option 1: Use Formspree
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Update `components/ContactForm.tsx` to submit to Formspree endpoint

### Option 2: Use API Route with Email Service
1. Install an email service (e.g., Resend, SendGrid)
2. Create API route in `app/api/contact/route.ts`
3. Update the form to POST to your API route

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- React

## License

Feel free to use this template for your own portfolio!
