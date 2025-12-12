# 🚀 Panduan Deploy ke GitHub & Vercel

## 📦 Persiapan untuk GitHub

### 1. Inisialisasi Git Repository

```bash
# Di dalam folder WEBSITE
git init
git add .
git commit -m "Initial commit: Portfolio website for Cimenk Dirgantara"
```

### 2. Buat Repository di GitHub

1. Buka [github.com](https://github.com)
2. Klik **New Repository**
3. Isi nama repository (contoh: `cimenk-portfolio`)
4. **JANGAN** centang "Initialize with README" (karena sudah ada)
5. Klik **Create repository**

### 3. Push ke GitHub

```bash
# Tambahkan remote repository
git remote add origin https://github.com/USERNAME/cimenk-portfolio.git

# Ganti USERNAME dengan username GitHub Anda

# Push ke GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deploy ke Vercel

### Metode 1: Import dari GitHub (Recommended)

1. **Buka [vercel.com](https://vercel.com)**
2. **Login** dengan GitHub account
3. Klik **Add New Project**
4. **Import** repository yang sudah di-push ke GitHub
5. Vercel akan otomatis detect Next.js project
6. Klik **Deploy**

### Metode 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Untuk production
vercel --prod
```

## ⚙️ Setup Environment Variables (Opsional)

Jika ingin contact form mengirim email, setup di Vercel:

1. Buka project di Vercel Dashboard
2. Pergi ke **Settings** → **Environment Variables**
3. Tambahkan:
   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASSWORD = your-app-password
   ```
4. Klik **Save**
5. Redeploy project

### Cara Dapatkan Gmail App Password

1. Aktifkan 2-Factor Authentication di Google Account
2. Buka [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate password baru untuk "Mail"
4. Copy password tersebut ke `SMTP_PASSWORD`

## ✅ Checklist Sebelum Deploy

- [x] Semua file sudah di-commit
- [x] `.gitignore` sudah benar (tidak commit node_modules, .env, dll)
- [x] `package.json` sudah lengkap dengan dependencies
- [x] Tidak ada error di local build (`npm run build`)
- [x] README.md sudah ada
- [x] Environment variables sudah disiapkan (jika perlu)

## 🔍 Verifikasi Setelah Deploy

1. **Cek semua halaman:**
   - Home: `/`
   - About: `/about`
   - Skills: `/skills`
   - Projects: `/projects`
   - Project Detail: `/projects/[slug]`
   - Experience: `/experience`
   - Blog: `/blog`
   - Blog Post: `/blog/[slug]`
   - Contact: `/contact`

2. **Test contact form:**
   - Isi form dan submit
   - Cek apakah email terkirim (jika SMTP sudah setup)

3. **Cek responsive:**
   - Test di mobile, tablet, desktop

## 🐛 Troubleshooting

### Build Error di Vercel

```bash
# Test build lokal dulu
npm run build

# Jika ada error, fix dulu sebelum push ke GitHub
```

### Environment Variables Tidak Terdeteksi

- Pastikan sudah di-set di Vercel Dashboard
- Redeploy setelah menambahkan env vars
- Pastikan nama variable sama persis (case-sensitive)

### Contact Form Tidak Mengirim Email

- Pastikan SMTP credentials benar
- Cek Vercel logs untuk error
- Untuk development, form tetap return success meski SMTP tidak setup

## 📝 Catatan Penting

- **Domain Custom:** Bisa setup di Vercel Settings → Domains
- **Analytics:** Bisa enable Vercel Analytics di Settings
- **Preview Deployments:** Setiap push ke GitHub akan auto-deploy preview
- **Production:** Hanya deploy dari branch `main` atau `master`

## 🎉 Selesai!

Website Anda sekarang live di Vercel! URL akan otomatis diberikan setelah deploy pertama.

Contoh: `https://cimenk-portfolio.vercel.app`

---

**Tips:** Setelah deploy, update link di README dan social media dengan URL Vercel Anda!

