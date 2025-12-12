'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FiBriefcase, FiCode, FiServer, FiTrendingUp } from 'react-icons/fi'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const experiences = [
  {
    id: 1,
    title: 'Freelance Full Stack Developer',
    company: 'Self Employed',
    period: '2020 - Present',
    description: 'Mengembangkan berbagai website dan aplikasi untuk klien dengan teknologi modern seperti Next.js, React, dan Node.js. Fokus pada kualitas code, performa, dan user experience.',
    icon: FiCode,
    color: '#8b5cf6',
  },
  {
    id: 2,
    title: 'Game Server Developer',
    company: 'GTA SAMP Server',
    period: '2019 - Present',
    description: 'Mengembangkan dan mengelola server game GTA San Andreas Multiplayer dengan sistem kompleks, manajemen komunitas, dan optimasi performa server.',
    icon: FiServer,
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'E-Commerce Platform Developer',
    company: 'CK Store',
    period: '2021 - Present',
    description: 'Membangun platform e-commerce khusus untuk kebutuhan developer dengan fitur lengkap termasuk payment gateway, manajemen produk, dan sistem inventory.',
    icon: FiTrendingUp,
    color: '#8b5cf6',
  },
  {
    id: 4,
    title: 'Community & Services Manager',
    company: 'Discord Dev Server',
    period: '2022 - Present',
    description: 'Mengelola server Discord komunitas developer dengan layanan domain, hosting, dan support teknis. Membangun bot custom dan sistem automasi.',
    icon: FiBriefcase,
    color: '#3b82f6',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function ExperienceTimeline() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
        stagger: 0.2,
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-soft-white/70 text-lg max-w-2xl mx-auto">
            Perjalanan profesional dan pengalaman dalam dunia development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-neon via-blue-neon to-purple-neon hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="timeline-item relative pl-0 md:pl-20"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full glass border-2 flex items-center justify-center hidden md:flex"
                    style={{ borderColor: exp.color }}
                  >
                    <Icon className="w-8 h-8" style={{ color: exp.color }} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass rounded-xl p-6 hover:border-purple-neon/50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-purple-neon font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-soft-white/70 text-sm mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-soft-white/80 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

