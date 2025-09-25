import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconHome, IconInfoCircle, IconUsers, IconBuildingSkyscraper, IconCalendarEvent, IconPennantFilled } from '@tabler/icons-react'

export default function App() {
  const location = useLocation()

  const dockItems = [
    { title: 'Home', icon: <IconHome className="text-white" />, href: '/' },
    { title: 'About', icon: <IconInfoCircle className="text-white" />, href: '/about' },
    { title: 'Events', icon: <IconPennantFilled className="text-white" />, href: '/events' },
    { title: 'Schedule', icon: <IconCalendarEvent className="text-white" />, href: '/schedule' },
    { title: 'Team', icon: <IconUsers className="text-white" />, href: '/team' },
    { title: 'Sponsors', icon: <IconBuildingSkyscraper className="text-white" />, href: '/sponsors' },
  ]

  return (
    <div className="relative min-h-screen flex flex-col text-cosmic-dust overflow-hidden">

      {/* Vertical Dock - For Desktop */}
      <div className="fixed top-1/2 right-8 z-50 hidden md:flex flex-col items-center pointer-events-auto -translate-y-1/2">
        <FloatingDock
          items={dockItems}
          desktopClassName="pointer-events-auto"
        />
      </div>

      {/* Horizontal Dock - For Mobile (static) */}
      <div className="fixed top-0 left-1/2 z-50 flex md:hidden -translate-x-1/2 w-full px-3 py-2">
        <div className="mx-auto w-full max-w-[calc(100vw-24px)] flex justify-center items-center gap-3">
          {dockItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center w-12 h-12 rounded-full bg-white/20 border border-white/10 hover:bg-white/40 text-white justify-center"
            >
              {item.icon}
              <span className="mt-1 hidden group-hover:block text-xs text-white truncate">
                {item.title}
              </span>
            </a>
          ))}
        </div>
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
