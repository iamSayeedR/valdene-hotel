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

      {/* Breakfast Section Title */}
      <div className="site-container mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2623] font-bold">Breakfast</h2>
        <p className="text-sm text-[#5C5650] mt-1 font-semibold">Served fresh each morning at 9am</p>
      </div>

      {/* 4 Official Breakfast Items Grid */}
      <section className="site-container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dining.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden border border-[#D8D0C5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-[#F0EAE0] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2B2623] mb-3 font-bold">{item.title}</h3>
                  <p className="text-sm text-[#5C5650] leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Evening Meal Section */}
      <section className="site-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#D8D0C5] p-6 lg:p-10 rounded-lg shadow-sm">
          <div className="lg:col-span-6 lg:order-2">
            <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-md">
              <img
                src={dining.eveningMeal.image}
                alt={dining.eveningMeal.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2623] mb-3 font-bold">{dining.eveningMeal.title}</h2>
            <p className="text-base text-[#5C5650] leading-relaxed mb-6 font-normal">{dining.eveningMeal.description}</p>
            <div className="bg-[#FAF7F2] p-5 border border-[#D8D0C5] rounded-md">
              <h4 className="text-xs uppercase tracking-widest text-[#2B2623] font-bold mb-3">Evening Meal Options Include:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-[#2B2623] font-semibold">
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

      <BookingCTA />
    </div>
  )
}
