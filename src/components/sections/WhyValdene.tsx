import { SectionHeading } from '../ui/SectionHeading'

export function WhyValdene() {
  return (
    <section className="py-24 md:py-32 bg-[#2B2623] text-white">
      <div className="site-container text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <SectionHeading
            heading="Taking Care of Our Wonderful Guests"
            subheading="We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to a fantastic breakfast in the morning."
            align="center"
            className="[&_h2]:text-white [&_p]:text-white/80"
          />

          <p className="text-base md:text-lg text-white/80 leading-relaxed font-normal">
            If there's anything you wish to ask us or need assistance with during your stay in Blackpool, please do not hesitate to ask. We will only be too happy to help.
          </p>

          <div className="pt-6 inline-block">
            <span className="font-serif text-2xl font-bold text-white block">Bob & Linda</span>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-amber-300">Hosts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
