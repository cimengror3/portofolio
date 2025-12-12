import { Inter, Poppins, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata = {
  title: 'Cimenk Dirgantara | Developer Portfolio',
  description: 'Developer website, aplikasi, dan Server Game. Portfolio profesional dengan pengalaman dalam web development, aplikasi, dan game server development.',
  keywords: 'developer, web development, game server, portfolio, cimenk dirgantara',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} ${sora.variable} font-sans bg-dark text-soft-white antialiased`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

