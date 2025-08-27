"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

interface Point {
  title: string
  desc: string
}

interface FloatingSectionProps {
  points: Point[]
  delayStep?: number
}

export default function FloatingSection({
  points,
  delayStep = 0.3,
}: FloatingSectionProps) {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-16">
      {points.map((point, idx) => (
        <motion.div
          key={idx}
          className={clsx(
            "relative max-w-xs rounded-2xl",
            "border border-white/10 bg-white/5 backdrop-blur-md",
            "shadow-lg hover:shadow-white/10 transition-shadow duration-500"
          )}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * delayStep,
          }}
        >
       
          <div className={clsx("rounded-2xl p-6 h-full w-full")}> 
            <h3 className="text-2xl font-bold text-white mb-2">
              {point.title}
            </h3>
            <p className="text-sm text-gray-200 opacity-90">
              {point.desc}
            </p>
          
          </div>
        </motion.div>
      ))}
    </section>
  )
}
