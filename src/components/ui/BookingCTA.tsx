import { bookingConfig } from '../../config/booking'

interface BookingCTAProps {
  heading?: string
  subtext?: string
}

export function BookingCTA({
  heading = 'READY TO STAY IN BLACKPOOL?',
  subtext = 'Book your stay at Valdene Hotel directly with Bob & Linda for our best rates.',
}: BookingCTAProps) {
  return (
    <section className="bg-[#7A2332] text-white py-16 md:py-20">
      <div className="site-container text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight max-w-3xl mx-auto uppercase tracking-wide">
          {heading}
        </h2>

        {subtext && (
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            {subtext}
          </p>
        )}

        <div className="flex justify-center items-center">
          <a
            href={bookingConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white !text-[#7A2332] px-10 py-4 rounded-md text-sm font-bold uppercase tracking-wider hover:bg-[#F4EFE6] transition-colors shadow-sm whitespace-nowrap"
            style={{ color: '#7A2332' }}
          >
            BOOK YOUR STAY
          </a>
        </div>
      </div>
    </section>
  )
}
