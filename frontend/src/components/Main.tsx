
"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import PhotoRelay from "./PhotoRelay"
import { Timeline } from "@/components/ui/timeline"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import IntroOverlay from "@/components/effects/IntroOverlay"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import Footer from "@/components/Footer"
import Carousel from "@/components/ui/carousel"
 


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}


export default function Main() {
  const smoothWrapperRef = useRef<HTMLDivElement>(null)
  const smoothContentRef = useRef<HTMLDivElement>(null)
  const [introVisible, setIntroVisible] = useState(true)
  const smootherRef = useRef<ReturnType<typeof ScrollSmoother.create> | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 2,
      effects: true,
      normalizeScroll: true,
    })
    smootherRef.current = smoother

    return () => {
      smoother?.kill()
      smootherRef.current = null
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
  
      {introVisible && (
        <IntroOverlay
          initialVisible={introVisible}
          onFinished={() => setIntroVisible(false)}
        />
      )}

      <div ref={smoothWrapperRef} id="smooth-wrapper" >
          <div
            className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/main_bg.png')",  opacity: 0.45 }}
          />

          <motion.div
            ref={smoothContentRef}
            id="smooth-content"
            className="w-full"
            initial={{ scale: 1.02, opacity: 0.7 }}
            animate={{ scale: introVisible ? 1.02 : 1, opacity: introVisible ? 0.7 : 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
          
          <div className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center relative px-2 sm:px-4 pt-10 md:pt-16">
            <h1 className="
              w-full max-w-[100vw] text-center mx-auto break-words text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
              leading-tight
            ">
              ENGINEER '25
            </h1>

            {!introVisible && (
              <div className="mt-4 w-full max-w-2xl mx-auto px-2 sm:px-0 text-base sm:text-lg md:text-2xl text-center text-white/90 leading-snug">
                <TextGenerateEffect
                  words="The Annual Technical Fest of NIT Karnataka - Where Innovation Meets Inspiration"
                  duration={3}
                />
              </div>
            )}
          </div>


          <div className="relative min-h-screen pb-15 flex flex-col" >
            <div className="h-[30vh] sm:h-[35vh] md:h-[40vh]" />
            <h1 data-speed="0.9" className="text-4xl sm:text-6xl md:text-8xl text-center font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
              About ENGINEER '25
            </h1>

          {/* Bento Grid Section */}
          <div className="py-20" >
            <div className="px-2 sm:px-4">
              <BentoGrid>
        <BentoGridItem
          className="md:row-span-2 p-0 overflow-hidden border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl"
          header={
            <img
              src="/images/engineer2.png"
              alt="Cover"
              className="object-cover w-full h-full "
            />
          }
        />


        <BentoGridItem
          className="md:col-span-1 md:row-span-4 flex flex-col items-center justify-center backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
          title={
            <div className="text-4xl md:text-5xl font-black tracking-tight bg-white bg-clip-text text-transparent select-none text-center">
              One of India's largest and most dynamic technical festivals
            </div>
          }
          header={
            <div className="mt-4">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-lg"/>
            </div>
          }
        />

        {/* Top Right*/}
        <BentoGridItem
          className="md:row-span-2 p-0 overflow-hidden backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
          header={
            <img
              src="/images/engineer.png"
              alt="Cover"
              className="object-cover w-full h-full rounded-xl"
            />
          }
        />

        {/* Left Middle*/}
        <BentoGridItem
          className="md:col-span-1 backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
          header={
            <img
              src="/images/lighthouse.png"
              alt="Cover"
              className="object-cover w-full h-full rounded-xl"
            />
          }
        />

        <BentoGridItem
          className="md:col-span-1 md:row-span-2 flex flex-col text-white items-center justify-center p-4 text-lg font-bold backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
          header={
            <>
              <p>
                Since 2005, Engineer has grown into a four-day celebration of technology and creativity, drawing over 6,000 participants from 150 colleges across 65 countries.
              </p>
            </>
          }
        />

  {/* Bottom Right*/}
  <BentoGridItem
    className="p-6 flex flex-col items-center justify-center font-bold text-lg backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
   
    header={
      <>
        <p>
          Driven by its motto "Work is Worship," NITK is where innovation meets inspiration. Every October, the campus transforms during Engineer, one of India's largest and most dynamic technical festivals.
        </p>
      </>
    }
  />
</BentoGrid>

            </div>
          </div>

          </div>

            <div className="relative min-h-screen pb-24 flex flex-col text-white" >
            
             <div className="h-[30vh] sm:h-[35vh] md:h-[40vh]" />
            <h1 data-speed="0.9" className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center">
              Schedule
            </h1>
               <Timeline
                 data={[
                   {
                     title: "ENGI DAY 0",
                     content: (
                       <div className="rounded-xl bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-sm tracking-wide text-white font-bold">Orientation & Pre‑events</span>
                           <span className="text-xs text-white ">Day 0</span>
                         </div>
                         <p className="text-sm md:text-base text-white">
                           Kickoff, registrations, and ice‑breaker activities. Get your badges and settle in for the four-day celebration.
                         </p>
                       </div>
                     ),
                   },
                   {
                     title: "ENGI DAY 1",
                     content: (
                       <div className="rounded-xl bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-sm tracking-wide text-white font-bold">Workshops • Talks • Learning</span>
                           <span className="text-xs text-white">Day 1</span>
                         </div>
                         <p className="text-sm md:text-base text-white">
                           Hands‑on workshops led by industry experts, acclaimed NITK professors, and passionate student clubs.
                         </p>
                       </div>
                     ),
                   },
                   {
                     title: "ENGI DAY 2",
                     content: (
                       <div className="rounded-xl  bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-sm tracking-wide text-white font-bold">Competitions • Showcase</span>
                           <span className="text-xs text-white">Day 2</span>
                         </div>
                         <p className="text-sm md:text-base text-white">
                           Major events including Robowars, Hackathon, Bot Expo, and Tech Mela. Witness cutting-edge innovation.
                         </p>
                       </div>
                     ),
                   },
                   {
                     title: "ENGI DAY 3",
                     content: (
                       <div className="rounded-xl  bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-sm tracking-wide text-white font-bold">Finals • Awards • Closing</span>
                           <span className="text-xs text-white">Day 3</span>
                         </div>
                         <p className="text-sm md:text-base text-white">
                           Final rounds, project demos, and the grand closing ceremony with awards and recognition.
                         </p>
                       </div>
                     ),
                   },
                 ]}
               />
          </div>

          {/* Get Ready for What's Next */}
          <div className="py-12" >
            <h1 className="text-3xl sm:text-5xl md:text-7xl my-5 font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center">
              <span className="relative inline-block">
                Get Ready for What's Next
                <span className="absolute inset-0 rounded-full blur-3xl bg-white/5 animate-pulse"></span>
              </span>
            </h1>
            <div className="px-2 sm:px-4">
              <Carousel/>
            </div>
          </div>

          <div className="px-2 sm:px-4 md:px-8 my-35" >
            <h2 className="text-3xl sm:text-5xl md:text-6xl my-6 font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center">
              Sponsors
            </h2>
            <PhotoRelay />
          </div>
          <Footer />
         
        </motion.div>
      </div>
    </div>
  )
}


