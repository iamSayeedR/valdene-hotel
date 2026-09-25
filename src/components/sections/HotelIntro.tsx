import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'

export function HotelIntro() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text Column */}
          <div>
            <SectionHeading
              heading="At the Very Heart of Blackpool"
              subheading="We are a five-minute walk from Blackpool North train station, North Pier, and Winter Gardens — putting you within easy reach of Blackpool's finest attractions."
            />

            <div className="mt-8 space-y-5 text-[17px] text-[#5C5650] leading-[1.75]">
              <p>
                We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to a fantastic breakfast in the morning.
              </p>
              <p>
                Whether you are visiting for the famous Illuminations, a show at the Grand Theatre, or a fun-filled family weekend at Blackpool Pleasure Beach, we provide comfortable, clean, and charming ensuite accommodation.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#D8D0C5] flex items-center justify-between gap-4 flex-wrap">
              <div>
                <span className="font-serif text-2xl font-bold text-[#2B2623] block">Bob & Linda</span>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#7A2332]">Hosts</span>
              </div>
              <SecondaryButton to="/about" className="bg-white">Our Story</SecondaryButton>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden border border-[#D8D0C5] shadow-md rounded-sm">
              <img
                src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
                alt="Valdene Hotel Blackpool Guest Dining Space"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 bg-[#2B2623] text-white p-5 border border-white/10 shadow-md">
              <p className="font-serif italic text-base leading-snug text-amber-100">"Charming, spotless, and full of character."</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mt-2">— TripAdvisor Review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
