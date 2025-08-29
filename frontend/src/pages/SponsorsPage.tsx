import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function SponsorsPage() {
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
        className="p-6 space-y-8 relative z-10 max-w-7xl mx-auto"
      >
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent text-3d-strong">
            Sponsors
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/95 text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto"
        >
          <p className="mb-4 text-xl">
            Engineer '25 is proud to have the support of industry leaders and organizations who share our vision 
            of fostering innovation and technological excellence.
          </p>
          <p className="text-xl">
            Our sponsors play a crucial role in making this four-day celebration of technology and creativity possible, 
            enabling us to provide world-class experiences to over 6,000 participants from 150 colleges across 65 countries.
          </p>
        </motion.div>

        {/* Enhanced Legacy Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-2">Our Legacy Sponsors</CardTitle>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 mb-8 text-center text-lg">
                We thank our past sponsors for their invaluable support and collaboration in making Engineer 
                one of India's largest and most dynamic technical festivals.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="aspect-[3/1] rounded-xl border border-white/30 bg-white/20 flex items-center justify-center text-white/90 text-sm font-medium hover:bg-white/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg">
                    Legacy Sponsor {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Global Collaborators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-2">Global Collaborators</CardTitle>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 mb-8 text-center text-lg">
                Engineer has had the privilege of collaborating with prestigious institutions and organizations worldwide:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="font-bold text-white text-xl mb-3">CERN</h3>
                  <p className="text-white/80 text-base">European Organization for Nuclear Research</p>
                  <div className="mt-3 w-8 h-1 bg-blue-400 mx-auto rounded-full"></div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="font-bold text-white text-xl mb-3">MIT Lab</h3>
                  <p className="text-white/80 text-base">Massachusetts Institute of Technology</p>
                  <div className="mt-3 w-8 h-1 bg-blue-400 mx-auto rounded-full"></div>
                </div>
                <div className="text-center p-6 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <h3 className="font-bold text-white text-xl mb-3">Bell Labs</h3>
                  <p className="text-white/80 text-base">Nokia Bell Laboratories</p>
                  <div className="mt-3 w-8 h-1 bg-blue-400 mx-auto rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Become a Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-2">Become a Sponsor</CardTitle>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 mb-6 text-center text-lg">
                Join us in fostering the next generation of innovators and engineers. Your support helps us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-white/90 space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Provide world-class workshop experiences</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Host cutting-edge competitions and events</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Bring industry experts and thought leaders</span>
                  </li>
                </ul>
                <ul className="text-white/90 space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Create opportunities for students across India and the world</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Promote sustainability and social impact through technology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Build lasting partnerships in innovation</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
