import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/contact/ContactForm'
import { hotel } from '../data/hotel'

export function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="site-container mb-12 text-center">
        <SectionHeading
          heading="Contact Valdene Hotel"
          subheading="We are always happy to help with room enquiries, booking questions, or local recommendations."
          align="center"
        />
      </div>

      <div className="site-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 border border-[#D8D0C5] shadow-xs">
              <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Our Address</span>
              <h3 className="font-serif text-xl text-[#2B2623] font-bold mb-3">Hotel Location</h3>
              <p className="text-base text-[#5C5650] leading-relaxed font-normal">
                {hotel.address.street}<br />
                {hotel.address.city}, {hotel.address.county}<br />
                {hotel.address.postcode}, {hotel.address.country}
              </p>
            </div>

            <div className="bg-white p-8 border border-[#D8D0C5] space-y-4 shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Telephone</span>
                <a href={hotel.contact.phoneHref} className="text-base font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Mobile</span>
                <a href={hotel.contact.mobileHref} className="text-base font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.mobile}
                </a>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Email Bookings</span>
                <a href={hotel.contact.emailHref} className="text-base font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors break-all">
                  {hotel.contact.email}
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="aspect-[4/3] bg-[#EBE5DC] border border-[#D8D0C5] overflow-hidden shadow-xs">
              <iframe
                title="Valdene Hotel Blackpool Map"
                src={hotel.location.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
