import { SectionHeading } from '../ui/SectionHeading'

export function WhyValdene() {
  return (
    <section className="py-24 md:py-32 bg-[#2B2623] text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Hotel Lounge Photo */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md order-2 lg:order-1">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
              alt="Valdene Hotel Guest Lounge"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6 max-w-lg order-1 lg:order-2">
            <SectionHeading
              heading="Taking Care of Our Wonderful Guests"
              subheading="We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to a fantastic breakfast in the morning."
              align="left"
              className="[&_h2]:text-white [&_p]:text-white/80"
            />

            <p className="text-base text-white/80 leading-relaxed font-normal">
              If there's anything you wish to ask us or need assistance with during your stay in Blackpool, please do not hesitate to ask. We will only be too happy to help.
            </p>

            <div className="pt-4 border-t border-white/20 inline-block">
              <span className="font-serif text-2xl font-bold text-white block">Bob & Linda</span>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-amber-300">Hosts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
