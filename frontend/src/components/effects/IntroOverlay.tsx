"use client"

import {  AnimatePresence, motion, useReducedMotion , useAnimation } from "framer-motion"
import "./glitch.css"
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { MotionButton } from '@/components/ui/button'

// Typewriter hook per spec
function useTypewriter(
  lines: string[],
  speedMs: number = 45,
  pauseAfterLineMs: number = 800,
) {
  const [lineIndex, setLineIndex] = useState(0)
  const [displayed, setDisplayed] = useState<string>('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (done) return
    if (lineIndex >= lines.length) {
      setDone(true)
      return
    }

    const full = lines[lineIndex]
    let i = 0

    const interval = setInterval(() => {
      i += 1
      setDisplayed(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(interval)
        setTimeout(() => {
          if (lineIndex + 1 < lines.length) {
            setLineIndex((idx) => idx + 1)
            setDisplayed('')
          } else {
            setDone(true)
          }
        }, pauseAfterLineMs)
      }
    }, speedMs)

    return () => clearInterval(interval)
  }, [lineIndex, lines, speedMs, pauseAfterLineMs, done])

  return { lineIndex, displayed, done }
}



export default function IntroOverlay({
  initialVisible,
  onFinished,
}: {
  initialVisible: boolean
  onFinished: () => void
}) {
  const logoControls = useAnimation();
  useEffect(() => {
    logoControls
      .start({
        opacity: [0, 1, 0.2, 1, 0.5, 1],
        filter: [
          "brightness(0.2)",
          "brightness(1.3)",
          "brightness(0.5)",
          "brightness(1.1)",
          "brightness(0.7)",
          "brightness(1)"
        ],
        scale: [1, 1.04, 1, 1.02, 1],
        transition: { duration: 1.2, ease: "easeInOut" }
      })
      .then(() => {
        logoControls.start({
          y: [0, -10, 0, 10, 0],
          filter: [
            "brightness(1)",
            "brightness(1.08)",
            "brightness(1)",
            "brightness(1.08)",
            "brightness(1)"
          ],
          transition: { duration: 6, ease: "easeInOut", repeat: Infinity }
        });
      });
  }, [logoControls]);
  
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(initialVisible)
  const [stage, setStage] = useState<'idle' | 'dim' | 'zoom' | 'done'>('idle')
  const [spawnComet, setSpawnComet] = useState(false)
  const [ripple, setRipple] = useState<{ active: boolean; x: number; y: number; max: number }>({ active: false, x: 0, y: 0, max: 0 })
  const [starSpeed, setStarSpeed] = useState(1)

  // Only two lines: ENGINEER and NITK
  const lines = useMemo(() => ['ENGINEER - 25', 'NITK'], [])

  const { lineIndex, displayed, done } = useTypewriter(lines, 45, 800)

  // ESC to skip
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        finishImmediately()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const containerRef = useRef<HTMLDivElement>(null)

  const finishImmediately = useCallback(() => {
    setStage('done')
    setVisible(false)
  }, [])

  const handleEnter = useCallback(async () => {
    if (prefersReducedMotion) {
      // Simple fade out
      setStage('done')
      setTimeout(() => setVisible(false), 100)
      return
    }

    // Step 1 (300ms): text -> opacity 0.6, scale 1.05
    setStage('dim')
    await new Promise((r) => setTimeout(r, 300))

    // Step 2 (750ms): overlay scale to 18, blur background via CSS var + add vignette
    // Also speed up stars and spawn comet
    setSpawnComet(true)
    setStarSpeed(3)
    setStage('zoom')
    await new Promise((r) => setTimeout(r, 750))

    // Done -> reveal landing with smooth fade-out
    setStage('done')
    setVisible(false)
  }, [prefersReducedMotion])

  const onFancyEnter = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const w = window.innerWidth
    const h = window.innerHeight
    const max = Math.hypot(Math.max(x, w - x), Math.max(y, h - y))
    setRipple({ active: true, x, y, max })
    setTimeout(() => {
      handleEnter()
    }, 850)
  }, [handleEnter])

  // Accessibility support
  const describedById = 'intro-overlay-desc'

  return (
    <AnimatePresence onExitComplete={onFinished}>
      {visible && (
        <motion.div
          ref={containerRef}
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={
            {
              // Starfield speed variable
              ['--star-speed' as any]: starSpeed,
            } as React.CSSProperties
          }
          aria-label="Intro overlay"
          aria-describedby={describedById}
          className="fixed inset-0 z-[999] overflow-hidden bg-white isolate"
        >
        {/* Radial invert overlay using mix-blend-difference */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1200] bg-white"
          style={{
            mixBlendMode: 'difference' as any,
            ['--cx' as any]: `${ripple.x}px`,
            ['--cy' as any]: `${ripple.y}px`,
            clipPath: 'circle(var(--r, 0px) at var(--cx, 0px) var(--cy, 0px))',
          } as React.CSSProperties}
          initial={false}
          animate={{ ['--r' as any]: ripple.active ? `${ripple.max}px` : '0px' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        {/* Minimal vignette for white background */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: stage === 'zoom' ? 0.25 : 0.1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.08) 100%)',
          }}
        />

        {/* Vignette layer, intensifies during zoom */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0.25 }}
          animate={{ opacity: stage === 'zoom' ? 0.6 : 0.25 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Main content wrapper that scales on zoom */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{
            scale: stage === 'zoom' ? 18 : 1,
            filter: stage === 'zoom' ? 'blur(12px)' : 'none',
          }}
          transition={{ duration: stage === 'zoom' ? 0.75 : 0.3, ease: 'easeInOut' }}
          className="h-full w-full relative flex items-center "
        >
          <div className="px-6 text-center relative flex flex-col h-full w-full items-center justify-center">
            {/* H1: ENGINEER */}
            <motion.h1
              initial={false}
              animate={{ opacity: stage === 'dim' ? 0.6 : 1, scale: stage === 'dim' ? 1.05 : 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="font-space-grotesk font-extrabold text-neutral-900"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              {lineIndex === 0 ? displayed : 'ENGINEER - 25'}
              {lineIndex === 0 && <span className="ml-1 animate-pulse">▌</span>}
            </motion.h1>

            {/* H2: NITK */}
            <div className="mt-2">
              <h2
                className="font-space-grotesk font-semibold text-neutral-700"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
              >
                {lineIndex === 1 ? displayed : lineIndex > 1 ? 'NITK' : ''}
                {lineIndex === 1 && <span className="ml-1 animate-pulse">▌</span>}
              </h2>
            </div>


  <motion.img
        src={"images/logo.png"}
        alt={"logo"}
        style={{
          width: "min(40vw, 400px)",
          height: "auto",
          filter: "drop-shadow(0 0 65px rgba(15,52,96,1))",
          margin: "40px 0"
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={logoControls}
      />

            {/* Enter CTA */}
            <AnimatePresence>
              {done && stage !== 'zoom' && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="mt-10 flex justify-center"
                >
                  <MotionButton
                    aria-label="Enter the quantum realm"
                    onClick={onFancyEnter}
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-4 text-lg border-neutral-300 bg-white text-neutral-900 shadow-[0_0_20px_rgba(0,0,0,0.08)] hover:shadow-[0_0_40px_rgba(0,0,0,0.18)] hover:scale-[1.03] transition-transform"
                  >
                    ENTER THE QUANTUM REALM
                  </MotionButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Comet */}
        <AnimatePresence>
          {spawnComet && (
            <motion.div
              key="comet"
              initial={{ x: '-10%', y: '10%', opacity: 0 }}
              animate={{ x: '110%', y: '-10%', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="pointer-events-none absolute h-0.5 w-52 rotate-[-25deg]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0) 100%)',
                filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.7))',
              }}
            />)
          }
        </AnimatePresence>

        {/* Visually hidden description for screen readers */}
        <span id={describedById} className="sr-only">
          Intro animation. Press Escape to skip.
        </span>

        {/* No extra keyframes needed for white overlay */}
        </motion.div>
      )}
    </AnimatePresence>
  )
}