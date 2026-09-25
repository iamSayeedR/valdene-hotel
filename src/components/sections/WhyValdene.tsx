import { SectionHeading } from '../ui/SectionHeading'

const features = [
  {
    number: '01',
    title: 'Family-Run Since 1997',
    description: 'Personalized service, warm hospitality, and attentive care from hosts Bob & Linda throughout your stay in Blackpool.',
  },
  {
    number: '02',
    title: 'Cocker Street Location',
    description: 'Situated on Cocker Street, just a 5-minute walk to Blackpool North train station, Winter Gardens, North Pier Promenade, and seafront attractions.',
  },
  {
    number: '03',
    title: 'Ensuite Accommodation',
    description: 'Every single, double, twin, and family room features full ensuite bathroom facilities with LED mirrors, flat screen Freeview TV, free Wi-Fi, in-room safe, hairdryer, and tea tray.',
  },
  {
    number: '04',
    title: 'Breakfast & Licensed Bar',
    description: 'Tuck into our freshly prepared breakfast options, evening meals, licensed bar, and retro 1980s tabletop games machine.',
  },
]

export function WhyValdene() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0] border-t border-[#D8D0C5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeading
          heading="The Valdene Experience"
          subheading="Providing clean and comfortable Blackpool seaside accommodation since 1997."
          align="center"
          className="mb-16"
        />

        <div className="space-y-0">
          {features.map((f, i) => (
            <div
              key={f.number}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-12 ${
                i !== 0 ? 'border-t border-[#D8D0C5]' : ''
              }`}
            >
              <div className="md:col-span-1">
                <span className="font-serif text-[3rem] md:text-[3.5rem] font-bold text-[#7A2332] leading-none">
                  {f.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] text-[#2B2623] font-bold leading-snug">
                  {f.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-[17px] text-[#5C5650] leading-[1.75] font-normal">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
