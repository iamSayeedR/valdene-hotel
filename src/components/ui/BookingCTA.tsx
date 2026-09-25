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
          <PrimaryButton variant="white" size="lg" className="shadow-sm font-bold" />
        </div>
      </div>
    </section>
  )
}
