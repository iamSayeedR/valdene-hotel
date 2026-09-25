import { SectionHeading } from '../components/ui/SectionHeading'
import { hotel } from '../data/hotel'
import { BookingCTA } from '../components/ui/BookingCTA'

export function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          eyebrow="Our Story"
          heading="Welcome to Valdene Hotel"
          subheading="A family-run hotel established in 1997, providing warm UK seaside hospitality in the heart of Blackpool."
          align="center"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-20 space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 border border-[#DDD6CC]">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-2">Hospitality Since 1997</span>
            <h2 className="font-serif text-2xl text-[#1E1E1E] mb-4">Taking Care of Our Wonderful Guests</h2>
            <p className="text-xs text-[#6B6560] leading-relaxed mb-4">
              {hotel.about.body}
            </p>
            <p className="text-xs text-[#6B6560] leading-relaxed">
              From the moment you arrive, hosts Bob and Linda are on hand to ensure your stay in Blackpool is relaxing, comfortable, and enjoyable.
            </p>
          </div>
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-sm">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
              alt="Valdene Hotel interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* The Bar & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1E1E1E] text-white p-8 md:p-12">
          <div className="md:col-span-5 aspect-[4/3] bg-[#2A2A2A] overflow-hidden rounded-sm md:order-1">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1"
              alt="Valdene Bar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:order-2">
            <span className="text-[10px] uppercase tracking-widest text-[#9A9390] font-medium block mb-2">Food, Drink & Entertainment</span>
            <h2 className="font-serif text-2xl text-white mb-4">Our Friendly Bar & Lounge</h2>
            <p className="text-xs text-[#F0EAE0]/90 leading-relaxed font-light mb-4">
              {hotel.about.bar}
            </p>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
