'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    content: 'cs@cimeng.web.id',
    link: 'mailto:cs@cimeng.web.id',
    color: '#3b82f6',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    content: 'Available on request',
    link: '#',
    color: '#3b82f6',
  },
  {
    icon: FiMapPin,
    title: 'Location',
    content: 'Indonesia',
    link: '#',
    color: '#3b82f6',
  },
]

export default function ContactPage() {
  // Removed GSAP animation - using Framer Motion instead for better reliability

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Contact</span>
          </h1>
          <p className="text-soft-white/70 text-lg max-w-2xl mx-auto">
            Mari berkolaborasi! Hubungi saya untuk project, pertanyaan, atau sekedar menyapa
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="contact-info-item glass rounded-xl p-6 text-center hover:border-blue-primary/50 transition-all duration-300 relative z-10"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center"
                  style={{ borderColor: info.color }}
                >
                  <Icon className="w-8 h-8" style={{ color: info.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="text-soft-white/70">{info.content}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  )
}

