import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { SecondaryButton } from '../ui/SecondaryButton'
import { PrimaryButton } from '../ui/PrimaryButton'
import { rooms } from '../../data/rooms'

export function RoomsPreview() {
  const featuredRooms = rooms.filter(r => ['room-6', 'room-4', 'room-7'].includes(r.id))

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#D8D0C5]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            heading="Rooms"
            subheading="Every room features full ensuite bathroom facilities, flat screen TV with Freeview, free Wi-Fi, tea & coffee tray, safe, hairdryer, and central heating."
          />
          <SecondaryButton to="/rooms" className="shrink-0 bg-white">
            View All Rooms →
          </SecondaryButton>
        </div>

        {/* Responsive Room Grid: 3 Columns Desktop, 2 Columns Tablet, 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
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
                  <h3 className="font-serif text-2xl text-[#2B2623] font-bold mb-3 group-hover:text-[#7A2332] transition-colors">
                    <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>
                  <p className="text-[16px] text-[#5C5650] leading-relaxed mb-6 font-normal">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="bg-[#FAF7F2] text-[#2B2623] text-[12px] px-2.5 py-1 border border-[#D8D0C5] font-semibold">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-[#EBE5DC] flex items-center justify-between gap-3 flex-wrap">
                <Link
                  to={`/rooms/${room.slug}`}
                  className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors"
                >
                  View Details →
                </Link>
                <PrimaryButton size="sm" className="font-bold" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
