import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PrimaryButton } from '../ui/PrimaryButton'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/dining', label: 'Meal Options' },
  { to: '/offers', label: 'Special Offers' },
  { to: '/explore-blackpool', label: 'Visit Blackpool' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
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
        {/* Top Contact & Announcement Bar */}
        <div className="bg-[#F4EFE6] text-[#2B2623] border-b border-[#D8D0C5] py-2 hidden lg:block">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex justify-between items-center text-xs">
            <span className="tracking-widest uppercase font-bold text-[#7A2332] text-[11px]">
              ★ ★ ★ ★ Family-Run Ensuite Accommodation · Est. 1997
            </span>
            <div className="flex items-center gap-6 font-semibold text-[#2B2623]">
              <a href="tel:+441253291080" className="hover:text-[#7A2332] transition-colors flex items-center gap-1.5">
                <span>📞</span> (+44) 01253 291 080
              </a>
              <span className="text-[#D8D0C5]">|</span>
              <a href="mailto:bookings@valdenehotelblackpool.com" className="hover:text-[#7A2332] transition-colors">
                bookings@valdenehotelblackpool.com
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-[84px]">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3.5 group shrink-0 py-1">
              <img
                src="https://www.valdenehotelblackpool.com/wp-content/uploads/2021/03/StarRating_DarkBlue.png"
                alt="Valdene Hotel Star Rating"
                className="h-7 sm:h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-serif text-[24px] sm:text-[26px] font-bold tracking-tight text-[#2B2623] leading-none group-hover:text-[#7A2332] transition-colors">
                  Valdene Hotel
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#7A2332] mt-1">
                  Est. 1997 · Blackpool
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-[13px] tracking-[0.12em] uppercase font-bold py-1.5 transition-colors relative ${
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
            <div className="flex items-center gap-4">
              <PrimaryButton size="md" className="hidden lg:inline-block shadow-xs font-bold" />

              <button
                onClick={() => setMenuOpen(true)}
                className="xl:hidden p-2.5 text-[#2B2623] hover:text-[#7A2332] transition-colors bg-[#F4EFE6] rounded-sm"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
              >
                <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
                  <line x1="0" y1="2" x2="26" y2="2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="10" x2="26" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="18" x2="26" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer so page content never hides behind fixed header */}
      <div className="h-[80px] lg:h-[124px]" />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />
    </>
  )
}
