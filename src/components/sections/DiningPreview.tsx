import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="site-container">
        <SectionHeading
          heading="Providing Food, Drink and Entertainment"
          subheading={dining.intro}
          align="center"
          className="mb-16"
        />

        {/* Editorial Food Section 1: Breakfast */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-[#D8D0C5] overflow-hidden mb-12 shadow-sm">
          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:min-h-[400px] bg-[#F0EAE0]">
            <img
              src={dining.breakfast.image}
              alt={dining.breakfast.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold mb-2">
              Served Fresh Each Morning
            </span>
            <h3 className="font-serif text-3xl text-[#2B2623] font-bold mb-4">
              Breakfast
            </h3>
            <p className="text-[17px] text-[#5C5650] leading-relaxed mb-6 font-normal">
              {dining.breakfast.description}
            </p>
            <div className="bg-[#FAF7F2] p-5 border border-[#D8D0C5]">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2B2623] font-semibold">
                <li>✓ Full English breakfast</li>
                <li>✓ Light breakfast</li>
                <li>✓ Vegetarian breakfast</li>
                <li>✓ Cereals & fresh fruit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Editorial Food Section 2: Evening Meals & Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="bg-white border border-[#D8D0C5] p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">
                Evening Menu
              </span>
              <h4 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Evening Meal</h4>
              <p className="text-[#5C5650] leading-relaxed mb-6 font-normal">
                {dining.eveningMeal.description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#EBE5DC]">
              <span className="text-xs text-[#2B2623] font-bold uppercase tracking-wider">Starters · Mains · Summer Salads</span>
            </div>
          </div>

          <div className="bg-[#2B2623] text-white p-8 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-2">
                Licensed Bar & Lounge
              </span>
              <h4 className="font-serif text-2xl text-white font-bold mb-3">The Bar</h4>
              <p className="text-white/90 leading-relaxed mb-6 font-normal">
                {dining.bar.description}
              </p>
            </div>
            <div className="pt-4 border-t border-white/20">
              <span className="text-xs text-amber-100 font-semibold uppercase tracking-wider">Spirits · Beers · Wines · Retro Games Machine</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <SecondaryButton to="/dining" className="bg-white font-bold">
            View Meal Options →
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
