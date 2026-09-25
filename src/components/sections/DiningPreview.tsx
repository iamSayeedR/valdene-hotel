import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          heading="Meal Options"
          subheading={dining.intro}
          align="center"
          className="mb-16"
        />

        {/* Breakfast Showcase — Verbatim Source Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-[#D8D0C5] overflow-hidden mb-16 shadow-sm">
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[440px] bg-[#F0EAE0]">
            <img
              src={dining.breakfast.image}
              alt={dining.breakfast.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.18em] text-[#7A2332] font-bold mb-3">
              Served Fresh Each Morning
            </span>
            <h3 className="font-serif text-[1.75rem] md:text-[2.25rem] text-[#2B2623] font-bold mb-5 leading-tight">
              {dining.breakfast.title}
            </h3>
            <p className="text-[17px] text-[#5C5650] leading-[1.75] mb-8 font-normal">
              {dining.breakfast.description}
            </p>
            <div className="bg-[#FAF7F2] p-6 border border-[#D8D0C5]">
              <h4 className="text-xs uppercase tracking-[0.18em] text-[#2B2623] font-bold mb-4">
                Breakfast Options Include:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] text-[#2B2623] font-semibold">
                {dining.breakfast.options.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#7A2332] font-extrabold">✓</span> {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evening Meals & Bar — Two Columns (Verbatim Source Copy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white border border-[#D8D0C5] overflow-hidden flex flex-col justify-between shadow-xs">
            <div>
              <div className="aspect-[16/10] bg-[#F0EAE0]">
                <img
                  src={dining.eveningMeal.image}
                  alt={dining.eveningMeal.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.18em] text-[#7A2332] font-bold block mb-2">
                  Evening Menu
                </span>
                <h4 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">{dining.eveningMeal.title}</h4>
                <p className="text-[16px] text-[#5C5650] leading-relaxed font-normal">
                  {dining.eveningMeal.description}
                </p>
              </div>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-[#EBE5DC]">
              <span className="text-xs text-[#2B2623] font-bold uppercase tracking-wider">Starters · Mains · Summer Salads</span>
            </div>
          </div>

          <div className="bg-[#2B2623] text-white overflow-hidden flex flex-col justify-between shadow-xs">
            <div>
              <div className="aspect-[16/10] bg-[#1E1A18]">
                <img
                  src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1"
                  alt="Valdene Bar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.18em] text-amber-300 font-bold block mb-2">
                  Licensed Bar & Lounge
                </span>
                <h4 className="font-serif text-2xl text-white font-bold mb-3">{dining.bar.title}</h4>
                <p className="text-[16px] text-white/90 leading-relaxed font-normal">
                  {dining.bar.description}
                </p>
              </div>
            </div>
            <div className="px-8 pb-8 pt-4 border-t border-white/20">
              <span className="text-xs text-amber-100 font-semibold uppercase tracking-wider">Spirits · Beers · Ciders · Wines · Retro Games Machine</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <SecondaryButton to="/dining" className="bg-white">
            View All Meal & Bar Options →
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
