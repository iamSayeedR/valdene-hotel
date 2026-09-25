import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2] border-t border-[#D8D0C5]/40">
      <div className="site-container">
        <SectionHeading
          heading="Providing Food, Drink and Entertainment"
          subheading={dining.intro}
          align="center"
          className="mb-14"
        />

        {/* Breakfast Showcase — Unified Rounded Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C5]/40 mb-12">
          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto bg-[#F0EAE0] overflow-hidden">
            <img
              src={dining.breakfast.image}
              alt={dining.breakfast.imageAlt}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2623] font-bold">
              Breakfast
            </h3>

            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              {dining.breakfast.description}
            </p>

            <div className="bg-[#FAF7F2] p-5 rounded-md border border-[#D8D0C5]/60 mt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2B2623] font-semibold">
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Full English breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Light breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Vegetarian breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Cereals & fresh fruit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Evening Meals & Bar — Shared Warm Editorial Language */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 flex flex-col justify-between shadow-sm border border-[#D8D0C5]/40">
            <div className="space-y-3">
              <h4 className="font-serif text-2xl text-[#2B2623] font-bold">Evening Meal</h4>
              <p className="text-base text-[#5C5650] leading-relaxed font-normal">
                {dining.eveningMeal.description}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBE5DC]">
              <span className="text-xs text-[#7A2332] font-bold uppercase tracking-wider">Starters · Mains · Summer Salads</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 flex flex-col justify-between shadow-sm border border-[#D8D0C5]/40">
            <div className="space-y-3">
              <h4 className="font-serif text-2xl text-[#2B2623] font-bold">The Bar & Lounge</h4>
              <p className="text-base text-[#5C5650] leading-relaxed font-normal">
                {dining.bar.description}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#EBE5DC]">
              <span className="text-xs text-[#7A2332] font-bold uppercase tracking-wider">Spirits · Beers · Wines · Retro Games Machine</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <SecondaryButton to="/dining" className="font-bold">
            View Meal Options →
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
