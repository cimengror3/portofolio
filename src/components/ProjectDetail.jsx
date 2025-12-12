'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FiExternalLink, FiGithub, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProjectDetail({ project }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.project-detail-content', {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        duration: 1,
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link href="/projects">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-soft-white/70 hover:text-purple-neon mb-8 transition-colors"
          >
            <FiArrowLeft />
            Back to Projects
          </motion.button>
        </Link>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12 glass"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl glass p-2">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
                <span className="glass px-4 py-2 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 project-detail-content">
            <h2 className="text-3xl font-bold mb-6 text-gradient">About Project</h2>
            <p className="text-soft-white/80 leading-relaxed text-lg mb-8">
              {project.description}
            </p>

            {/* Gallery */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Screenshots</h3>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="rounded-xl overflow-hidden"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-96 rounded-xl overflow-hidden glass">
                      <img
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="project-detail-content">
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="text-2xl font-semibold mb-6">Project Info</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-soft-white/70 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-neon/20 text-purple-neon rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-neon to-blue-neon rounded-lg font-semibold text-white hover:shadow-glow-purple transition-all duration-300"
                    >
                      <FiExternalLink />
                      View Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 glass border border-white/20 rounded-lg font-semibold text-soft-white hover:border-purple-neon/50 transition-all duration-300"
                    >
                      <FiGithub />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

