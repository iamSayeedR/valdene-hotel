import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function LocationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              heading="Contact Valdene"
              subheading="We are a five-minute walk from Blackpool North train station, North Pier, and Winter Gardens."
            />

            <div className="space-y-4 text-base text-[#2B2623] pt-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Address</span>
                <p className="font-semibold leading-relaxed">
                  {hotel.address.street}<br />
                  {hotel.address.city}, {hotel.address.county}<br />
                  {hotel.address.postcode}, {hotel.address.country}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D8D0C5]">
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Phone</span>
                <a href={hotel.contact.phoneHref} className="font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.phone}
                </a>
              </div>

              <div className="pt-3 border-t border-[#D8D0C5]">
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Mobile</span>
                <a href={hotel.contact.mobileHref} className="font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                  {hotel.contact.mobile}
                </a>
              </div>

              <div className="pt-3 border-t border-[#D8D0C5]">
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Email</span>
                <a href={hotel.contact.emailHref} className="font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors break-all">
                  {hotel.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Google Map */}
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] w-full bg-[#EBE5DC] border border-[#D8D0C5] overflow-hidden shadow-xs">
              <iframe
                title="Valdene Hotel Blackpool Location Map"
                src={hotel.location.mapEmbed}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
