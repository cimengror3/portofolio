# Portfolio Website - Cimenk Dirgantara

Website portofolio modern, aesthetic, profesional, elegan, dan mewah untuk Developer.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TailwindCSS** - Styling
- **Framer Motion** - Animasi
- **GSAP** - Advanced animations & parallax
- **Nodemailer** - Email service
- **Swiper** - Image carousel

## Features

- ✅ Dark modern aesthetic dengan glassmorphism
- ✅ Neon glow effects yang elegan
- ✅ Smooth animations dengan Framer Motion & GSAP
- ✅ Parallax scrolling effects
- ✅ Responsive design
- ✅ Contact form dengan backend email
- ✅ Blog system (MDX ready)
- ✅ Project showcase dengan detail pages
- ✅ Skills section dengan progress bars
- ✅ Experience timeline

## Getting Started

### ⚠️ Important: Setup npm PATH

Sebelum menjalankan perintah npm, pastikan untuk menjalankan:

```bash
source ~/.zshrc
```

Ini diperlukan agar npm dapat terbaca dan digunakan dengan benar.

### Installation

```bash
source ~/.zshrc
npm install
```

### Development

```bash
source ~/.zshrc
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build

```bash
source ~/.zshrc
npm run build
npm start
```

## Environment Variables

Untuk contact form email, buat file `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## Project Structure

```
src/
  app/
    page.js              # Home page
    about/               # About page
    skills/              # Skills page
    projects/            # Projects list
    projects/[slug]/     # Project detail
    experience/          # Experience page
    blog/                # Blog list
    blog/[slug]/         # Blog post
    contact/             # Contact page
    api/contact/         # Contact API
  components/            # Reusable components
  data/                  # Static data
  lib/                   # Utilities
```

## Deployment

Website siap untuk di-deploy ke Vercel:

1. Push ke GitHub
2. Import project di Vercel
3. Set environment variables jika diperlukan
4. Deploy!

## Customization

- Edit data di `src/data/projects.js` untuk projects
- Edit data di `src/data/blog.js` untuk blog posts
- Update colors di `tailwind.config.js`
- Modify components sesuai kebutuhan

## License

Private project - All rights reserved

