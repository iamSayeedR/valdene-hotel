import { Link } from 'react-router-dom'
import { Room } from '../../data/rooms'
import { PrimaryButton } from '../ui/PrimaryButton'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="bg-white border border-[#D8D0C5] overflow-hidden flex flex-col group shadow-xs">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F0EAE0]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#2B2623]/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
          {room.floor}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] tracking-widest uppercase text-[#7A2332] font-bold block mb-1">
            {room.typeLabel}
          </span>

          <h3 className="font-serif text-xl font-bold text-[#2B2623] mb-2 leading-snug group-hover:text-[#7A2332] transition-colors">
            <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
          </h3>

          <p className="text-sm text-[#5C5650] leading-relaxed mb-4 font-normal line-clamp-2">
            {room.description}
          </p>
        </div>

        <div>
          <div className="border-t border-[#EBE5DC] pt-3 mb-4 flex flex-wrap gap-2 text-xs font-semibold text-[#2B2623]">
            <span className="bg-[#FAF7F2] px-2.5 py-1 border border-[#D8D0C5]">{room.bed}</span>
            <span className="bg-[#FAF7F2] px-2.5 py-1 border border-[#D8D0C5]">Ensuite</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Link
              to={`/rooms/${room.slug}`}
              className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors"
            >
              View Details →
            </Link>
            <PrimaryButton size="sm" className="font-bold" />
          </div>
        </div>
      </div>
    </article>
  )
}
