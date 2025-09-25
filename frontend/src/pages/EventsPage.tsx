"use client"

import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    title: "Wright Flight",
    description: "Step into the world of aerodynamics by designing and flying model aircrafts. Compete to see whose creation flies the farthest and most stable, blending engineering with creativity.",
    image: "/images/wright_flight.png",
    link: "https://unstop.com/p/wright-flight-2025-nitk-surathkal-1548939?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Events",
  },
  {
    title: "Sim2Real",
    description: "Take robotics from simulation to the real world in this exciting challenge. Teams will design and test models virtually before bringing them alive with hardware integration.",
    image: "/images/workshops.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSezs5dwiuVsocsU8yH_jhkA-Sw8ShfFawCqfxPfKEfTgKSlmQ/viewform",
  },
  {
    title: "Fox Hunt",
    description: "A thrilling scavenger hunt with a tech twist! Participants solve riddles, decode circuits, and follow digital breadcrumbs to track down the elusive ‘fox.’",
    image: "/images/fox_hunt.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSev1mQ4qGyiS2z1mjx595e5f6YRnc510VYdi-qL7r-IVqQ_Bg/viewform",
  },
  {
    title: "Civil Saga",
    description: "A civil engineering showdown where creativity meets structural strength. Participants design, build, and test models that stand tall against real-world challenges.",
    image: "/images/civil_saga.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSciNJajUThxJQkApjH32PXgd1o6CL01obc_ktDBWz3yVOh_iA/viewform",
  },
  {
    title: "Lazer Show",
    description: "An electrifying spectacle of light and sound! Watch beams of laser sync with music to create a mesmerizing show that dazzles the crowd.",
    image: "/images/lazer_show.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfccC-4KtuXSRJLXFIClwXVfY6pG5pKQdU3DnmnW6lpZUFg4w/viewform",
  },
  {
    title: "Trade off",
    description: "A strategy-based event where participants make tough decisions balancing cost, time, and resources. Simulate real-world trade-offs and prove your managerial skills.",
    image: "/images/tradeoff.jpeg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf61Kl-hjTS_eT3yJ1dGU_cGgeD6dPekog61ypdsOtZQZRKsw/viewform",
  },
  {
    title: "Tech It Eazy Quiz",
    description: "Test your knowledge in technology, science, and problem-solving. A quiz designed to challenge quick thinking and depth of understanding in the tech world.",
    image: "/images/tech_quiz.jpeg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe8vlpVWuN0qj8gvdEcM-1pTbEndkI-shiazSCi_F3hWZCGyA/viewform",
  },
  {
    title: "IPL Auction",
    description: "Experience the thrill of an IPL-style auction where you manage virtual budgets, bid for players, and build the ultimate dream team. Strategy and cricket knowledge collide!",
    image: "/images/ipl_auction.jpeg",
    link: "https://unstop.com/p/stump-the-bids-engineer-nitk-nitk-surathkal-1561207?lb=sx5BFWGC",
  },
  {
    title: "Robowars",
    description: "Witness robots battle it out in a high-octane arena of sparks and strategy. Teams design, arm, and control their bots in the quest for mechanical dominance.",
    image: "/images/robowars.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScFNGDPrVZtpRnf2btffAm8naynRVc6L-dguFUlymTiQe2Q5w/viewform",
  },
  {
    title: "Drone Racing",
    description: "High-speed drones zip through obstacle-filled tracks in this adrenaline-pumping event. Precision, reflexes, and control will decide the champion pilot.",
    image: "/images/drone_race.png",
    link: "https://docs.google.com/forms/d/1-P530RAnbPWXwNJwWuB_Rf3wSjTpw5Cka8Lqg8O9d-U/viewform?edit_requested=true",
  },
  {
    title: "Line Follower Bot",
    description: "Build a robot that flawlessly follows a marked path with speed and accuracy. A test of smart circuitry, programming, and mechanical design.",
    image: "/images/line_tracker_bot_race.png",
    link: "https://docs.google.com/forms/d/1HvM6Cie0rljlnElZdlmRBOihv9xLuKeUB3o--2ZdfTs/viewform?edit_requested=true",
  },
  {
    title: "APD",
    description: "An intense debate and public speaking contest where wit, articulation, and reasoning are your strongest weapons. Persuade, counter, and dominate the stage.",
    image: "/images/apd.png",
    link: "https://docs.google.com/forms/d/1_86YTwvJVV6K-7RhDpi4JewOSz-tmk3Vkqjpgc9dTEM/viewform?edit_requested=true",
  },
  {
    title: "Software Hackathon",
    description: "A coding marathon to build innovative software solutions. Collaborate, brainstorm, and pitch projects that can make a real-world impact within limited time.",
    image: "/images/hackathon.png",
    link: "https://unstop.com/p/chronoforge-engineer-nitk-nitk-surathkal-1559746?lb=nIF4Y2vL&utm_medium=Share&utm_source=cipher_ietnitk&utm_campaign=Innovation_challenge",
  },
  {
    title: "Mechanical Modelling",
    description: "Bring engineering concepts to life by designing mechanical models. Precision, creativity, and presentation skills are tested in this technical event.",
    image: "/images/mechanical_modelling.jpeg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfC7Q9P634hEvvjZvpjES01IwWWJL_GXoR4gxs9fmidCuoCgw/viewform",
  }
]

export default function EventsPage() {
  return (
    <div className="relative min-h-screen">

      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-6 space-y-8 relative z-10 max-w-7xl mx-auto"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Events
          </h1>
          <p className="text-white/80 text-xl mt-4 max-w-2xl mx-auto">
            Discover the exciting world of technology, innovation, and
            engineering excellence at Engineer '25
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event, idx) => (
            <Dialog key={idx}>
              <DialogTrigger asChild>

                <div className="relative h-56 cursor-pointer rounded-2xl overflow-hidden group shadow-lg border-t border-white/10 hover:shadow-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <CardHeader className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <CardTitle className="text-white text-2xl font-bold drop-shadow">
                      {event.title}
                    </CardTitle>
                    <Button
                      variant="secondary"
                      className="mt-4 bg-white text-black cursor-pointer "
                    >
                      Learn More
                    </Button>
                  </CardHeader>
                </div>
              </DialogTrigger>


              <DialogContent className="lg:max-w-lg border-0 max-w-sm bg-[#2E2E59]">
                <div className="bg-[#2E2E59] backdrop-blur-md p-6 rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                      {event.title}
                    </DialogTitle>
                    <DialogDescription className="text-white/80 mt-3 leading-relaxed">
                      {event.description || "No description available."}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6" />

                  <DialogFooter>
                    <Button
                      asChild
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg p-5 transition-all"
                    >
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register
                      </a>
                    </Button>
                  </DialogFooter>
                </div>
              </DialogContent>

            </Dialog>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-xl sm:text-xl md:text-3xl font-bold text-white text-center">
            For more details, visit our <a href="https://www.instagram.com/engineernitk/?hl=en" target="_blank" className="underline hover:text-blue-400">Instagram handle</a> !
          </h1>
        </motion.div>
      </motion.div>
    </div>
  )
}
