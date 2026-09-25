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

        {/* Breakfast Showcase with Real Valdene Food Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C5]/40 mb-12">
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

        {/* Evening Meals Showcase with Real Valdene Dining Room Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D0C5]/40 mb-12">
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-4 order-2 lg:order-1">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2623] font-bold">
              Evening Meals
            </h3>
            <p className="text-base text-[#5C5650] leading-relaxed font-normal">
              {dining.eveningMeal.description}
            </p>
            <div className="bg-[#FAF7F2] p-5 rounded-md border border-[#D8D0C5]/60">
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-[#2B2623] font-semibold">
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Starters</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Mains</li>
                <li className="flex items-center gap-2"><span className="text-[#7A2332]">✓</span> Summer Salads</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[4/3] lg:aspect-auto bg-[#F0EAE0] overflow-hidden order-1 lg:order-2">
            <img
              src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1"
              alt="Valdene Hotel Dining Room Space"
              className="w-full h-full object-cover object-center"
            />
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
