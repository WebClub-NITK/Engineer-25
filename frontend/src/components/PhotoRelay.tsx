"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ImageData {
  id: number
  src: string
  title: string
}

const images: ImageData[] = [
  { id: 1, src: "/images/devfolio.png", title: "Devfolio"},
  { id: 2, src: "/images/cisco.png", title: "Cisco"},
  { id: 3, src: "/images/unacademy.png", title: "Unacademy"},
  { id: 4, src: "/images/icici.png", title: "ICICI Bank"},
  { id: 5, src: "/images/dell.png", title: "Dell" },
  { id: 6, src: "/images/ather.png", title: "Ather"},
  { id: 7, src: "/images/unstop.png", title: "Unstop"},
  { id: 8, src: "/images/decathlon.png", title: "Decathlon"},
  { id: 9, src: "/images/bosch.png", title: "Bosch"},

]

export default function HorizontalImageGallery() {
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imagesContainer = imagesRef.current
    if (!imagesContainer) return

    const totalWidth = imagesContainer.scrollWidth / 2 


      gsap.to(imagesContainer, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), 
        },
      })
  }, [])

  const loopImages = [...images, ...images]

 return (
  <div className="relative w-full overflow-hidden bg-transparent py-10">
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
      src={image.src || ""}
      alt={image.title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
  <h3
    className="
      text-white font-semibold text-3d-light
      text-base sm:text-lg md:text-xl
      text-center mt-4 truncate
      w-24 sm:w-32 md:w-44 lg:w-56
    "
  >
    {image.title}
  </h3>
</div>


      ))}
    </div>
  </div>
)

}
