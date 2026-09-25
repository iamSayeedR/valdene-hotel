import { SectionHeading } from '../ui/SectionHeading'

export function WhyValdene() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0] border-t border-[#D8D0C5]">
      <div className="site-container max-w-4xl text-center">
        <SectionHeading
          heading="Taking Care of Our Wonderful Guests"
          subheading="We take pride in welcoming guests through the door and making sure they get everything from a great night's sleep to a fantastic breakfast in the morning."
          align="center"
          className="mb-8"
        />

        <p className="text-[18px] text-[#5C5650] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          If there's anything you wish to ask us or need assistance with during your stay in Blackpool, please do not hesitate to ask — we'll only be too happy to help.
        </p>

        <div className="pt-6 border-t border-[#D8D0C5] inline-block">
          <span className="font-serif text-2xl font-bold text-[#2B2623] block">Bob & Linda</span>
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#7A2332]">Hosts</span>
        </div>
      </div>
    </section>
  )
}
