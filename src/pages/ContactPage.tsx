import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/contact/ContactForm'
import { hotel } from '../data/hotel'

export function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          eyebrow="Get In Touch"
          heading="Contact Valdene Hotel"
          subheading="We are always happy to help with room enquiries, booking questions, or local recommendations."
          align="center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#DDD6CC]">
              <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-2">Our Address</span>
              <h3 className="font-serif text-xl text-[#1E1E1E] mb-3">Hotel Location</h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                {hotel.address.street}<br />
                {hotel.address.city}<br />
                {hotel.address.county}<br />
                {hotel.address.postcode}<br />
                {hotel.address.country}
              </p>
            </div>

            <div className="bg-white p-8 border border-[#DDD6CC] space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-1">Telephone</span>
                <a href={hotel.contact.phoneHref} className="text-sm font-medium text-[#1E1E1E] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-1">Mobile</span>
                <a href={hotel.contact.mobileHref} className="text-sm font-medium text-[#1E1E1E] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.mobile}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-1">Email Bookings</span>
                <a href={hotel.contact.emailHref} className="text-sm font-medium text-[#1E1E1E] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.email}
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="aspect-[4/3] bg-[#EDE8E1] border border-[#DDD6CC] overflow-hidden">
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
