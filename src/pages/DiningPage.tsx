import { SectionHeading } from '../components/ui/SectionHeading'
import { dining } from '../data/dining'
import { BookingCTA } from '../components/ui/BookingCTA'

export function DiningPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Page Header */}
      <div className="site-container mb-12 text-center">
        <SectionHeading
          heading="Meal Options at Valdene Hotel"
          subheading={dining.intro}
          align="center"
        />
      </div>

      {/* Breakfast Section */}
      <section className="site-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#D8D0C5] p-6 lg:p-10 shadow-xs">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden">
              <img
                src={dining.breakfast.image}
                alt={dining.breakfast.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Morning Selection</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2623] mb-3">{dining.breakfast.title}</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-6 font-normal">{dining.breakfast.description}</p>
            <div className="bg-[#FAF7F2] p-5 border border-[#D8D0C5]">
              <h4 className="text-xs uppercase tracking-widest text-[#2B2623] font-bold mb-3">Breakfast Options Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2B2623] font-semibold">
                {dining.breakfast.options.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#7A2332]">✓</span> {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Evening Meal Section */}
      <section className="site-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#D8D0C5] p-6 lg:p-10 shadow-xs">
          <div className="lg:col-span-6 lg:order-2">
            <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden">
              <img
                src={dining.eveningMeal.image}
                alt={dining.eveningMeal.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">Dinner Selection</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2623] mb-3">{dining.eveningMeal.title}</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-6 font-normal">{dining.eveningMeal.description}</p>
            <div className="bg-[#FAF7F2] p-5 border border-[#D8D0C5]">
              <h4 className="text-xs uppercase tracking-widest text-[#2B2623] font-bold mb-3">Evening Meal Options Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2B2623] font-semibold">
                {dining.eveningMeal.options.map((opt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#7A2332]">✓</span> {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="site-container mb-16">
        <div className="bg-[#2B2623] text-white p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/10 shadow-xs">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-2">Licensed Bar & Lounge</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">{dining.bar.title}</h2>
          <p className="text-base text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
            {dining.bar.description}
          </p>
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
