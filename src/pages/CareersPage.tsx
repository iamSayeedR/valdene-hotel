import { SectionHeading } from '../components/ui/SectionHeading'
import { hotel } from '../data/hotel'

export function CareersPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="site-container max-w-3xl mx-auto text-center mb-12">
        <SectionHeading
          heading="Careers at Valdene Hotel"
          subheading="Interested in working with us at the Valdene Hotel in Blackpool?"
          align="center"
        />
      </div>

      <div className="site-container max-w-2xl mx-auto mb-16">
        <div className="bg-white p-8 sm:p-12 border border-[#D8D0C5] text-center shadow-xs">
          <p className="text-base text-[#5C5650] leading-relaxed mb-6 font-normal">
            We are always interested in meeting enthusiastic individuals who share our passion for hospitality and great guest service.
          </p>
          <p className="text-base text-[#5C5650] leading-relaxed mb-8 font-normal">
            For employment enquiries or to enquire about current opportunities, please contact Bob & Linda directly by phone or email.
          </p>

          <a
            href={hotel.contact.emailHref}
            className="inline-block bg-[#7A2332] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-bold hover:bg-[#5C1A26] transition-colors"
          >
            Email Careers Enquiry
          </a>
        </div>
      </div>
    </div>
  )
}
