'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ParallaxSection from '@/components/ParallaxSection'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiFigma,
  SiDocker,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Custom PAWN Icon Component - Game Server Scripting Language
const PawnIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z" />
    <path d="M8 10v4h2v-2h4v2h2v-4H8zm2 2h4v-2h-4v2z" />
    <circle cx="12" cy="6" r="1.5" />
  </svg>
)

const skills = [
  { name: 'HTML5', icon: SiHtml5, level: 95, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178c6' },
  { name: 'React', icon: SiReact, level: 90, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, level: 88, color: '#000000' },
  { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
  { name: 'Python', icon: SiPython, level: 90, color: '#3776ab' },
  { name: 'C++', icon: SiCplusplus, level: 88, color: '#00599c' },
  { name: 'PAWN', icon: PawnIcon, level: 92, color: '#8b5cf6' },
  { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479a1' },
  { name: 'TailwindCSS', icon: SiTailwindcss, level: 92, color: '#06b6d4' },
  { name: 'Git', icon: SiGit, level: 85, color: '#f05032' },
  { name: 'Figma', icon: SiFigma, level: 75, color: '#f24e1e' },
  { name: 'Docker', icon: SiDocker, level: 70, color: '#2496ed' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const progressRefs = useRef([])
  const scrollTriggers = useRef([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // Animate progress bars with proper cleanup
      progressRefs.current.forEach((ref, index) => {
        if (ref && ref.parentElement) {
          const skill = skills[index]
          const trigger = ScrollTrigger.create({
            trigger: ref.parentElement,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(ref, {
                width: `${skill.level}%`,
                duration: 1.5,
                ease: 'power2.out',
              })
            },
          })
          scrollTriggers.current.push(trigger)
        }
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      scrollTriggers.current.forEach(trigger => trigger?.kill())
      scrollTriggers.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h1>
          <p className="text-soft-white/70 text-lg max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun solusi digital terbaik
          </p>
        </motion.div>

        {/* Progress Bars Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skill-section mb-16 relative z-10"
        >
          <ParallaxSection offset={20}>
            <h2 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-6 h-6 flex-shrink-0" style={{ color: skill.color }} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-soft-white/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-secondary rounded-full overflow-hidden relative">
                    <div
                      ref={(el) => {
                        if (el) progressRefs.current[index] = el
                      }}
                      className="h-full rounded-full relative"
                      style={{
                        width: '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        boxShadow: `0 0 10px ${skill.color}66`,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>
        </motion.div>

        {/* Icon Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skill-section mb-16 relative z-10"
        >
          <ParallaxSection offset={30}>
            <h2 className="text-2xl font-semibold mb-8 text-center">Technologies</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer group min-h-[120px]"
                >
                  <skill.icon
                    className="w-12 h-12 mb-3 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs text-center text-soft-white/70 group-hover:text-soft-white transition-colors font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>
        </motion.div>

        {/* Card Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="skill-section relative z-10"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Expertise Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Frontend Development',
                description: 'React, Next.js, TypeScript, TailwindCSS',
                icon: '🎨',
              },
              {
                title: 'Backend Development',
                description: 'Node.js, API Development, Database Design',
                icon: '⚙️',
              },
              {
                title: 'Game Server',
                description: 'GTA SAMP, Server Management, Pawn Scripting',
                icon: '🎮',
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-xl p-6 hover:border-blue-primary/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-soft-white/70">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
