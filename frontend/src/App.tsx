import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconHome, IconInfoCircle, IconUsers, IconBuildingSkyscraper, IconCalendarEvent, IconPennantFilled } from '@tabler/icons-react'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen flex flex-col text-cosmic-dust overflow-hidden">

      <div className="fixed top-1/2 right-8 z-50 hidden md:flex flex-col items-center pointer-events-auto -translate-y-1/2">
        <FloatingDock
          items={[
            { title: 'Home', icon: <IconHome className="text-white" />, href: '/' },
            { title: 'About', icon: <IconInfoCircle className="text-white" />, href: '/about' },
            { title: 'Events', icon: <IconPennantFilled className="text-white" />, href: '/events' },
            { title: 'Schedule', icon: <IconCalendarEvent className="text-white" />, href: '/schedule' },
            { title: 'Team', icon: <IconUsers className="text-white" />, href: '/team' },
            { title: 'Sponsors', icon: <IconBuildingSkyscraper className="text-white" />, href: '/sponsors' },
          ]}
          desktopClassName="pointer-events-auto"
        />
      </div>

      {/* Floating Dock - For Mobile Interface */}
      <div className="fixed top-0 left-1/2 z-50 flex md:hidden -translate-x-1/2 w-full px-3 py-2 pointer-events-none">
        <div className="mx-auto w-full max-w-[calc(100vw-24px)] overflow-hidden pointer-events-auto">
          <FloatingDock
            items={[
              { title: 'Home', icon: <IconHome className="text-white" />, href: '/' },
              { title: 'About', icon: <IconInfoCircle className="text-white" />, href: '/about' },
              { title: 'Events', icon: <IconPennantFilled className="text-white" />, href: '/events' },
              { title: 'Schedule', icon: <IconCalendarEvent className="text-white" />, href: '/schedule' },
              { title: 'Team', icon: <IconUsers className="text-white" />, href: '/team' },
              { title: 'Sponsors', icon: <IconBuildingSkyscraper className="text-white" />, href: '/sponsors' },
            ]}
            desktopClassName="flex flex-row justify-center items-center gap-3"
            mobileClassName="!rounded-none !backdrop-blur-none !border-none !shadow-none"
          />
        </div>
      </div>


      {/* Main Content */}
      <main className="flex-1 pt-24 md:pt-28">
        <Outlet />
      </main>

      {/* Footer (hide on homepage) */}
      {location.pathname !== '/' && <Footer />}

    </div>
  );

}
