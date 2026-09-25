import { SectionHeading } from '../ui/SectionHeading'
import { Link } from 'react-router-dom'

export function HotelIntro() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="space-y-6 max-w-lg">
            <SectionHeading
              heading="At the Very Heart of Blackpool"
              subheading="We are a five-minute walk from Blackpool North train station, North Pier, and Winter Gardens, putting you within easy reach of Blackpool's finest attractions."
            />

            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              Whether you are visiting for the famous Illuminations, a show at the Grand Theatre, or a fun-filled family weekend at Blackpool Pleasure Beach, we provide comfortable, clean, and charming ensuite accommodation.
            </p>

            <Link
              to="/explore-blackpool"
              className="inline-block bg-[#7A2332] text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5C1A26] transition-colors shadow-xs"
            >
              Visit Blackpool →
            </Link>
          </div>

          {/* Right Photography — Bright Hotel Shot */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room_6_Main.jpg?fit=1024%2C768&ssl=1"
              alt="Valdene Hotel Blackpool Superior Family Room"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
