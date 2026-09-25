import { PrimaryButton } from './PrimaryButton'
import { hotel } from '../../data/hotel'

interface BookingCTAProps {
  heading?: string
  subtext?: string
}

export function BookingCTA({
  heading = 'READY TO STAY IN BLACKPOOL?',
  subtext = 'Book your stay at Valdene Hotel directly with Bob & Linda for our best rates and personal service.',
}: BookingCTAProps) {
  return (
    <section className="bg-[#7A2332] text-white py-16 md:py-20 border-t border-b border-[#5C1A26]">
      <div className="site-container text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight max-w-3xl mx-auto uppercase tracking-wide">
          {heading}
        </h2>

        {subtext && (
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PrimaryButton size="lg" className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#7A2332] hover:bg-[#F4EFE6] font-bold shadow-xs" />
          <a
            href={hotel.contact.phoneHref}
            className="w-full sm:w-auto border border-white text-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-[#7A2332] transition-all"
          >
            Call: {hotel.contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
