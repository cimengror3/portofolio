import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-soft-white/70 mb-8 max-w-md mx-auto">
          Halaman yang Anda cari tidak ditemukan. Mungkin telah dipindahkan atau dihapus.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-purple-neon to-blue-neon rounded-lg font-semibold text-white hover:shadow-glow-purple transition-all duration-300 flex items-center gap-2"
          >
            <FiHome />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 glass border border-white/20 rounded-lg font-semibold text-soft-white hover:border-purple-neon/50 transition-all duration-300 flex items-center gap-2"
          >
            <FiArrowLeft />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

