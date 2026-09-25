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
    <section className="bg-[#7A2332] text-white py-20 md:py-24 border-t border-b border-[#5C1A26]">
      <div className="site-container text-center">
        <h2 className="font-serif text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] font-bold text-white mb-4 leading-tight max-w-4xl mx-auto uppercase tracking-wide">
          {heading}
        </h2>

        {subtext && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <PrimaryButton size="lg" className="w-full sm:w-auto px-10 py-4 bg-white text-[#7A2332] hover:bg-[#F4EFE6] font-bold shadow-md" />
          <a
            href={hotel.contact.phoneHref}
            className="w-full sm:w-auto border border-white text-white px-10 py-4 text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-white hover:text-[#7A2332] transition-all"
          >
            Call: {hotel.contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
