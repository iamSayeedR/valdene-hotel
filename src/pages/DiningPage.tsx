import { SectionHeading } from '../components/ui/SectionHeading'
import { dining } from '../data/dining'
import { BookingCTA } from '../components/ui/BookingCTA'

export function DiningPage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          eyebrow="Food & Drink"
          heading="Meal Options at Valdene Hotel"
          subheading={dining.intro}
          align="center"
        />
      </div>

      {/* Breakfast Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#DDD6CC]/60 p-8 lg:p-12 shadow-sm">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-sm">
              <img
                src={dining.breakfast.image}
                alt={dining.breakfast.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-2">Morning Selection</span>
            <h2 className="font-serif text-3xl text-[#1E1E1E] mb-4">{dining.breakfast.title}</h2>
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">{dining.breakfast.description}</p>
            <div className="bg-[#FAF7F2] p-6 border border-[#DDD6CC]/60">
              <h4 className="text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-3">Breakfast Options Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6560]">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-[#DDD6CC]/60 p-8 lg:p-12 shadow-sm">
          <div className="lg:col-span-6 lg:order-2">
            <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-sm">
              <img
                src={dining.eveningMeal.image}
                alt={dining.eveningMeal.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-2">Dinner Selection</span>
            <h2 className="font-serif text-3xl text-[#1E1E1E] mb-4">{dining.eveningMeal.title}</h2>
            <p className="text-sm text-[#6B6560] leading-relaxed mb-6">{dining.eveningMeal.description}</p>
            <div className="bg-[#FAF7F2] p-6 border border-[#DDD6CC]/60">
              <h4 className="text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-3">Evening Meal Options Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B6560]">
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
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-[#1E1E1E] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto border border-white/10 shadow-xl">
          <span className="text-[10px] uppercase tracking-widest text-[#9A9390] block mb-2">Hospitality & Games</span>
          <h2 className="font-serif text-3xl text-white mb-6">{dining.bar.title}</h2>
          <p className="text-sm text-[#F0EAE0]/90 leading-relaxed font-light max-w-2xl mx-auto">
            {dining.bar.description}
          </p>
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
