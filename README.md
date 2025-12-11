# 🌐 Ibrahim Samad - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-00ff00?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**🚀 [View Live Website](https://portfolio-website-ibrahim-samad.vercel.app/)**

*Award-winning Agentic AI Architect portfolio showcasing innovative AI projects, global achievements, and cutting-edge technology expertise.*

</div>

---

## 🎯 About This Project

This is my personal portfolio website featuring a **cyberpunk/hacker-themed design** with Matrix-inspired animations and terminal aesthetics. The site showcases my journey as an Agentic AI Architect, including award-winning projects, certifications, and achievements from global competitions.

### ✨ Highlights

- 🏆 **Winner** - HBL P@SHA ICT Awards 2025
- 🥇 **Gold Medal** - Michigan University D2D Competition
- 🌍 **Finalist** - United Nations SDG Challenge
- 🚀 **NASA Space Ambassador** & Global Nominee
- 🥉 **Bronze Medalist** - Global CodeStorm Hackathon

---

## 🎨 Features

### 🖥️ Interactive Design
- **Matrix Rain Animation** - Dynamic falling code effect in the background
- **Terminal-Style Typography** - Cyberpunk aesthetic with green glow effects
- **Smooth Animations** - Typing effects, hologram text, neon pulses, and glitch effects
- **Responsive Layout** - Optimized for mobile, tablet, and desktop devices
- **Glass-morphism UI** - Modern blur effects and backdrop filters

### 📂 Sections
- **Hero Section** - Animated introduction with skill tags
- **About Me** - Mission statement, achievements, and tech stack
- **Projects** - 6 custom AI/ML projects with generated images
- **Gallery** - 15+ achievement sections with 40+ certificates and awards
- **Contact Form** - Working email form using FormSubmit.co
- **Footer** - Social links, tech stack, and professional info

### 🎥 Media Support
- **Image Gallery** - Lightbox modal with smooth transitions
- **Video Support** - Hover-to-play preview in gallery grid
- **Custom Project Images** - AI-generated themed project banners

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom hacker theme
- **React Hooks** - useState, useEffect for interactivity

### Design & Animation
- **CSS Animations** - Custom keyframes for typing, glitch, hologram, neon pulse
- **Canvas API** - Matrix rain background effect
- **Glass-morphism** - Backdrop blur and transparency effects
- **Cubic-bezier Easing** - Smooth transitions throughout

