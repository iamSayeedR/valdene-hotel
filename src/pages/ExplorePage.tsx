import { SectionHeading } from '../components/ui/SectionHeading'
import { destinations } from '../data/destinations'
import { DestinationCard } from '../components/destinations/DestinationCard'
import { BookingCTA } from '../components/ui/BookingCTA'

export function ExplorePage() {
  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          eyebrow="Local Attractions"
          heading="Visit Blackpool"
          subheading="Valdene Hotel is conveniently situated close to Blackpool's most famous landmarks, theatres, piers, and entertainment venues."
          align="center"
        />
      </div>

      {/* Destinations List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      <BookingCTA subtext="Stay at the Valdene Hotel — your ideal base for exploring Blackpool." />
    </div>
  )
}
