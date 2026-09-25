import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { PrimaryButton } from '../ui/PrimaryButton'
import { rooms } from '../../data/rooms'

export function RoomsPreview() {
  const heroRoom = rooms.find(r => r.id === 'room-6') || rooms[0]
  const supportingRooms = rooms.filter(r => ['room-4', 'room-7'].includes(r.id))

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="site-container">
        {/* Section Heading & Facilities List */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionHeading
              heading="Rooms"
              subheading="Comfortable ensuite accommodation in the heart of Blackpool."
            />
            {/* Small Amenity Details */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs font-semibold text-[#5C5650]">
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

        {/* Boutique Editorial Layout: Large Featured Room Left, 2 Supporting Rooms Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Featured Room */}
          <div className="lg:col-span-7 bg-white border border-[#D8D0C5] flex flex-col justify-between shadow-xs">
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0]">
                <img
                  src={heroRoom.image}
                  alt={heroRoom.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#2B2623] text-white text-[11px] uppercase tracking-widest px-3 py-1 font-bold">
                  Featured · {heroRoom.floor}
                </span>
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-[#7A2332] font-bold block mb-2">
                  {heroRoom.typeLabel}
                </span>
                <h3 className="font-serif text-2xl text-[#2B2623] font-bold mb-3">
                  <Link to={`/rooms/${heroRoom.slug}`} className="hover:text-[#7A2332] transition-colors">
                    {heroRoom.name}
                  </Link>
                </h3>
                <p className="text-[16px] text-[#5C5650] leading-relaxed font-normal mb-6">
                  {heroRoom.longDescription}
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 pt-4 border-t border-[#EBE5DC] flex items-center justify-between gap-4 flex-wrap">
              <span className="text-sm font-bold text-[#2B2623]">{heroRoom.bed}</span>
              <div className="flex items-center gap-4">
                <Link to={`/rooms/${heroRoom.slug}`} className="text-xs font-bold uppercase tracking-wider text-[#2B2623] hover:text-[#7A2332]">
                  View Details →
                </Link>
                <PrimaryButton size="sm" className="font-bold" />
              </div>
            </div>
          </div>

          {/* Supporting Rooms Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {supportingRooms.map((room) => (
              <div key={room.id} className="bg-white border border-[#D8D0C5] p-6 flex flex-col justify-between flex-1 shadow-xs group">
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-[#F0EAE0] mb-4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#7A2332] font-bold block mb-1">
                    {room.typeLabel}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#2B2623] mb-2 group-hover:text-[#7A2332] transition-colors">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h4>
                  <p className="text-sm text-[#5C5650] leading-relaxed line-clamp-2">
                    {room.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EBE5DC] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2B2623]">{room.bed}</span>
                  <Link to={`/rooms/${room.slug}`} className="text-xs font-bold uppercase tracking-wider text-[#2B2623] hover:text-[#7A2332]">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
