'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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

  // Removed GSAP animations - using Framer Motion instead for better reliability

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }}
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="parallax-element absolute top-1/4 left-1/4 w-96 h-96 bg-purple-neon/20 rounded-full blur-3xl" />
        <div className="parallax-element absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-neon/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full glass border-2 border-purple-neon/50 overflow-hidden parallax-element">
            <img
              src="https://via.placeholder.com/300x300/8b5cf6/ffffff?text=CD"
              alt="Cimenk Dirgantara"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Scroll Indicator - Moved below image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-neon/70 rounded-full flex justify-center backdrop-blur-sm bg-dark-secondary/50"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-3 bg-purple-neon rounded-full mt-2 shadow-glow-purple"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-gradient">Cimenk Dirgantara</span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 min-h-[2em] relative z-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Developer', 'Web', 'App', 'Game Server'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 0.5 + (index * 0.1),
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative"
              >
                <div className="glass border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm hover:border-purple-neon/50 hover:shadow-glow-soft transition-all duration-300">
                  <span className="text-sm md:text-base lg:text-lg font-medium text-soft-white/90 group-hover:text-purple-neon transition-colors">
                    {item}
                  </span>
                </div>
                {index < 3 && (
                  <span className="mx-2 text-purple-neon/50 text-lg md:text-xl lg:text-2xl font-light">
                    |
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-soft-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Seorang Developer website, aplikasi, dan Server Game. Membangun solusi digital yang inovatif dan berkualitas tinggi.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16 relative z-20"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-neon to-blue-neon rounded-lg font-semibold text-white shadow-glow-purple hover:shadow-glow-soft transition-all duration-300 flex items-center gap-2 whitespace-nowrap border-2 border-transparent hover:border-white/20 backdrop-blur-sm"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 4px 6px rgba(139, 92, 246, 0.4))',
              }}
            >
              <span className="relative z-10">Lihat Portfolio</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-dark-secondary/90 backdrop-blur-md border-2 border-white/30 rounded-lg font-semibold text-soft-white hover:border-purple-neon/70 hover:shadow-glow-soft transition-all duration-300 whitespace-nowrap hover:bg-dark-secondary"
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              Hubungi Saya
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

