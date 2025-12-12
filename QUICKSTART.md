# Quick Start Guide

## 🚀 Instalasi & Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables (Optional)
Buat file `.env.local` untuk contact form email:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**Catatan:** Jika tidak setup SMTP, contact form tetap berfungsi tapi email tidak akan terkirim (akan return success untuk development).

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 4. Build untuk Production
```bash
npm run build
npm start
```

## 📁 Struktur Proyek

```
WEBSITE/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Home page
│   │   ├── about/             # About page
│   │   ├── skills/            # Skills page
│   │   ├── projects/          # Projects list & detail
│   │   ├── experience/        # Experience page
│   │   ├── blog/              # Blog list & posts
│   │   ├── contact/           # Contact page
│   │   └── api/contact/       # Contact API endpoint
│   ├── components/            # Reusable components
│   ├── data/                  # Static data (projects, blog)
│   └── lib/                   # Utilities
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Mengubah Data Projects
Edit file: `src/data/projects.js`

### Mengubah Data Blog
Edit file: `src/data/blog.js`

### Mengubah Warna
Edit file: `tailwind.config.js` - bagian `colors`

### Mengubah Konten About
Edit file: `src/app/about/page.js`

## 🌐 Deploy ke Vercel

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Set environment variables jika perlu
5. Deploy!

## ✨ Features yang Sudah Diimplementasikan

- ✅ Dark modern aesthetic dengan glassmorphism
- ✅ Neon glow effects
- ✅ Smooth animations (Framer Motion + GSAP)
- ✅ Parallax scrolling
- ✅ Responsive design
- ✅ Contact form dengan backend
- ✅ Blog system
- ✅ Project showcase dengan detail pages
- ✅ Skills dengan progress bars
- ✅ Experience timeline
- ✅ Rate limiting untuk contact form

## 📝 Catatan Penting

- Semua gambar menggunakan placeholder. Ganti dengan gambar asli di:
  - `src/data/projects.js` (thumbnail, logo, images)
  - `src/data/blog.js` (image)
  - `src/components/Hero.jsx` (avatar)
  - `src/app/about/page.js` (photo)

- Untuk production, pastikan setup SMTP dengan benar di `.env.local`

- Website sudah fully responsive dan siap untuk mobile, tablet, dan desktop

## 🎯 Next Steps

1. Ganti placeholder images dengan gambar asli
2. Update konten di data files sesuai kebutuhan
3. Setup SMTP untuk contact form
4. Deploy ke Vercel
5. Customize lebih lanjut sesuai kebutuhan

---

**Website siap digunakan! 🎉**

