import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-semibold text-white">Events</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Workshops</CardTitle>
            <CardDescription>Hands‑on learning with experts.</CardDescription>
          </CardHeader>
          <CardContent>
            Explore AI, robotics, web, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Competitions</CardTitle>
            <CardDescription>Challenge your limits.</CardDescription>
          </CardHeader>
          <CardContent>
            Hackathons, design sprints, and mech wars.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Talks</CardTitle>
            <CardDescription>Keynotes and lightning sessions.</CardDescription>
          </CardHeader>
          <CardContent>
            Hear from industry leaders and alumni builders.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Showcase</CardTitle>
            <CardDescription>Projects and demo day.</CardDescription>
          </CardHeader>
          <CardContent>
            Display your work and get feedback from mentors.
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
