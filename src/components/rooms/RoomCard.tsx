import { Link } from 'react-router-dom'
import { Room } from '../../data/rooms'
import { PrimaryButton } from '../ui/PrimaryButton'

interface RoomCardProps {
  room: Room
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="bg-white border border-[#D8D0C5] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:border-[#7A2332]/50">
      <div className="relative aspect-[16/11] overflow-hidden bg-[#F0EAE0]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-[#1E1E1E]/95 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
          {room.floor}
        </div>
      </div>

      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#7A2332] font-bold mb-2">
            <span>{room.typeLabel}</span>
          </div>

          <h3 className="font-serif text-2xl text-[#1E1E1E] font-semibold mb-3 leading-snug group-hover:text-[#7A2332] transition-colors">
            <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
          </h3>

          <p className="text-sm text-[#5C5650] leading-relaxed mb-6 font-normal">
            {room.description}
          </p>
        </div>

        <div>
          <div className="border-t border-[#EBE5DC] pt-4 mb-6 flex flex-wrap gap-2 text-xs font-semibold text-[#1E1E1E]">
            <span className="bg-[#FAF7F2] px-2.5 py-1 border border-[#D8D0C5]">{room.bed}</span>
            <span className="bg-[#FAF7F2] px-2.5 py-1 border border-[#D8D0C5]">Ensuite Facilities</span>
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <Link
              to={`/rooms/${room.slug}`}
              className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] hover:text-[#7A2332] transition-colors"
            >
              View Details →
            </Link>
            <PrimaryButton size="sm" />
          </div>
        </div>
      </div>
    </article>
  )
}
