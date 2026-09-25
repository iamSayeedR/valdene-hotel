interface Destination {
  id: string
  name: string
  description: string
  image: string
  imageAlt: string
  externalUrl: string
}

interface DestinationCardProps {
  destination: Destination
  reverse?: boolean
}

export function DestinationCard({ destination, reverse = false }: DestinationCardProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 border-b border-[#DDD6CC] last:border-b-0`}>
      {/* Image */}
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="aspect-[4/3] bg-[#F0EAE0] overflow-hidden rounded-sm shadow-sm group">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`lg:col-span-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-2">Blackpool Attraction</span>
        <h3 className="font-serif text-2xl lg:text-3xl text-[#1E1E1E] mb-4">{destination.name}</h3>
        <p className="text-xs sm:text-sm text-[#6B6560] leading-relaxed mb-6">{destination.description}</p>
        <a
          href={destination.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#1E1E1E] text-[#1E1E1E] px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#1E1E1E] hover:text-white transition-all duration-200"
        >
          Find out more ↗
        </a>
      </div>
    </div>
  )
}
