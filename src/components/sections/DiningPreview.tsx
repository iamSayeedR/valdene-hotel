import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="site-container">
        <SectionHeading
          heading="Meal Options"
          subheading={dining.intro}
          align="center"
          className="mb-14"
        />

        {/* Official Valdene Breakfast Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {dining.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C5]/40 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-[#F0EAE0] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2623] font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C5650] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evening Meals Summary */}
        <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm border border-[#D8D0C5]/40 mb-12 text-center max-w-2xl mx-auto">
          <h4 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Evening Meals</h4>
          <p className="text-base text-[#5C5650] leading-relaxed font-normal mb-4">
            {dining.eveningMeal.description}
          </p>
          <span className="text-xs text-[#7A2332] font-bold uppercase tracking-wider">Starters · Mains · Summer Salads</span>
        </div>

        <div className="text-center">
          <SecondaryButton to="/dining" className="font-bold">
            View All Meal Options →
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
