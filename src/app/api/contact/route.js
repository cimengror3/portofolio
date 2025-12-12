import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map()

function checkRateLimit(ip) {
  const now = Date.now()
  const oneMinute = 60 * 1000

  if (rateLimitMap.has(ip)) {
    const { count, resetTime } = rateLimitMap.get(ip)
    
    if (now < resetTime) {
      if (count >= 1) {
        return false // Rate limit exceeded
      }
      rateLimitMap.set(ip, { count: count + 1, resetTime })
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + oneMinute })
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + oneMinute })
  }

  return true
}

export async function POST(request) {
  try {
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Terlalu banyak request. Silakan coba lagi dalam 1 menit.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Semua field harus diisi' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Format email tidak valid' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { message: 'Pesan minimal 10 karakter' },
        { status: 400 }
      )
    }

    // Create transporter
    // Note: In production, use environment variables for email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || email,
      to: 'cs@cimeng.web.id',
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0d0d0d; color: #f3f4f6;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong style="color: #8b5cf6;">Name:</strong> ${name}</p>
            <p><strong style="color: #8b5cf6;">Email:</strong> ${email}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #1a1a1a; border-left: 4px solid #8b5cf6; border-radius: 4px;">
            <p><strong style="color: #8b5cf6;">Message:</strong></p>
            <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #1a1a1a; color: #8b5cf6; font-size: 12px;">
            <p>This email was sent from the portfolio contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the portfolio contact form.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    // If SMTP is not configured, return success anyway (for development)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn('SMTP not configured. Email not sent.')
      return NextResponse.json(
        { message: 'Pesan berhasil dikirim! (SMTP not configured in development)' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi nanti.' },
      { status: 500 }
    )
  }
}

