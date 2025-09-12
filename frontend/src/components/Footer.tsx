import { Link } from 'react-router-dom'
import { IconBrandLinkedin, IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-white/5 bg-gradient-to-r from-[#15123d] via-[#15123d] to-[#0f0b36]">
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-10"> {/* increased vertical padding */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"> {/* increased gap */}
          <div className="space-y-1">
            <div className="text-white font-bold tracking-wide text-3d-light text-lg md:text-xl">ENGINEER 25</div> {/* slightly larger */}
            <div className="text-sm text-cosmic-dust">Dive. Build. Celebrate.</div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-cosmic-dust"> {/* increased gap */}
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            {/* <Link to="/events" className="hover:text-white transition-colors">Events</Link> */}
            <Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link>
            <Link to="/team" className="hover:text-white transition-colors">Team</Link>
            <Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link>
          </nav>

          <div className="flex items-center gap-5 text-cosmic-dust"> {/* larger gap for bigger icons */}
            <a
              href="https://in.linkedin.com/company/engineer-nitk"
              aria-label="Linkedin"
              className="hover:text-white transition-colors"
            >
              <span className="inline-block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10">
                <IconBrandLinkedin className="w-full h-full" />
              </span>
            </a>
            <a
              href="https://web.telegram.org/a/#-1001616979844"
              aria-label="Telegram"
              className="hover:text-white transition-colors"
            >
              <span className="inline-block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10">
                <IconBrandTelegram className="w-full h-full" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/engineernitk/?hl=en"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <span className="inline-block w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10">
                <IconBrandInstagram className="w-full h-full" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-cosmic-dust/80"> {/* more margin on top */}
          © {new Date().getFullYear()} ENGINEER, NITK. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
