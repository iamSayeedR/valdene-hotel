import { SectionHeading } from '../ui/SectionHeading'

export function WhyValdene() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <SectionHeading
            heading="Taking Care of Our Wonderful Guests"
            subheading="We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to a fantastic breakfast in the morning."
            align="center"
          />

          <p className="text-base md:text-lg text-[#5C5650] leading-relaxed font-normal">
            If there's anything you wish to ask us or need assistance with during your stay in Blackpool, please do not hesitate to ask. We will only be too happy to help.
          </p>

          <div className="pt-6 inline-block border-t border-[#D8D0C5]">
            <span className="font-serif text-2xl font-bold text-[#2B2623] block">Bob & Linda</span>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#7A2332]">Hosts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
