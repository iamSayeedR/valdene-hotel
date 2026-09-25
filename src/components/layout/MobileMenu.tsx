import { NavLink } from 'react-router-dom'
import { PrimaryButton } from '../ui/PrimaryButton'
import { hotel } from '../../data/hotel'

interface NavLinkItem {
  to: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: NavLinkItem[]
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-84 max-w-[85vw] bg-[#FAF7F2] flex flex-col transition-transform duration-300 ease-out lg:hidden shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#D8D0C5]">
          <div className="flex flex-col items-start">
            <img
              src="https://www.valdenehotelblackpool.com/wp-content/uploads/2021/03/StarRating_DarkBlue.png"
              alt="Valdene Hotel Star Rating"
              className="h-4 w-auto mb-1"
            />
            <span className="font-serif text-xl font-semibold text-[#1E1E1E]">Valdene Hotel</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#7A2332] font-bold">Est. 1997</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1E1E1E] hover:text-[#7A2332] transition-colors rounded-sm bg-[#EBE5DC]"
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1" aria-label="Mobile Navigation">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `block py-3.5 border-b border-[#EBE5DC] text-xs tracking-[0.16em] uppercase font-bold transition-colors ${
                  isActive ? 'text-[#7A2332] font-extrabold' : 'text-[#1E1E1E] hover:text-[#7A2332]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA & Direct Phone */}
        <div className="px-6 py-6 border-t border-[#D8D0C5] bg-[#F0EAE0]">
          <PrimaryButton size="lg" className="w-full text-center shadow-md mb-4" />
          <div className="flex flex-col gap-2 text-center text-xs">
            <a href={hotel.contact.phoneHref} className="font-semibold text-[#1E1E1E] hover:text-[#7A2332]">
              📞 Call: {hotel.contact.phone}
            </a>
            <a href={hotel.contact.mobileHref} className="text-[#5C5650] hover:text-[#7A2332]">
              📱 Mobile: {hotel.contact.mobile}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
