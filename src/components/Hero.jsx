'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState('')
  const fullText = 'Developer | Web | App | Game Server'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Typing animation
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  useEffect(() => {
    // Mouse parallax effect
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      }
      
      gsap.to('.parallax-element', {
        x: mouseRef.current.x,
        y: mouseRef.current.y,
        duration: 1,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // GSAP animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2,
    })

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
    })

    gsap.from('.hero-buttons', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
              animationDuration: (Math.random() * 10 + 15) + 's',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-element absolute top-1/4 left-1/4 w-96 h-96 bg-purple-neon/20 rounded-full blur-3xl" />
        <div className="parallax-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-neon/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass border-2 border-purple-neon/50 overflow-hidden parallax-element">
            <img
              src="https://via.placeholder.com/300x300/8b5cf6/ffffff?text=CD"
              alt="Cimenk Dirgantara"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-gradient">Cimenk Dirgantara</span>
        </h1>

        <div className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-4 min-h-[2em]">
          <span className="text-soft-white/90">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-1 h-6 bg-purple-neon ml-2"
            />
          </span>
        </div>

        <p className="text-soft-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Seorang Developer website, aplikasi, dan Server Game. Membangun solusi digital yang inovatif dan berkualitas tinggi.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-neon to-blue-neon rounded-lg font-semibold text-white shadow-glow-purple hover:shadow-glow-soft transition-all duration-300 flex items-center gap-2"
            >
              Lihat Portfolio
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass border border-white/20 rounded-lg font-semibold text-soft-white hover:border-purple-neon/50 hover:shadow-glow-soft transition-all duration-300"
            >
              Hubungi Saya
            </motion.button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-neon/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-neon rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

