import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconHome, IconInfoCircle, IconUsers, IconBuildingSkyscraper, IconTimeline, IconCalendarEvent } from '@tabler/icons-react'

export default function App() {
  const location = useLocation()

  return (
      <div className="relative min-h-screen flex flex-col text-cosmic-dust overflow-hidden">

   

      {/* Floating Dock */}
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <FloatingDock
          items={[
            { title: 'Home', icon: <IconHome className="text-white" />, href: '/' },
            { title: 'About', icon: <IconInfoCircle className="text-white" />, href: '/about' },
            { title: 'Events', icon: <IconCalendarEvent className="text-white" />, href: '/events' },
            { title: 'Schedule', icon: <IconTimeline className="text-white" />, href: '/schedule' },
            { title: 'Team', icon: <IconUsers className="text-white" />, href: '/team' },
            { title: 'Sponsors', icon: <IconBuildingSkyscraper className="text-white" />, href: '/sponsors' },
          ]}
          desktopClassName="max-w-[680px] pointer-events-auto"
          mobileClassName="max-w-[680px] pointer-events-auto"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-24 md:pt-28">
        <Outlet />
      </main>

      {/* Footer (hide on homepage) */}
      {location.pathname !== '/' && <Footer />}
    
    </div>
  )
}
