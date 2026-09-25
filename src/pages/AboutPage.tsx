import { SectionHeading } from '../components/ui/SectionHeading'
import { hotel } from '../data/hotel'
import { BookingCTA } from '../components/ui/BookingCTA'

export function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Header */}
      <div className="site-container max-w-3xl mx-auto mb-12 text-center">
        <SectionHeading
          heading="Welcome to Valdene Hotel"
          subheading="A family-run hotel established in 1997, providing warm UK seaside hospitality in the heart of Blackpool."
          align="center"
        />
      </div>

      {/* Main Content */}
      <div className="site-container mb-16 space-y-12">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 border border-[#D8D0C5] shadow-xs">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Hospitality Since 1997</span>
            <h2 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Taking Care of Our Wonderful Guests</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-4 font-normal">
              {hotel.about.body}
            </p>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              From the moment you arrive, hosts Bob and Linda are on hand to ensure your stay in Blackpool is relaxing, comfortable, and enjoyable.
            </p>
          </div>
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden border border-[#D8D0C5]">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
              alt="Valdene Hotel interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* The Bar & Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#2B2623] text-white p-6 md:p-10 border border-white/10 shadow-xs">
          <div className="md:col-span-5 aspect-[4/3] bg-[#1E1A18] overflow-hidden md:order-1">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1"
              alt="Valdene Bar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:order-2">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-2">Food, Drink & Entertainment</span>
            <h2 className="font-serif text-2xl text-white font-bold mb-3">Our Friendly Bar & Lounge</h2>
            <p className="text-base text-white/90 leading-relaxed font-normal">
              {hotel.about.bar}
            </p>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
