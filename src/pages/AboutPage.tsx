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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 border border-[#D8D0C5] shadow-sm rounded-lg">
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
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-md border border-[#D8D0C5]">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room_6_Main.jpg?fit=1024%2C768&ssl=1"
              alt="Valdene Hotel Superior Family Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Meal Options Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 border border-[#D8D0C5] shadow-sm rounded-lg">
          <div className="md:col-span-5 aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-md md:order-1 border border-[#D8D0C5]">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/FullEnglishBreakfast2.jpg?fit=800%2C469&ssl=1"
              alt="Valdene Hotel Fresh Breakfast"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:order-2">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Food & Dining</span>
            <h2 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Freshly Prepared Meal Options</h2>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              We take pride in serving delicious, freshly prepared breakfast options each morning in our dining room, along with dinner options and summer salads.
            </p>
          </div>
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
