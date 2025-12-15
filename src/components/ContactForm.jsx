'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Nama harus diisi' })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email harus diisi' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Format email tidak valid' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Pesan harus diisi' })
      return false
    }
    if (formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Pesan minimal 10 karakter' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: null, message: '' })

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Pesan berhasil dikirim! Saya akan membalas secepatnya.',
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Terjadi kesalahan. Silakan coba lagi.',
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Terjadi kesalahan. Silakan coba lagi nanti.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
    >
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Nama <span className="text-blue-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg focus:outline-none focus:border-blue-primary/50 focus:ring-2 focus:ring-blue-primary/20 transition-all duration-300 text-soft-white"
            placeholder="Masukkan nama Anda"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email <span className="text-blue-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg focus:outline-none focus:border-blue-primary/50 focus:ring-2 focus:ring-blue-primary/20 transition-all duration-300 text-soft-white"
            placeholder="email@example.com"
            disabled={isSubmitting}
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Pesan <span className="text-blue-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 bg-dark-secondary border border-white/10 rounded-lg focus:outline-none focus:border-blue-primary/50 focus:ring-2 focus:ring-blue-primary/20 transition-all duration-300 text-soft-white resize-none"
            placeholder="Tulis pesan Anda di sini..."
            disabled={isSubmitting}
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-3 p-4 rounded-lg ${status.type === 'success'
              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
              }`}
          >
            {status.type === 'success' ? (
              <FiCheck className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{status.message}</span>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-primary to-cyan-accent rounded-lg font-semibold text-white shadow-glow-blue hover:shadow-glow-soft transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <FiSend />
              Kirim Pesan
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  )
}

