import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export default function TeamPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/main_bg.png')", opacity: 0.45 }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
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
            Team & Committees
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="text-white/90 text-lg leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          <p className="mb-4 text-xl">
            Engineer '25 is powered by passionate students from various departments who work tirelessly to create 
            an unforgettable experience. Our committees bring together brilliant minds from computer, electrical, 
            and mechanical engineering departments.
          </p>
          <p className="text-xl">
            Each committee specializes in different aspects of technology and innovation, working together to 
            push the boundaries of what's possible and bring the future to life.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/engineer.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Astro Committee</CardTitle>
                <CardDescription className="text-white/80">Space & Astronomy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    The Astro Committee brings the mysteries of the universe to life with an exciting lineup of workshops, 
                    talks, and projects. From building functional rocket models to expert-led stargazing sessions, 
                    attendees dive deep into the wonders of space and astronomy.
                  </p>
                  <p className="text-white/95 text-sm">
                    Experience cutting-edge technologies shaping space exploration, including 3D printing in microgravity 
                    and the marvels of deep space communication.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/engineer2.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Technites Committee</CardTitle>
                <CardDescription className="text-white/80">Magicians After Dark</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    Technites presents a dazzling showcase of innovation and creativity. Watch as brilliant minds from 
                    the computer, electrical, and mechanical engineering departments come together, blending code, 
                    circuits, and mechanics in stunning displays of teamwork.
                  </p>
                  <p className="text-white/95 text-sm">
                    This is where collaboration sparks innovation, and the future takes shape after dark through 
                    groundbreaking creations that captivate and inspire.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/robowars.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Tronix Committee</CardTitle>
                <CardDescription className="text-white/80">Electronics & Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    The beating heart of all things electronics and technology at NITK Surathkal. A passionate crew 
                    of tinkerers, builders, and innovators who power Engineer, the institute's iconic annual tech fest.
                  </p>
                  <p className="text-white/95 text-sm">
                    Hosts hands-on workshops in robotics, programming, and cutting-edge tech, and organizes thrilling 
                    events like Robowars, the ultimate battle of bots.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/ather.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">NITK Racing</CardTitle>
                <CardDescription className="text-white/80">Formula Bharat 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    A passionate and skilled group of students marks a significant milestone as they gear up to unveil 
                    their latest electric race car. This cutting-edge machine is a testament to the team's relentless 
                    dedication and engineering excellence.
                  </p>
                  <p className="text-white/95 text-sm">
                    Representing NITK at the prestigious Formula Bharat 2024, showcasing innovation in sustainable racing technology.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/ather.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Baja NITK Racing</CardTitle>
                <CardDescription className="text-white/80">Off-Road Excellence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    Crafting rugged, high-performance off-road vehicles that showcase cutting-edge technology, 
                    precise engineering, and exceptional craftsmanship. These powerful racing buggies are built 
                    to conquer any terrain.
                  </p>
                  <p className="text-white/95 text-sm">
                    A team dedicated to pushing the boundaries of off-road vehicle design and performance.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <Card className="relative overflow-hidden bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundImage: "url('/images/robowars.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            <div className="relative z-10">
              <CardHeader>
                <CardTitle className="text-white text-xl">Robocon Team</CardTitle>
                <CardDescription className="text-white/80">Robotic Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-white/95 text-sm">
                    The NITK Robocon Team presents striking displays of robotic innovation and technical mastery. 
                    With machines designed to solve real-world problems and perform complex tasks, they showcase 
                    expertise in mechanical design, electronics, and programming.
                  </p>
                  <p className="text-white/95 text-sm">
                    From autonomous bots to sophisticated mechatronic systems, each creation reflects months of 
                    experimentation, teamwork, and engineering precision.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
