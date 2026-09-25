import { Link } from 'react-router-dom'
import { Room } from '../../data/rooms'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group border border-[#D8D0C5]/40">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0]">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 bg-[#2B2623]/85 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm font-bold">
            {room.floor}
          </span>
        </div>

        <div className="p-6">
          <span className="text-[11px] uppercase tracking-wider text-[#7A2332] font-bold block mb-1">
            {room.typeLabel}
          </span>

          <h3 className="font-serif text-xl font-bold text-[#2B2623] mb-2 leading-snug group-hover:text-[#7A2332] transition-colors">
            <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
          </h3>

          <p className="text-sm text-[#5C5650] leading-relaxed mb-4 font-normal line-clamp-2">
            {room.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="border-t border-[#EBE5DC] pt-3 mb-4 flex flex-wrap gap-2 text-xs font-semibold text-[#2B2623]">
          <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-sm border border-[#D8D0C5]">{room.bed}</span>
          <span className="bg-[#FAF7F2] px-2.5 py-1 rounded-sm border border-[#D8D0C5]">Ensuite</span>
        </div>

        <Link
          to={`/rooms/${room.slug}`}
          className="inline-block bg-[#F4EFE6] text-[#2B2623] hover:bg-[#7A2332] hover:text-white px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors"
        >
          View Details →
        </Link>
      </div>
    </article>
  )
}
