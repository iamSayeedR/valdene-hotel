import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              heading="Contact Us"
              subheading="We are a five-minute walk from Blackpool North train station, North Pier, and Winter Gardens."
            />

            <div className="bg-white p-8 border border-[#D8D0C5] space-y-6 shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Address</span>
                <p className="text-base text-[#2B2623] leading-relaxed font-semibold">
                  {hotel.address.street}<br />
                  {hotel.address.city}, {hotel.address.county}<br />
                  {hotel.address.postcode}, {hotel.address.country}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE5DC] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Phone</span>
                  <a href={hotel.contact.phoneHref} className="text-sm font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                    {hotel.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Mobile</span>
                  <a href={hotel.contact.mobileHref} className="text-sm font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors">
                    {hotel.contact.mobile}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EBE5DC]">
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-1">Email</span>
                <a href={hotel.contact.emailHref} className="text-sm font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors break-all">
                  {hotel.contact.email}
                </a>
              </div>
            </div>

            {/* Travel Times List */}
            <div className="bg-[#F4EFE6] p-6 border border-[#D8D0C5]">
              <h4 className="text-xs uppercase tracking-widest text-[#2B2623] font-bold mb-3">Walking Distances:</h4>
              <ul className="space-y-2 text-sm text-[#5C5650]">
                <li className="flex items-center gap-2">📍 <strong>5 mins:</strong> Blackpool North Train Station</li>
                <li className="flex items-center gap-2">📍 <strong>5 mins:</strong> Winter Gardens & Grand Theatre</li>
                <li className="flex items-center gap-2">📍 <strong>5 mins:</strong> North Pier & Seafront Promenade</li>
                <li className="flex items-center gap-2">📍 <strong>Short tram ride:</strong> Pleasure Beach & Zoo</li>
              </ul>
            </div>
          </div>

          {/* Guaranteed Working Google Map Right */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#D8D0C5] p-3 shadow-xs flex flex-col">
              <div className="aspect-[4/3] w-full bg-[#EBE5DC] relative overflow-hidden">
                <iframe
                  title="Valdene Hotel Blackpool Location Map"
                  src={hotel.location.mapEmbed}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-[#FAF7F2] border-t border-[#EBE5DC] flex items-center justify-between text-xs flex-wrap gap-2">
                <span className="font-bold text-[#2B2623]">16 Cocker Street, Blackpool FY1 2BY</span>
                <a
                  href="https://maps.google.com/?q=16+Cocker+Street+Blackpool+FY1+2BY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7A2332] font-bold uppercase tracking-widest hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
