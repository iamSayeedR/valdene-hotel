import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { rooms } from '../../data/rooms'

export function RoomsPreview() {
  const previewRooms = rooms.filter(r => ['room-6', 'room-4', 'room-7'].includes(r.id))

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        {/* Section Heading & Inline Amenities */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionHeading
              heading="Rooms"
              subheading="Comfortable ensuite accommodation in the heart of Blackpool."
            />
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-xs font-semibold text-[#5C5650]">
              <span>✓ Free Wi-Fi</span>
              <span>✓ Flat Screen TV</span>
              <span>✓ Comfortable Beds</span>
              <span>✓ Tea & Coffee Tray</span>
              <span>✓ In-Room Safe</span>
              <span>✓ Hairdryer</span>
            </div>
          </div>

          <Link
            to="/rooms"
            className="shrink-0 bg-[#7A2332] text-white px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-[#5C1A26] transition-colors shadow-xs"
          >
            View All Rooms →
          </Link>
        </div>

        {/* Tactile, Soft Rounded 3-Column Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewRooms.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group border border-[#D8D0C5]/40"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Clean Floor Tag - Top Left Only */}
                  <span className="absolute top-3 left-3 bg-[#2B2623]/85 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm font-bold">
                    {room.floor}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#7A2332] font-bold block mb-1">
                    {room.typeLabel}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#2B2623] mb-2 group-hover:text-[#7A2332] transition-colors">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>

                  <p className="text-sm text-[#5C5650] leading-relaxed mb-4 font-normal line-clamp-2">
                    {room.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="text-xs font-bold text-[#2B2623] mb-4 pb-3 border-b border-[#EBE5DC]">
                  {room.bed}
                </div>

                <Link
                  to={`/rooms/${room.slug}`}
                  className="inline-block bg-[#F4EFE6] text-[#2B2623] hover:bg-[#7A2332] hover:text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
