
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
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
}


export default function Main() {
  const smoothWrapperRef = useRef<HTMLDivElement>(null)
  const smoothContentRef = useRef<HTMLDivElement>(null)
  const [introVisible, setIntroVisible] = useState(true)

  const smootherRef = useRef<ReturnType<typeof ScrollSmoother.create> | null>(null)

  const speakers = [
    {
      name: "Mrutyunjay Hiremath",
      image: "/images/speakers/mrutyunjay_hiremath.png",
    },
    {
      name: "Angad Pratap",
      image: "/images/speakers/angad_pratap.png",
    },
  ]

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
          className="fixed min-h-screen inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
        />

        <motion.div
          ref={smoothContentRef}
          id="smooth-content"
          className="w-full"

        >

          <div className="h-screen flex flex-col items-center justify-center relative px-2 sm:px-4 pt-5 md:pt-5 overflow-hidden">

            <img
              src="/images/logo.png"
              alt="ENGINEER Logo"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-60 lg:h-60 mb-8 opacity-90"
            />

            <h1 className="w-full max-w-[100vw] text-center mx-auto break-words text-4xl lg:text-8xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] ">
              ENGINEER '25
            </h1>

            {!introVisible && (<div className="mt-4 w-full max-w-2xl mx-auto px-2 sm:px-0 text-base text-lg lg:text-2xl text-center text-white/90 leading-snug">  <TextGenerateEffect words="Think • Create • Engineer" duration={1} /> <TextGenerateEffect words="The Annual Technical Fest of NIT Karnataka - Where Innovation Meets Inspiration" duration={3} /> </div>)} </div>


          <div className="relative min-h-screen pb-15 flex flex-col" >
            <div className="h-[30vh] sm:h-[35vh] md:h-[40vh]" />
            <h1 data-speed="0.9" className="text-4xl sm:text-6xl md:text-8xl text-center font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] ">
              About ENGINEER 25
            </h1>

            {/* Bento Grid Section */}
            <div className="py-20" >
              <div className="px-2 sm:px-4">
                <BentoGrid>
                  <BentoGridItem
                    className="md:col-span-1 md:row-span-2 text-center overflow-hidden flex flex-col text-white items-center justify-center p-4 text-xl lg:text-3xl font-bold backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] leading-normal"

                    header={
                      <>
                        <p className="text-white">
                          Driven by its motto "Work is Worship", <br /> NITK is where innovation meets inspiration. Every October, the campus transforms into a vibrant hub of innovation and enthusiasm.
                        </p>
                      </>

                    }
                  />


                  <BentoGridItem
                    className="md:col-span-1 md:row-span-4 flex flex-col items-center justify-center backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
                    title={
                      <div className="text-2xl lg:text-5xl font-black tracking-tight bg-white bg-clip-text text-transparent select-none text-center leading-tight">
                        One of India's largest and most dynamic technical fests.
                      </div>
                    }
                    header={
                      <div className="my-10">
                        <img
                          src="/images/logo.png"
                          alt="logo"
                          className="w-32 h-32 md:w-48 md:h-48 object-cover " />
                      </div>
                    }
                  />

                  {/* Top Right*/}
                  <BentoGridItem
                    className="md:row-span-2 p-0 overflow-hidden backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
                    header={
                      <img
                        src="/images/engi1.png"
                        alt="Cover"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    }
                  />

                  {/* Left Middle Row*/}
                  <BentoGridItem
                    className="md:col-span-1 backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "
                    header={
                      <img
                        src="/images/engi2.png"
                        alt="Cover"
                        className="object-cover w-full h-full rounded-xl"
                      />
                    }
                  />

                  <BentoGridItem
                    className="md:col-span-1 md:row-span-2 text-center flex flex-col text-white items-center justify-center p-6 text-xl lg:text-3xl  font-bold backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] leading-normal"
                    header={
                      <>


                        <p >
                          Since 2005,<br />
                          Engineer has grown into a four-day celebration of
                          technology and
                          creativity attracting:
                        </p>
                        <ul className="space-y-1">
                          <li><strong>6,000+</strong> participants</li>
                          <li><strong>150</strong> colleges</li>
                          <li><strong>65</strong> countries</li>
                        </ul>


                      </>
                    }
                  />

                  {/* Bottom Left */}
                  <BentoGridItem
                    className="p-6 flex flex-col items-center justify-center font-bold text-2xl backdrop-blur-3xl border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] "

                    header={
                      <img
                        src="/images/proshows.png"
                        alt="Cover"
                        className="p-0 m-0 object-cover w-full h-full rounded-xl"
                      />
                    }
                  />
                </BentoGrid>

              </div>
            </div>

          </div>

          <div className="relative min-h-screen pb-24 flex flex-col text-white" >

            <div className="h-[30vh] sm:h-[35vh] md:h-[40vh]" />
            <h1 data-speed="0.9" className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]  text-center">
              Schedule
            </h1>
            <Timeline
              data={[
                {
                  title: "ENGI DAY 0",
                  content: (
                    <div className="rounded-xl bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm tracking-wide text-white font-bold">Inauguration & Pre‑events</span>
                        <span className="text-xs text-white ">Day 0</span>
                      </div>
                      <p className="text-sm md:text-base text-white">
                        Genesis Dance, Laser Show, Movie Screening
                      </p>
                    </div>
                  ),
                },
                {
                  title: "ENGI DAY 1",
                  content: (
                    <div className="rounded-xl bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm tracking-wide text-white font-bold">Workshops • Hackathons • Quizzes • Fun Events </span>
                        <span className="text-xs text-white">Day 1</span>
                      </div>
                      <p className="text-sm md:text-base text-white">
                        Avishkar, Techgyan Workshop, Sim2Real & Software Hackathons, Robowars, MC Night, Astro Quiz, IPL Auction and many more!
                      </p>
                    </div>
                  ),
                },
                {
                  title: "ENGI DAY 2",
                  content: (
                    <div className="rounded-xl  bg-white/5 border-1 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg text-white ">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm tracking-wide text-white font-bold">Competitions • Showcase • Engi Talks </span>
                        <span className="text-xs text-white">Day 2</span>
                      </div>
                      <p className="text-sm md:text-base text-white">
                        Auto Expo, Egg Drop Challenge, VR Event, Project Expo, Beach Event, Pro Show and many more!
                      </p>
                    </div>
                  ),
                },
              ]
              }
            />
            <div className="text-center">
              <Button
                className="rounded-xl  bg-white/8 border-3 border-[#5054CC] shadow-[0_0_20px_2px_rgba(127,95,255,0.33)] backdrop-blur-3xl p-6 shadow-lg my-5 text-xl text-white font-bold"  >
                <a
                  href="events.pdf"
                  download="Engineer_Events_List"
                >
                  Download Full Event Schedule
                </a>
              </Button>

            </div>

            <h1 className="text-xl sm:text-xl md:text-3xl font-bold text-white text-center">
              Or check <a href="/schedule" className="underline hover:text-blue-400">here</a>
            </h1>
          </div>




          {/* Get Ready for What's Next */}
          <div className="py-12" >
            <h1 className="text-3xl sm:text-5xl md:text-7xl my-5 font-extrabold text-white text-3d-strong text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] ">
              <span className="relative inline-block">
                Get Ready for What's Next
                <span className="absolute inset-0 rounded-full blur-3xl bg-white/5 animate-pulse"></span>
              </span>
            </h1>
            <div className="px-2 sm:px-4">
              <Carousel />
            </div>


          </div>

          <h1 className="text-xl sm:text-xl md:text-3xl font-bold text-white text-center mt-20">
            More details about events can be found <a href="/events" className="underline hover:text-blue-400">here</a>
          </h1>

          <div className="py-12">
            <h1 className="text-3xl sm:text-5xl md:text-7xl my-5 font-extrabold text-white text-3d-strong text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              <span className="relative inline-block">
                Our Speakers
                <span className="absolute inset-0 rounded-full blur-3xl bg-white/5 animate-pulse"></span>
              </span>
            </h1>

            <div className="px-2 sm:px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-4 flex flex-col items-center text-center shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all h-[28rem] border-2 mx-5"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-90 object-fill rounded-xl mb-4"
                  />
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-auto">{speaker.name}</h2>
                </div>
              ))}
            </div>


          </div>




          <div className="px-2 sm:px-4 md:px-8 my-35" >
            <h2 className="text-3xl sm:text-5xl md:text-6xl my-6 font-extrabold text-white text-3d-strong text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] ">
              Sponsors
            </h2>
            <PhotoRelay images={
              [{ id: 1, src: "/images/logos/devfolio.png", title: "Devfolio" },
              { id: 2, src: "/images/logos/cisco.png", title: "Cisco" },
              { id: 3, src: "/images/logos/unacademy.png", title: "Unacademy" },
              { id: 4, src: "/images/logos/icici.png", title: "ICICI Bank" },
              { id: 5, src: "/images/logos/dell.png", title: "Dell" },
              { id: 6, src: "/images/logos/ather.png", title: "Ather" },
              { id: 7, src: "/images/logos/unstop.png", title: "Unstop" },
              { id: 8, src: "/images/logos/decathlon.png", title: "Decathlon" },
              { id: 9, src: "/images/logos/bosch.png", title: "Bosch" },]
            } direction="left" speed={30} />
          </div>
          <Footer />

        </motion.div>
      </div>
    </div>
  )
}


