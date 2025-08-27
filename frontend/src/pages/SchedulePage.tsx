import { motion } from 'framer-motion'
import { Timeline } from '@/components/ui/timeline'

export default function SchedulePage() {
  const scheduleData = [
    {
      title: 'ENGI DAY 0 — September 26',
      content: (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg text-neutral-800 dark:text-neutral-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Orientation & Pre‑events</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Day 0</span>
          </div>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            Kickoff, registrations, and fun ice‑breaker activities. Get your badges and settle in.
          </p>
        </div>
      )
    },
    {
      title: 'ENGI DAY 1 — September 27',
      content: (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg text-neutral-800 dark:text-neutral-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Talks • Workshops • Rounds</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Day 1</span>
          </div>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            Hands‑on sessions, lightning talks, and multiple technical rounds.
          </p>
        </div>
      )
    },
    {
      title: 'ENGI DAY 2 — September 28',
      content: (
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg text-neutral-800 dark:text-neutral-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Finals • Showcase • Closing</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">Day 2</span>
          </div>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            Final rounds, demos, and the closing ceremony with awards.
          </p>
        </div>
      )
    }
  ]
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-semibold text-white">Schedule</h1>
      <Timeline
        data={scheduleData}
        headerTitle="Event Timeline"
        headerDescription="A clean, minimal timeline in black, white, and glass."
      />
    </motion.div>
  )
}
