import { PrimaryButton } from './PrimaryButton'

interface BookingCTAProps {
  heading?: string
  subtext?: string
}

export function BookingCTA({
  heading = 'READY TO STAY IN BLACKPOOL?',
  subtext = 'Book your stay at Valdene Hotel directly with Bob & Linda for our best rates.',
}: BookingCTAProps) {
  return (
    <section className="bg-[#7A2332] text-white py-20 md:py-24">
      <div className="site-container text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-3xl mx-auto uppercase tracking-wide">
          {heading}
        </h2>

        {subtext && (
          <p className="text-base md:text-lg text-white/90 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
            {subtext}
          </p>
        )}

        <div className="flex justify-center items-center">
          <PrimaryButton size="lg" className="px-10 py-4 bg-white text-[#7A2332] hover:bg-[#F4EFE6] font-bold shadow-sm" />
        </div>
      </div>
    </section>
  )
}
