import { SectionHeading } from '../ui/SectionHeading'
import { hotel } from '../../data/hotel'

export function AwardsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F0EAE0]">
      <div className="site-container text-center">
        <SectionHeading
          heading="We've Won Awards!"
          subheading="A big Thank You to all our guests who have left us amazing reviews."
          align="center"
          className="mb-14"
        />

        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-2xl mx-auto">
          {hotel.awards.map((award, i) => (
            <div key={i} className="bg-white rounded-lg p-6 sm:p-8 border border-[#D8D0C5]/40 shadow-sm flex-1 flex flex-col items-center justify-between text-center">
              <div className="h-28 md:h-32 w-full flex items-center justify-center p-2 mb-4">
                <img
                  src={award.image}
                  alt={award.alt}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
              <div>
                <h3 className="font-serif text-base text-[#2B2623] font-bold">{award.name}</h3>
                <span className="text-[11px] tracking-widest uppercase text-[#7A2332] font-bold mt-1 block">{award.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
