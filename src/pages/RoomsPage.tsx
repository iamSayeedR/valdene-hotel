import { useState } from 'react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { RoomCard } from '../components/rooms/RoomCard'
import { rooms } from '../data/rooms'
import { BookingCTA } from '../components/ui/BookingCTA'

export function RoomsPage() {
  const [filter, setFilter] = useState<'all' | 'double' | 'single' | 'twin' | 'family'>('all')

  const filteredRooms = filter === 'all' ? rooms : rooms.filter(r => r.type === filter)

  return (
    <div className="pt-32 pb-20 bg-[#FAF7F2]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <SectionHeading
          eyebrow="Accommodations"
          heading="Ensuite Rooms at Valdene Hotel"
          subheading="Explore our complete collection of 10 comfortable ensuite rooms. Every room features full ensuite bathroom facilities, flat screen TV with Freeview, free Wi-Fi, tea and coffee tray, safe, hairdryer, and central heating."
          align="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
          {[
            { key: 'all', label: 'All Rooms (10)' },
            { key: 'double', label: 'Double Rooms (3)' },
            { key: 'single', label: 'Single Rooms (2)' },
            { key: 'twin', label: 'Twin Rooms (2)' },
            { key: 'family', label: 'Family Rooms (3)' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                filter === tab.key
                  ? 'bg-[#7A2332] text-white shadow-sm'
                  : 'bg-white text-[#1E1E1E] border border-[#D8D0C5] hover:bg-[#F0EAE0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Rooms Grid (All 10 rooms) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>

      <BookingCTA subtext="Enquire directly with Bob & Linda for single, double, twin, or family room availability." />
    </div>
  )
}
