import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
      />
      
      {/* Enhanced Gradient Overlay - removed purple */}
      <div className="fixed inset-0 -z-5 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-indigo-900/50" />
      
      {/* Floating particles effect - blue theme only */}
      <div className="fixed inset-0 -z-1 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
      </div>
      
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About ENGINEER '25
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/95 text-lg leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          <p className="mb-6 text-xl">
            Just 18 kilometers north of Mangalore, nestled along the Arabian Sea, lies the National Institute
            of Technology Karnataka (NITK), Surathkal — one of India's premier engineering institutions.
          </p>
          <p className="mb-6 text-xl">
            Driven by its motto, <span className="font-bold italic text-yellow-300">"Work is Worship,"</span> NITK is where innovation meets inspiration.
          </p>
          <p className="mb-6 text-xl">
            Every October, the campus transforms during Engineer, one of India's largest and most
            dynamic technical festivals. Since 2005, Engineer has grown into a four-day celebration of
            technology and creativity, drawing over 6,000 participants from 150 colleges across 65 countries.
          </p>
          <p className="mb-6 text-xl">
            From coding marathons, robotics showdowns, and RC car races to immersive
            workshops and branch-specific competitions, the fest is a haven for tech enthusiasts. At night,
            Technites lights up the campus with futuristic displays and hands-on exhibits.
          </p>
          <p className="text-xl">
            Engineer also stands out for its heart — through initiatives like Socially Conscious Engineering
            (SCE), Media it promotes sustainability and social impact. With past collaborators like CERN, MIT
            Lab, and Bell Labs, Engineer is more than a fest — it's a global stage for innovation.
          </p>
        </motion.div>

        {/* Enhanced Cards Grid - removed icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-8 md:grid-cols-2"
        >
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Our Location</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                NITK Surathkal, Karnataka
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-center text-lg">
                Located 18km north of Mangalore along the Arabian Sea, NITK Surathkal is one of India's premier engineering institutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Our Legacy</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Since 2005
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-center text-lg">
                Engineer has grown into a four-day celebration of technology and creativity, drawing over 6,000 participants from 150 colleges across 65 countries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Our Collaborators</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Global Partnerships
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-center text-lg">
                Past collaborators include CERN, MIT Lab, and Bell Labs, making Engineer a global stage for innovation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Our Impact</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Socially Conscious Engineering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-center text-lg">
                Through initiatives like SCE and Media, Engineer promotes sustainability and social impact alongside technological innovation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
