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
        <div className="bg-white p-6 sm:p-12 border border-[#D8D0C5] text-center shadow-xs rounded-lg">
          <span className="font-serif text-xl sm:text-2xl font-bold text-[#7A2332] block mb-3">Direct Booking Guarantee</span>
          <p className="text-sm sm:text-base text-[#5C5650] leading-relaxed mb-8 font-normal">
            {offersContactNote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-6 border-t border-[#EBE5DC]">
            <PrimaryButton size="lg" className="font-bold w-full sm:w-auto shadow-md" />
            <a
              href={hotel.contact.phoneHref}
              className="btn-call-us-outlined inline-block uppercase tracking-normal sm:tracking-[0.1em] font-bold rounded-md px-4 sm:px-9 py-3.5 text-xs sm:text-sm w-full sm:w-auto text-center max-w-full shadow-xs"
            >
              Call Us: {hotel.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
