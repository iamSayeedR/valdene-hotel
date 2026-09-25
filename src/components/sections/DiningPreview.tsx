import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { dining } from '../../data/dining'

export function DiningPreview() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        <SectionHeading
          heading="Meal Options"
          subheading={dining.intro}
          align="center"
          className="mb-14"
        />

        {/* Breakfast Showcase with Real Valdene Food Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C5]/40 mb-10">
          <div className="aspect-[4/3] lg:aspect-auto bg-[#F0EAE0] overflow-hidden">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/35ce1698-4661-439a-bfd0-aceabd11bb23-l.jpg?fit=1024%2C768&ssl=1"
              alt="Valdene Hotel Full English Breakfast"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2623] font-bold">
              Breakfast
            </h3>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              Start your day the right way with our hearty breakfast selection, served fresh to order each morning in our dining room.
            </p>
            <div className="bg-[#FAF7F2] p-5 rounded-md border border-[#D8D0C5]/60">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2B2623] font-semibold">
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Full English breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Light breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Vegetarian breakfast</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Cereals & fresh fruit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Evening Meals Card */}
        <div className="bg-white rounded-lg p-8 sm:p-10 shadow-sm border border-[#D8D0C5]/40 mb-10 text-center max-w-2xl mx-auto">
          <h4 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">Evening Meals</h4>
          <p className="text-base text-[#5C5650] leading-relaxed font-normal mb-4">
            {dining.eveningMeal.description}
          </p>
          <span className="text-xs text-[#7A2332] font-bold uppercase tracking-wider">Starters · Mains · Summer Salads</span>
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
