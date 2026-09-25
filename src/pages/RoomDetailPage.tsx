import { useParams, Navigate } from 'react-router-dom'
import { getRoomBySlug, rooms } from '../data/rooms'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { RoomGallery } from '../components/rooms/RoomGallery'
import { AmenityList } from '../components/rooms/AmenityList'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { BookingCTA } from '../components/ui/BookingCTA'
import { RoomCard } from '../components/rooms/RoomCard'

export function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const room = slug ? getRoomBySlug(slug) : undefined

  if (!room) {
    return <Navigate to="/rooms" replace />
  }

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3)

  return (
    <div className="pt-28 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Rooms', to: '/rooms' },
            { label: room.name },
          ]}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <RoomGallery images={room.galleryImages} title={room.name} />
          </div>

          {/* Right Column: Room Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#7A2332] font-medium mb-3">
                <span>{room.type}</span>
                <span>•</span>
                <span>{room.floor}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#1E1E1E] mb-6">{room.name}</h1>

              <p className="text-sm text-[#6B6560] leading-relaxed mb-8">
                {room.longDescription}
              </p>

              {/* Quick Spec Box */}
              <div className="bg-white p-6 border border-[#DDD6CC] mb-8 space-y-3">
                <div className="flex justify-between text-xs py-1 border-b border-[#EDE8E1]">
                  <span className="text-[#6B6560]">Bed Configuration:</span>
                  <span className="font-medium text-[#1E1E1E]">{room.bed}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-[#EDE8E1]">
                  <span className="text-[#6B6560]">Occupancy:</span>
                  <span className="font-medium text-[#1E1E1E]">
                    {room.adults} Adult{room.adults > 1 ? 's' : ''} {room.children > 0 ? `+ ${room.children} Child` : ''}
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#6B6560]">Location:</span>
                  <span className="font-medium text-[#1E1E1E]">{room.floor}</span>
                </div>
              </div>

              {/* Amenities List */}
              <div className="mb-8">
                <h3 className="font-serif text-lg text-[#1E1E1E] mb-4">Room Amenities</h3>
                <AmenityList amenities={room.amenities} />
              </div>
            </div>

            {/* Action Box */}
            <div className="pt-6 border-t border-[#DDD6CC]">
              <PrimaryButton size="lg" className="w-full text-center mb-3" />
              <p className="text-[11px] text-[#6B6560] text-center">
                Questions about this room? Call us on{' '}
                <a href="tel:+441253291080" className="underline hover:text-[#7A2332]">
                  (+44) 01253 291 080
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Rooms */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 border-t border-[#DDD6CC]">
        <h2 className="font-serif text-2xl text-[#1E1E1E] mb-8">Other Rooms You May Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherRooms.map((r) => (
            <RoomCard key={r.id} room={r} />
          ))}
        </div>
      </div>

      <BookingCTA />
    </div>
  )
}
