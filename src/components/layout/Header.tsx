import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PrimaryButton } from '../ui/PrimaryButton'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/offers', label: 'Special offers' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/dining', label: 'Meal options' },
  { to: '/explore-blackpool', label: 'Visit Blackpool' },
  { to: '/careers', label: 'Careers' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2] border-b border-[#D8D0C5] shadow-xs">
        {/* Top Contact Bar */}
        <div className="bg-[#F4EFE6] text-[#2B2623] border-b border-[#D8D0C5] py-2 hidden lg:block">
          <div className="site-container flex justify-between items-center text-xs">
            <span className="tracking-widest uppercase font-bold text-[#7A2332] text-[11px]">
              Family-Run Ensuite Accommodation · Est. 1997
            </span>
            <div className="flex items-center gap-6 font-semibold text-[#2B2623]">
              <a href="tel:+441253291080" className="hover:text-[#7A2332] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <span>📞</span> (+44) 01253 291 080
              </a>
              <span className="text-[#D8D0C5]">|</span>
              <a href="mailto:bookings@valdenehotelblackpool.com" className="hover:text-[#7A2332] transition-colors whitespace-nowrap">
                bookings@valdenehotelblackpool.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="site-container">
          <div className="flex items-center justify-between h-20 lg:h-[84px] gap-4">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group shrink-0 py-1">
              <img
                src="https://www.valdenehotelblackpool.com/wp-content/uploads/2021/03/StarRating_DarkBlue.png"
                alt="Valdene Hotel Star Rating"
                className="h-7 sm:h-8 w-auto shrink-0"
              />
              <div className="flex flex-col shrink-0">
                <span className="font-serif text-[22px] sm:text-[25px] font-bold tracking-tight text-[#2B2623] leading-none group-hover:text-[#7A2332] transition-colors whitespace-nowrap">
                  Valdene Hotel
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#7A2332] mt-1 whitespace-nowrap">
                  Est. 1997 · Blackpool
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 lg:gap-6 shrink-0" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-[12px] 2xl:text-[13px] tracking-[0.1em] uppercase font-bold py-1.5 transition-colors whitespace-nowrap relative ${
                      isActive
                        ? 'text-[#7A2332] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#7A2332]'
                        : 'text-[#2B2623] hover:text-[#7A2332]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <PrimaryButton size="md" className="hidden lg:inline-block shadow-xs font-bold whitespace-nowrap shrink-0" />

              <button
                onClick={() => setMenuOpen(true)}
                className="xl:hidden p-2.5 text-[#2B2623] hover:text-[#7A2332] transition-colors bg-[#F4EFE6] rounded-sm shrink-0"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true">
                  <line x1="0" y1="2" x2="24" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="9" x2="24" y2="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed Header Spacer */}
      <div className="h-[80px] lg:h-[124px]" />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  )
}
