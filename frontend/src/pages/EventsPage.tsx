import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function EventsPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-white/80 text-xl mt-4 max-w-2xl mx-auto">
            Discover the exciting world of technology, innovation, and engineering excellence at Engineer '25
          </p>
        </motion.div>
        
        {/* Enhanced Events Grid - with images instead of color bands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Major Events */}
          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/robowars.png" 
                alt="Robowars" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Robowars</CardTitle>
              <CardDescription className="text-white/80">15kg Wireless Category</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                Enter the electrifying world of Robowars, one of South India's most thrilling showcases of robotic combat. 
                This high-stakes competition draws top engineering talent from across the country, each team armed with 
                custom-built, remote-controlled machines designed for battle.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/hackathon.png" 
                alt="Hackathon" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Hackathon</CardTitle>
              <CardDescription className="text-white/80">24-Hour Innovation Sprint</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                A 24-hour innovation sprint that brings together brilliant minds to solve real-world challenges. 
                Focused on themes like sustainability, social good, and tech for change, it serves as a platform 
                for creative problem-solving and impactful engineering.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/robowars.png" 
                alt="Robocon Bot Expo" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Robocon Bot Expo</CardTitle>
              <CardDescription className="text-white/80">Robotic Innovation Showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                The NITK Robocon Team presents a striking display of robotic innovation and technical mastery. 
                With machines designed to solve real-world problems and perform complex tasks, the exhibit 
                showcases the team's expertise in mechanical design, electronics, and programming.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/bulb.png" 
                alt="Tech Mela" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Tech Mela</CardTitle>
              <CardDescription className="text-white/80">Innovation Celebration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                A dynamic celebration of innovation, bringing together the finest projects from NITK's leading tech clubs, 
                racing teams like Robocon and Baja, and departments such as CSD. From robotics and AI to app development 
                and smart systems, witness the cutting-edge ideas shaping tomorrow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/ather.png" 
                alt="Racing Cars" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Racing Cars</CardTitle>
              <CardDescription className="text-white/80">Formula Bharat 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                NITK Racing, a passionate and skilled group of students, marks a significant milestone as they gear up 
                to unveil their latest electric race car. This cutting-edge machine is a testament to the team's 
                relentless dedication and engineering excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/ather.png" 
                alt="Baja NITK" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Baja NITK</CardTitle>
              <CardDescription className="text-white/80">Off-Road Racing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                Feast your eyes on the rugged, high-performance off-road vehicles crafted by the Baja NITK Racing team. 
                Discover the cutting-edge technology, precise engineering, and exceptional craftsmanship behind these 
                powerful racing buggies built to conquer any terrain.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/pc.png" 
                alt="ENGI Talks" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">ENGI Talks</CardTitle>
              <CardDescription className="text-white/80">Industry Expert Sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                A space where ideas soar and knowledge flows freely. Join us for a series of inspiring talks featuring 
                industry experts, top scientists, and pioneering researchers right here at NITK. Explore robotics with 
                an AI expert or learn about the future of sustainable energy from a climate scientist.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/engineer.png" 
                alt="Workshops" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Workshops</CardTitle>
              <CardDescription className="text-white/80">Hands-on Learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                Gain hands-on experience and sharpen your skills through a diverse lineup of workshops led by industry experts, 
                acclaimed NITK professors, and passionate student clubs. Whether you want to code alongside professionals, 
                build robots with expert guidance, or explore fields like sustainable technology, web development, 
                machine learning, 3D printing, and more, there's something for everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <img 
                src="/images/engineer2.png" 
                alt="Other Events" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <CardHeader>
              <CardTitle className="text-white text-xl">Other Events</CardTitle>
              <CardDescription className="text-white/80">Line Tracker, Bot Race, Wright Flight</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/95 text-sm leading-relaxed">
                Additional exciting events including Line Tracker Bot Race, Wright Flight, Robo Racing, Tech/Space Quizzers, 
                Robo Soccer, Drone Race, Open House Labs, and Beach Event. Each event offers unique challenges and 
                opportunities to showcase your skills.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
