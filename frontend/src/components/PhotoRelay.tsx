"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export interface ImageData {
  id: number
  src: string
  title: string
}

interface PhotoRelayProps {
  images: ImageData[]
  direction?: "left" | "right"
  speed?: number
}

export default function PhotoRelay({ images, direction = "left", speed = 30 }: PhotoRelayProps) {
  const imagesRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const imagesContainer = imagesRef.current
  if (!imagesContainer) return

  const totalWidth = imagesContainer.scrollWidth / 2

  gsap.to(imagesContainer, {
    x: direction === "left" ? -totalWidth : totalWidth, // target
    duration: speed,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(
        gsap.utils.wrap(-totalWidth, 0) // always wrap between -totalWidth and 0
      ),
    },
  })
}, [direction, speed, images])



  const loopImages = [...images, ...images]

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-8">
      <div ref={imagesRef} className="flex gap-8 px-20">
        {loopImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex flex-col items-center flex-shrink-0 group"
          >
            <div className="
              relative
              w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56
              rounded-full overflow-hidden
              transition-transform duration-300 hover:scale-105
              mb-2
            ">
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl text-center mt-4 truncate w-24 sm:w-32 md:w-44 lg:w-56">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
