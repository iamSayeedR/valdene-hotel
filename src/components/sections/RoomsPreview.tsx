import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { rooms } from '../../data/rooms'

export function RoomsPreview() {
  const previewRooms = rooms.filter(r => ['room-6', 'room-4', 'room-7'].includes(r.id))

  return (
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container">
        {/* Section Heading & Inline Amenities List */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionHeading
              heading="Rooms"
              subheading="Comfortable ensuite accommodation in the heart of Blackpool."
            />
            {/* Inline Amenity List */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 text-xs font-semibold text-[#5C5650]">
              <span>✓ Free Wi-Fi</span>
              <span>✓ Flat Screen TV</span>
              <span>✓ Comfortable Beds</span>
              <span>✓ Tea & Coffee Tray</span>
              <span>✓ In-Room Safe</span>
              <span>✓ Hairdryer</span>
            </div>
          </div>

          <SecondaryButton to="/rooms" className="shrink-0 bg-white font-bold">
            View All Rooms →
          </SecondaryButton>
        </div>

        {/* Photography-Led 3-Column Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {previewRooms.map((room) => (
            <article key={room.id} className="flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0] mb-5 shadow-xs">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#2B2623]/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                    {room.floor}
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-[#7A2332] font-bold block mb-1.5">
                  {room.typeLabel}
                </span>

                <h3 className="font-serif text-2xl text-[#2B2623] font-bold mb-2 group-hover:text-[#7A2332] transition-colors">
                  <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                </h3>

                <p className="text-sm text-[#5C5650] leading-relaxed mb-4 font-normal line-clamp-2">
                  {room.description}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold text-[#2B2623] mb-4 pb-3 border-b border-[#D8D0C5]/60">
                  {room.bed}
                </div>

                <Link
                  to={`/rooms/${room.slug}`}
                  className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors inline-block"
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
