import { Link } from 'react-router-dom'
import { hotel } from '../../data/hotel'

export function Footer() {
  return (
    <footer className="bg-[#2B2623] text-white border-t border-white/10">
      <div className="site-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Column 1: Hotel Identity */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="block">
              <span className="font-serif text-[28px] font-bold text-white block leading-none hover:text-amber-200 transition-colors">
                Valdene Hotel
              </span>
              <span className="text-[11px] tracking-[0.22em] uppercase text-amber-300 font-bold mt-1 block">
                Est. 1997 · Blackpool, England
              </span>
            </Link>

            <p className="text-[15px] text-white/70 leading-relaxed max-w-md font-normal">
              Award-winning family-run ensuite accommodation in the heart of Blackpool. Run with passion and care by Bob & Linda since 1997.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-semibold">
              <a
                href={hotel.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors uppercase tracking-wider"
              >
                Facebook ↗
              </a>
              <span className="text-white/20">·</span>
              <a
                href={hotel.social.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors uppercase tracking-wider"
              >
                TripAdvisor ↗
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs tracking-[0.2em] uppercase text-amber-300 font-bold mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3 text-[15px]" aria-label="Footer navigation">
              {[
                { to: '/', label: 'Home' },
                { to: '/offers', label: 'Special offers' },
                { to: '/rooms', label: 'Rooms' },
                { to: '/dining', label: 'Meal options' },
                { to: '/explore-blackpool', label: 'Visit Blackpool' },
                { to: '/careers', label: 'Careers' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs tracking-[0.2em] uppercase text-amber-300 font-bold mb-6">
              Contact & Location
            </h3>
            <address className="not-italic space-y-3 text-[15px] text-white/70 font-normal">
              <p className="leading-relaxed">
                <strong className="text-white font-semibold">{hotel.name}</strong><br />
                {hotel.address.street}, {hotel.address.city}<br />
                {hotel.address.county}, {hotel.address.postcode}, {hotel.address.country}
              </p>
              <p className="pt-2">
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-0.5">Telephone</span>
                <a href={hotel.contact.phoneHref} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {hotel.contact.phone}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-0.5">Mobile</span>
                <a href={hotel.contact.mobileHref} className="text-white hover:text-amber-300 font-semibold transition-colors">
                  {hotel.contact.mobile}
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-0.5">Email</span>
                <a href={hotel.contact.emailHref} className="text-white hover:text-amber-300 font-semibold transition-colors break-all">
                  {hotel.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 py-6 bg-[#1E1A18]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Valdene Hotel Blackpool. All rights reserved.</p>
          <p>16 Cocker Street, Blackpool FY1 2BY</p>
        </div>
      </div>
    </footer>
  )
}
