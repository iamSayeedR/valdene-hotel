import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function AwardsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
        <SectionHeading
          heading="Awards & Recognition"
          subheading="Thank you to all our guests for their reviews and continued support."
          align="center"
          className="mb-14"
        />

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10 max-w-3xl mx-auto">
          {hotel.awards.map((award, i) => (
            <div key={i} className="bg-white p-8 md:p-10 border border-[#D8D0C5] flex-1 flex flex-col items-center shadow-xs">
              <div className="h-56 md:h-64 w-full flex items-center justify-center p-4 mb-6">
                <img src={award.image} alt={award.alt} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="font-serif text-xl text-[#2B2623] font-bold">{award.name}</h3>
              <span className="text-xs tracking-[0.18em] uppercase text-[#7A2332] font-bold mt-2">{award.provider}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
