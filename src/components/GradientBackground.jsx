'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GradientBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-dark" />

            {/* Animated Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-primary/20 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-accent/20 rounded-full blur-[120px]"
            />

            {/* Mouse Follower Gradient */}
            <motion.div
                animate={{
                    x: mousePosition.x - 200,
                    y: mousePosition.y - 200,
                }}
                transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    mass: 0.5
                }}
                className="absolute w-[400px] h-[400px] bg-blue-primary/10 rounded-full blur-[100px]"
            />
        </div>
    )
}
