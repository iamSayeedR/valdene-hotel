import { SectionHeading } from '../components/ui/SectionHeading'
import { offersContactNote } from '../data/offers'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { hotel } from '../data/hotel'

export function OffersPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16">
        <SectionHeading
          eyebrow="Direct Booking Perks"
          heading="Special Offers & Packages"
          subheading="Book directly with us at Valdene Hotel for our best rates and personalized service."
          align="center"
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-white p-8 sm:p-12 border border-[#DDD6CC] text-center shadow-sm">
          <span className="font-serif text-3xl text-[#7A2332] block mb-4">Direct Booking Benefit</span>
          <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
            {offersContactNote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-[#EDE8E1]">
            <PrimaryButton size="lg" />
            <a
              href={hotel.contact.phoneHref}
              className="text-xs uppercase tracking-widest text-[#1E1E1E] font-medium border border-[#1E1E1E] px-6 py-4 hover:bg-[#1E1E1E] hover:text-white transition-all"
            >
              Call Us: {hotel.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