### Deployment & Tools
- **Vercel** - Hosting and continuous deployment
- **Git & GitHub** - Version control
- **FormSubmit.co** - Contact form email delivery
- **Python PIL** - Custom project image generation

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18+ installed
npm, yarn, or pnpm
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Ibrahim4594/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── page.tsx              # Main homepage with all sections
│   ├── layout.tsx            # Root layout with navigation
│   └── globals.css           # Global styles and animations
├── components/
│   ├── Navigation.tsx        # Fixed header navigation
│   ├── MatrixRain.tsx        # Matrix background animation
│   ├── TypingEffect.tsx      # Terminal typing animation
│   ├── ProjectCard.tsx       # Project display component
│   ├── Gallery.tsx           # Image/video gallery with modal
│   └── ContactForm.tsx       # Email contact form
├── public/
│   ├── gallery/              # 40+ certificate images
│   │   ├── hbl/              # HBL awards
│   │   ├── nasa/             # NASA certificates
│   │   ├── michigan/         # University medals
│   │   ├── cisco/            # Cisco certifications
│   │   └── ...               # Other achievements
│   └── *.jpg                 # Project images
└── README.md
```

---

## 🎨 Customization Guide

### Update Personal Information

**1. Hero Section** (`app/page.tsx` lines 20-50)
```tsx
<h1>IBRAHIM_SAMAD</h1>  // Change to your name
<p>Agentic AI Architect</p>  // Change to your title
```

**2. Skills Tags** (`app/page.tsx` lines 45-48)
```tsx
["Agentic AI", "Multi-Agent Systems", ...]  // Update with your skills
```

**3. About Section** (`app/page.tsx` lines 100-150)
- Update mission statement
- Modify achievements list
- Change skill categories

**4. Projects** (`app/page.tsx` lines 200-300)
- Replace project data with your own
- Update GitHub links
- Add custom project images to `/public/`

**5. Gallery** (`app/page.tsx` lines 400-600)
- Update gallery sections array
- Add your images to `/public/gallery/`
- Modify section titles

**6. Contact Info** (`app/page.tsx` lines 700-800)
- Update social media links
- Change location
- Modify availability status

**7. Email Form** (`components/ContactForm.tsx` line 64)
```tsx
action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
```

### Styling Customization

**Colors** (`app/globals.css` lines 3-11)
```css
--terminal-green: #00ff00;  /* Change green color */
--background: #000000;       /* Change background */
```

**Animations** (`app/globals.css` lines 112-460)
- Modify typing speed
- Adjust glow intensity
- Change animation durations

---

## 📧 Contact Form Setup

The contact form uses **FormSubmit.co** for email delivery:

1. Update email in `components/ContactForm.tsx`:
```tsx
action="https://formsubmit.co/your_email@gmail.com"
```

2. Submit the form once to activate
3. Click the confirmation link in your email
4. Form is now live!

**Features:**
- Client-side validation
- Email format checking
- Success/error messages
- Spam protection with CAPTCHA

---

## 🌐 Deployment

### Deploy to Vercel (Current Hosting)

1. **Push to GitHub**
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. **Vercel Auto-Deploy**
- Every push to `main` automatically deploys
- Check status at [Vercel Dashboard](https://vercel.com)

3. **Manual Deploy**
```bash
npm install -g vercel
vercel
```

**Live URL**: [https://portfolio-website-ibrahim-samad.vercel.app/](https://portfolio-website-ibrahim-samad.vercel.app/)

---

## 🏆 Achievements Showcased

### 🥇 Awards & Recognition
- **1st Place** - HBL P@SHA ICT Awards 2025
- **Gold Medal** - Michigan University D2D Competition
- **Finalist** - United Nations SDG 3 Challenge
- **Gold Medal** - Inter-School Taekwondo Championship
- **Honor Award** - Neo Science Olympiad

### 🚀 Certifications (40+ Certificates)
- NASA Space Apps Challenge
- Google Cloud & Kaggle
- Nvidia Deep Learning
- Cisco Networking
- MCP & Hugging Face
- Unreal Engine
- UTech Digital Education
- Arc by LabLab
- Code Alpha Internship

---

## 💼 Projects Featured

1. **AI-Driven Development Platform** - Multi-agent system for automated coding
2. **Invoice Processing Agent** - OCR and LLM-based invoice automation
3. **ResearchGenie** - RAG-powered research assistant
4. **BloomSphere** - NASA Space Apps Challenge winner
5. **CYBER-3D-FORGE** - Cyberpunk 3D asset generator
6. **Neural RX** - Healthcare AI diagnosis system

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution
- 🎨 Additional theme options (cyberpunk red, blue, purple variants)
- 🌐 Multi-language support (i18n)
- ⚡ Performance optimizations
- 📱 Enhanced mobile animations
- 🎥 More gallery features (zoom, filters)
- 🔧 Additional customization options
- 📝 Blog section integration
- 🌙 Light/dark mode toggle
- 🎮 3D elements with Three.js
- 📊 Analytics dashboard

---

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

Feel free to use this template for your own portfolio! Just give credit by linking back to this repo.

---

## 📞 Connect With Me

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-Ibrahim4594-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ibrahim4594)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ibrahim_Samad-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ibrahim-samad-525240342/)
[![Facebook](https://img.shields.io/badge/Facebook-Ibrahim.aiwala-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/ibrahim.aiwala)
[![Email](https://img.shields.io/badge/Email-ibrahimsamad507@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ibrahimsamad507@gmail.com)

**Location**: Karachi, Pakistan 🇵🇰

**Portfolio**: [https://portfolio-website-ibrahim-samad.vercel.app/](https://portfolio-website-ibrahim-samad.vercel.app/)

</div>

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Built with 💚 by Ibrahim Samad | Agentic AI Architect**

*Powered by Next.js, TypeScript, and Tailwind CSS*

</div>
