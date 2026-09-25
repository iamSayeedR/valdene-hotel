import { SectionHeading } from '../components/ui/SectionHeading'
import { hotel } from '../data/hotel'

export function CareersPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16">
        <SectionHeading
          eyebrow="Join Our Team"
          heading="Careers at Valdene Hotel"
          subheading="Interested in working with us at the Valdene Hotel in Blackpool?"
          align="center"
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-white p-8 sm:p-12 border border-[#DDD6CC] text-center shadow-sm">
          <p className="text-xs text-[#6B6560] leading-relaxed mb-6">
            We are always interested in meeting enthusiastic individuals who share our passion for hospitality and great guest service.
          </p>
          <p className="text-xs text-[#6B6560] leading-relaxed mb-8">
            For employment enquiries or to enquire about current opportunities, please contact Bob & Linda directly by phone or email.
          </p>

          <a
            href={hotel.contact.emailHref}
            className="inline-block bg-[#7A2332] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#5C1A26] transition-colors"
          >
            Email Careers Enquiry
          </a>
        </div>
      </div>
    </div>
  )
}
