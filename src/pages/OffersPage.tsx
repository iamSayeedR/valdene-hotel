import { SectionHeading } from '../components/ui/SectionHeading'
import { offersContactNote } from '../data/offers'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { hotel } from '../data/hotel'

export function OffersPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="site-container max-w-3xl mx-auto text-center mb-12">
        <SectionHeading
          heading="Special Offers & Packages"
          subheading="Book directly with us at Valdene Hotel for our best rates and personalized service."
          align="center"
        />
      </div>

      <div className="site-container max-w-2xl mx-auto mb-16">
        <div className="bg-white p-8 sm:p-12 border border-[#D8D0C5] text-center shadow-xs">
          <span className="font-serif text-2xl font-bold text-[#7A2332] block mb-3">Direct Booking Guarantee</span>
          <p className="text-base text-[#5C5650] leading-relaxed mb-8 font-normal">
            {offersContactNote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-[#EBE5DC]">
            <PrimaryButton size="lg" className="font-bold" />
            <a
              href={hotel.contact.phoneHref}
              className="text-xs uppercase tracking-widest text-[#2B2623] font-bold border border-[#2B2623] px-6 py-4 hover:bg-[#2B2623] hover:text-white transition-all"
            >
              Call Us: {hotel.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
