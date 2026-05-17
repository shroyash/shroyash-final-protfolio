# Shroyash Shrestha — Portfolio

Modern, premium developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark / Light mode toggle
- 🎯 Animated particle background
- 🖱️ Custom cursor with hover effects
- 📱 Fully responsive (mobile-first)
- ⚡ Smooth scroll with active section highlight
- 🎬 Framer Motion scroll-reveal animations
- 🔠 Typewriter effect in hero
- 📧 Contact form with toast feedback
- 🔍 SEO-optimized meta tags
- 🚀 Loading screen animation

## 📁 Project Structure

```
portfolio/
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   ├── Hero.tsx             # Hero section with typewriter
│   ├── About.tsx            # About + avatar + chips
│   ├── Skills.tsx           # Categorized skill cards
│   ├── Experience.tsx       # Timeline work experience
│   ├── Projects.tsx         # Project cards with links
│   ├── Certifications.tsx   # Certificate showcase
│   ├── Achievements.tsx     # Achievement grid
│   ├── Contact.tsx          # Contact form + links
│   ├── Footer.tsx           # Footer with social links
│   ├── Loader.tsx           # Loading animation
│   ├── CustomCursor.tsx     # Animated cursor
│   ├── ParticlesBackground.tsx  # Canvas particle field
│   └── Reveal.tsx           # Scroll-reveal wrapper
├── data/
│   └── portfolio.ts         # All content in one place ← EDIT THIS
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx        # SEO + fonts
│   └── index.tsx            # Page assembly
├── styles/
│   └── globals.css          # CSS variables + utilities
├── public/                  # Add your resume PDF here
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## ✏️ Customization

**All content lives in `data/portfolio.ts`** — edit that file to update:

- Personal info (name, email, links, summary)
- Skills and categories
- Work experience and bullets
- Projects (title, description, stack, links)
- Certifications
- Achievements

### Update your resume link

Place your resume PDF at `public/resume.pdf` and update the download button in `components/Hero.tsx`.

### Update links

Replace all `https://example.com` placeholders in `data/portfolio.ts` with your real project URLs.

## 🌐 Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

## 🎨 Theme

Edit CSS variables in `styles/globals.css`:
- `--accent` — primary blue color
- `--accent2` — purple accent
- `--accent3` — cyan accent
- `--grad` — gradient definition

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with SSG/SSR |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Type Animation | Typewriter effect |
| React Scroll | Smooth scrolling |
| React Intersection Observer | Scroll reveal |
| React Hot Toast | Toast notifications |
| HTML5 Canvas | Particle background |

---

Built with ☕ by **Shroyash Shrestha** — Kathmandu, Nepal
