'use client'

import { motion } from 'framer-motion'
import ParallaxSection from '@/components/ParallaxSection'
import Lanyard from '@/components/Lanyard'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function About() {
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
            <span className="text-gradient">About Me</span>
          </h1>
          <p className="text-soft-white/70 text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat tentang perjalanan dan passion saya dalam dunia development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Photo using Lanyard */}
          <motion.div variants={itemVariants} className="about-content relative z-10 flex justify-center h-[600px] overflow-visible">
            <ParallaxSection offset={-30}>
              <div className="-mt-20">
                <Lanyard imageSrc="/images/cardid.webp" />
              </div>
            </ParallaxSection>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="about-content space-y-6 relative z-10">
            <ParallaxSection offset={30}>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  www.cimeng.web.id
                </h2>
                <p className="text-xl text-soft-white/80 mb-6">
                  Developer | Web | App | Game Server
                </p>
              </div>

              <div className="space-y-4 text-soft-white/80 leading-relaxed">
                <p>
                  Seorang Developer yang berdedikasi dengan passion dalam membangun solusi digital yang inovatif.
                  Saya memiliki pengalaman luas dalam pengembangan website, aplikasi, dan game server.
                </p>
                <p>
                  Dengan pendekatan yang detail dan fokus pada kualitas, saya selalu berusaha memberikan hasil
                  terbaik untuk setiap project. Mulai dari website company profile hingga game server kompleks,
                  setiap project dikerjakan dengan standar profesional yang tinggi.
                </p>
                <p>
                  Selain development, saya juga aktif dalam komunitas developer dan senang berbagi pengetahuan
                  melalui blog dan diskusi teknis. Saya percaya bahwa teknologi harus digunakan untuk menciptakan
                  solusi yang bermanfaat dan memberikan nilai tambah.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-primary">50+</div>
                  <div className="text-sm text-soft-white/70">Projects Completed</div>
                </div>
                <div className="glass px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-accent">5+</div>
                  <div className="text-sm text-soft-white/70">Years Experience</div>
                </div>
                <div className="glass px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-primary">100+</div>
                  <div className="text-sm text-soft-white/70">Happy Clients</div>
                </div>
              </div>
            </ParallaxSection>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
