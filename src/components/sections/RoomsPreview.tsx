import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { PrimaryButton } from '../ui/PrimaryButton'
import { rooms } from '../../data/rooms'

export function RoomsPreview() {
  const heroRoom = rooms.find(r => r.id === 'room-6') || rooms[0]
  const secondaryRooms = rooms.filter(r => ['room-4', 'room-7'].includes(r.id))

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            heading="Rooms"
            subheading="Every room features full ensuite bathroom facilities, flat screen TV with Freeview, free Wi-Fi, tea & coffee tray, safe, hairdryer, and central heating."
          />
          <SecondaryButton to="/rooms" className="shrink-0 bg-white">
            View All Rooms →
          </SecondaryButton>
        </div>

        {/* Primary Featured Room (Room 6) */}
        <div className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white border border-[#D8D0C5] overflow-hidden shadow-sm">
            <div className="lg:col-span-7 relative aspect-[16/10] bg-[#F0EAE0]">
              <img
                src={heroRoom.image}
                alt={heroRoom.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 bg-[#2B2623] text-white text-[11px] uppercase tracking-widest px-4 py-2 font-bold shadow-md">
                {heroRoom.floor}
              </span>
            </div>

            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.18em] text-[#7A2332] font-bold block mb-2">
                {heroRoom.typeLabel}
              </span>

              <h3 className="font-serif text-[1.65rem] md:text-[2rem] text-[#2B2623] mb-3 font-bold leading-tight">
                <Link to={`/rooms/${heroRoom.slug}`} className="hover:text-[#7A2332] transition-colors">
                  {heroRoom.name}
                </Link>
              </h3>

              <p className="text-[16px] text-[#5C5650] leading-relaxed mb-6 font-normal">
                {heroRoom.longDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {heroRoom.features.map((feat, i) => (
                  <span key={i} className="bg-[#FAF7F2] text-[#2B2623] text-[13px] px-3 py-1.5 border border-[#D8D0C5] font-semibold">
                    ✓ {feat}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-[#EBE5DC] flex items-center justify-between gap-4 flex-wrap">
                <PrimaryButton size="md" className="font-bold" />
                <Link
                  to={`/rooms/${heroRoom.slug}`}
                  className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Featured Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {secondaryRooms.map((room) => (
            <article key={room.id} className="bg-white border border-[#D8D0C5] overflow-hidden flex flex-col justify-between group shadow-xs">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#2B2623]/90 text-white text-[11px] uppercase tracking-widest px-3 py-1 font-bold">
                    {room.floor}
                  </span>
                </div>

                <div className="p-7">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#7A2332] font-bold block mb-2">
                    {room.typeLabel}
                  </span>
                  <h4 className="font-serif text-2xl text-[#2B2623] font-bold mb-3 group-hover:text-[#7A2332] transition-colors">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h4>
                  <p className="text-[16px] text-[#5C5650] leading-relaxed mb-6 font-normal">
                    {room.description}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-[#EBE5DC] flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[14px] text-[#2B2623] font-bold">{room.bed}</span>
                <Link
                  to={`/rooms/${room.slug}`}
                  className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors"
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
