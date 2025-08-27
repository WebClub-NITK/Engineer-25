import { Link } from 'react-router-dom'
import { IconBrandGithub, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-white/5 bg-gradient-to-r from-[#15123d] via-[#15123d] to-[#0f0b36]">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <div className="text-white font-bold tracking-wide">ENGINEER 25</div>
            <div className="text-sm text-cosmic-dust">Dive. Build. Celebrate.</div>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-cosmic-dust">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/events" className="hover:text-white transition-colors">Events</Link>
            <Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link>
            <Link to="/team" className="hover:text-white transition-colors">Team</Link>
            <Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link>
          </nav>

          <div className="flex items-center gap-3 text-cosmic-dust">
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors">
              <IconBrandGithub size={20} />
            </a>
            <a href="#" aria-label="X" className="hover:text-white transition-colors">
              <IconBrandX size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <IconBrandInstagram size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-cosmic-dust/80">© {new Date().getFullYear()} ENGINEER, NITK. All rights reserved.</div>
      </div>
    </footer>
  )
}


