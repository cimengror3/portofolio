'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:cs@cimeng.web.id', label: 'Email' },
]

const footerLinks = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],
  'Resources': [
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Blog', href: '/blog' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative mt-20 glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Cimenk Dirgantara
            </h3>
            <p className="text-soft-white/70 mb-4">
              Developer website, aplikasi, dan Server Game. Membangun solusi digital yang inovatif dan berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-purple-neon/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-soft-white/70 hover:text-purple-neon transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-soft-white/70 mb-2">
              Email: <a href="mailto:cs@cimeng.web.id" className="text-purple-neon hover:underline">cs@cimeng.web.id</a>
            </p>
            <p className="text-soft-white/70">
              Available for freelance projects and collaborations.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-soft-white/60">
            © {new Date().getFullYear()} Cimenk Dirgantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

