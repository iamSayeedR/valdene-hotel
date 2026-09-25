import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="site-container">
        <SectionHeading
          heading="Meal Options"
          subheading="Tuck into our large variety of breakfast options and freshly prepared evening meals, starters, mains, and summer salads."
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

        {/* Section Closing Call-To-Action */}
        <div className="text-center">
          <p className="text-sm text-[#5C5650] mb-4 font-medium">
            Evening meals, starters, mains, and summer salads are also available for our guests.
          </p>
          <SecondaryButton to="/dining" className="font-bold">
            View All Meal Options →
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
