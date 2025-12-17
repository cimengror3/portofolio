'use client'

import { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

export default function Lanyard({ imageSrc = '/images/cardid.webp' }) {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const cardRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current || !cardRef.current) return

        // Physics constants
        const engine = Matter.Engine.create()
        const runner = Matter.Runner.create()

        // Increase stiffness of world gravity for faster drop
        engine.world.gravity.y = 1.5 // Default is 1. Increase for heavier feel.

        // Use full window width for maximum drag range
        const width = window.innerWidth
        const height = 800

        // Custom Render Loop
        const render = Matter.Render.create({
            element: containerRef.current,
            canvas: canvasRef.current,
            engine: engine,
            options: {
                width: width,
                height: height,
                background: 'transparent',
                wireframes: false,
                // Cap pixelRatio at 2 for performance on high-density mobile screens
                pixelRatio: Math.min(window.devicePixelRatio, 2)
            }
        })

        const cardWidth = 220
        const cardHeight = 350

        // Bodies

        // 1. Anchor Point (Fixed at top center)
        const anchor = Matter.Bodies.circle(width / 2, -50, 20, {
            isStatic: true,
            render: { visible: false }
        })

        // 2. The Card Body
        // Start slightly higher
        const cardBody = Matter.Bodies.rectangle(width / 2, 0, cardWidth, cardHeight, {
            chamfer: { radius: 10 },
            density: 0.01, // Heavier
            frictionAir: 0.01, // Less drag = faster drop
            restitution: 0.4, // Less bouncy, more solid
            label: 'Card',
            render: { visible: false }
        })

        // 3. The Ribbon (Constraint)
        const ribbonLength = 300
        const ribbon = Matter.Constraint.create({
            bodyA: anchor,
            pointA: { x: 0, y: 0 },
            bodyB: cardBody,
            // Attach EXACTLY where the visual hole is. 
            // Card height 350. Top is -175. Hole is at top 20px. 
            // So y = -175 + 20 + (holeHeight/2 approx) = -153
            pointB: { x: 0, y: -153 },
            stiffness: 0.05,
            damping: 0.5,
            length: ribbonLength,
            render: {
                strokeStyle: '#1d4ed8',
                lineWidth: 15,
                type: 'line'
            }
        })

        // 4. Mouse Control
        const mouse = Matter.Mouse.create(render.canvas)
        // Fix: Attach to body for better drag-release detection outside canvas?
        // Actually, sticking to canvas is safer for layout.
        // Use 'stiffness: 0.05' for the mouse constraint to make it looser (less "glued" to cursor)
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: { visible: false }
            }
        })

        // Disable scroll hijacking
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel)
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel)

        // Add to world
        Matter.World.add(engine.world, [anchor, cardBody, ribbon, mouseConstraint])

        // Run
        Matter.Runner.run(runner, engine)
        Matter.Render.run(render)

        // Sync Loop
        let animationFrameId
        const updateCardPosition = () => {
            if (!cardRef.current) return
            const { x, y } = cardBody.position
            const angle = cardBody.angle
            // Matter.js positions bodies by their center.
            // The DOM element's transform origin is its top-left by default.
            // We rely on CSS marginLeft/marginTop to center the element on these coordinates
            cardRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`

            animationFrameId = requestAnimationFrame(updateCardPosition)
        }
        updateCardPosition()

        // Handle Resize (Basic reload for now, or just let it be)
        const handleResize = () => {
            // Full reload or intricate logic needed for resize.
            // For simplicity in this iteration, we rely on initial width.
            // But adjusting canvas size is good practice.
            render.canvas.width = window.innerWidth * window.devicePixelRatio
            render.canvas.style.width = `${window.innerWidth}px`
            // Also update the render options width if you want the physics world to scale
            // render.options.width = window.innerWidth;
            // Matter.Render.set
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            Matter.Render.stop(render)
            Matter.Runner.stop(runner)
            Matter.World.clear(engine.world)
            Matter.Engine.clear(engine)
            cancelAnimationFrame(animationFrameId)
            if (render.canvas) render.canvas.remove()
        }
    }, [])

    return (
        <div ref={containerRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] overflow-visible select-none cursor-grab active:cursor-grabbing z-50 -mt-20 flex justify-center"
            style={{ width: '100vw' }}
        >
            {/* Canvas for Physics Interaction - Must accept pointer events! */}
            <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full" />

            {/* The DOM Card (Visuals) */}
            <div
                ref={cardRef}
                className="absolute top-0 left-0 w-[220px] h-[350px] pointer-events-none z-0"
                style={{
                    // We rely on CSS marginLeft/marginTop to center the element on these coordinates
                    // which come from the physics body position (globally correct now)
                    transformOrigin: '50% 50%',
                    marginLeft: '-110px',
                    marginTop: '-175px'
                }}
            >
                <div className="w-full h-full rounded-[15px] overflow-hidden shadow-2xl relative bg-white">
                    {/* The Card Image */}
                    <img
                        src={imageSrc}
                        alt="ID Card"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />

                    {/* Realism Overlays */}
                    {/* 1. Hole Punch - Centered exactly at 20px from top to match physics constraint */}
                    <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-12 h-4 bg-neutral-900/40 rounded-full z-20 shadow-inner border border-white/20"></div>

                    {/* 2. Plastic Sleeve Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 z-10 pointer-events-none mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-y-12 z-10 pointer-events-none"></div>

                    {/* 3. Border/Edge Highlight */}
                    <div className="absolute inset-0 border border-white/20 rounded-[15px] z-20"></div>
                </div>
            </div>
        </div>
    )
}
