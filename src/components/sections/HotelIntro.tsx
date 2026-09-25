import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'

export function HotelIntro() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <SectionHeading
              heading="At the Very Heart of Blackpool"
              subheading="We are a five-minute walk from Blackpool North train station, North Pier, and Winter Gardens, putting you within easy reach of Blackpool's finest attractions."
            />

            <p className="text-base md:text-[17px] text-[#5C5650] leading-relaxed font-normal">
              Whether you are visiting for the famous Illuminations, a show at the Grand Theatre, or a fun-filled family weekend at Blackpool Pleasure Beach, we provide comfortable, clean, and charming ensuite accommodation.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <SecondaryButton to="/explore-blackpool" className="bg-white font-bold">
                Visit Blackpool →
              </SecondaryButton>
            </div>
          </div>

          {/* Right Photography Column */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden border border-[#D8D0C5] shadow-xs">
              <img
                src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
                alt="Valdene Hotel Blackpool Guest Lounge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
