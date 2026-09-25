import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function AwardsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0] border-t border-[#D8D0C5]">
      <div className="site-container text-center">
        <SectionHeading
          heading="We've Won Awards!"
          subheading="A big Thank You to all our guests who have left us amazing reviews."
          align="center"
          className="mb-14"
        />

        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 max-w-2xl mx-auto">
          {hotel.awards.map((award, i) => (
            <div key={i} className="bg-white p-8 border border-[#D8D0C5] flex-1 w-full max-w-[320px] flex flex-col items-center shadow-xs">
              <div className="h-44 w-full flex items-center justify-center p-2 mb-4">
                <img src={award.image} alt={award.alt} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="font-serif text-lg text-[#2B2623] font-bold text-center">{award.name}</h3>
              <span className="text-[11px] tracking-widest uppercase text-[#7A2332] font-bold mt-2">{award.provider}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
