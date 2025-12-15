'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
}
