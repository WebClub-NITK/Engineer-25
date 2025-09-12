import { motion } from 'framer-motion'
import { Timeline } from '@/components/ui/timeline'

export default function SchedulePage() {
  const scheduleData = [
    {
      title: 'ENGI DAY 0 — October 2025',
      content: (
        <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-md p-8 shadow-2xl text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg tracking-wide text-white font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Orientation & Pre‑events</span>
            <span className="text-sm text-white/80 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">Day 0</span>
          </div>
          <p className="text-base text-white/95 leading-relaxed">
            Kickoff, registrations, and fun ice‑breaker activities. Get your badges and settle in for the four-day celebration of technology and creativity.
          </p>
          <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Registration & Check-in</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Welcome Session</span>
          </div>
        </div>
      )
    },
    {
      title: 'ENGI DAY 1 — October 2025',
      content: (
        <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-md p-8 shadow-2xl text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg tracking-wide text-white font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Workshops • Talks • Learning</span>
            <span className="text-sm text-white/80 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">Day 1</span>
          </div>
          <p className="text-base text-white/95 leading-relaxed">
            Hands‑on sessions, lightning talks, and multiple technical rounds. Experience workshops led by industry experts, acclaimed NITK professors, and passionate student clubs.
          </p>
          <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Technical Workshops</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Expert Keynotes</span>
          </div>
        </div>
      )
    },
    {
      title: 'ENGI DAY 2 — October 2025',
      content: (
        <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-md p-8 shadow-2xl text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg tracking-wide text-white font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Competitions • Showcase</span>
            <span className="text-sm text-white/80 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">Day 2</span>
          </div>
          <p className="text-base text-white/95 leading-relaxed">
            Major competitions including Robowars, Hackathon, Bot Expo, and Tech Mela. Witness cutting-edge robotics, innovative solutions, and breakthrough projects.
          </p>
          <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Robowars Finals</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Hackathon Presentations</span>
          </div>
        </div>
      )
    },
    {
      title: 'ENGI DAY 3 — October 2025',
      content: (
        <div className="rounded-xl border border-white/20 bg-white/15 backdrop-blur-md p-8 shadow-2xl text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg tracking-wide text-white font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Finals • Awards • Closing</span>
            <span className="text-sm text-white/80 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">Day 3</span>
          </div>
          <p className="text-base text-white/95 leading-relaxed">
            Final rounds, project demos, and the grand closing ceremony with awards. Celebrate innovation and recognize the brilliant minds behind groundbreaking creations.
          </p>
          <div className="mt-4 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Awards Ceremony</span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-blue-300 text-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Closing Celebrations</span>
            </div>
        </div>
      )
    }
  ]
  
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="p-6 space-y-8 relative z-10 max-w-6xl mx-auto"
      >
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Schedule
          </h1>
      
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/95 text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto"
        >
          <p className="mb-4 text-xl">
            Engineer '25 is a four-day celebration of technology and creativity, taking place every October at NITK Surathkal. 
            The event draws over 6,000 participants from 150 colleges across 65 countries.
          </p>
          <p className="text-xl">
            From coding marathons and robotics showdowns to immersive workshops and branch-specific competitions, 
            each day offers unique opportunities to learn, compete, and innovate.
          </p>
        </motion.div>
        
        {/* Enhanced Timeline - without header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Timeline
            data={scheduleData}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
