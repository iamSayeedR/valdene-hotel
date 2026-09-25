import { PrimaryButton } from './PrimaryButton'
import { hotel } from '../../data/hotel'

interface BookingCTAProps {
  heading?: string
  subtext?: string
}

export function BookingCTA({
  heading = 'Ready to Book Your Stay at Valdene Hotel?',
  subtext = 'Book directly with Bob & Linda for our best rates, personal service, and warmest welcome.',
}: BookingCTAProps) {
  return (
    <section className="bg-[#7A2332] text-white py-20 md:py-28 px-6">
      <div className="max-w-[1280px] mx-auto text-center">
        <span className="text-xs tracking-[0.25em] uppercase font-bold text-amber-200 block mb-4">
          Direct Booking Guaranteed Best Rate
        </span>

        <h2 className="font-serif text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
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

        <p className="mt-8 text-sm text-white/80">
          or email us directly: <a href={hotel.contact.emailHref} className="underline text-white font-semibold hover:text-amber-200">{hotel.contact.email}</a>
        </p>
      </div>
    </section>
  )
}
