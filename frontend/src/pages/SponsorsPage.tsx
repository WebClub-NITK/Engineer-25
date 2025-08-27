import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SponsorsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="p-6 space-y-6"
    >
      <h1 className="text-3xl font-semibold text-white">Sponsors</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Partners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/1] rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-cosmic-dust">
                Sponsor {i + 1}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
