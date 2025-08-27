import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-semibold text-white">About ENGINEER</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quantum Rift Vision</CardTitle>
            <CardDescription>
              A journey across stars, galaxies, and time — crafted for a next‑generation fest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            ENGINEER is NITK’s annual technical symposium. We merge immersive visuals, interactive
            storytelling, and world‑class technology to celebrate innovation.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
            <CardDescription>Innovation, collaboration, and celebration.</CardDescription>
          </CardHeader>
          <CardContent>
            Talks, workshops, competitions, and showcases — all in one place.
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
