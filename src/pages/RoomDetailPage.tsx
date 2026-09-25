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
      <div className="site-container mb-8">
        <Breadcrumb
          items={[
            { label: 'Home', to: '/' },
            { label: 'Rooms', to: '/rooms' },
            { label: room.name },
          ]}
        />
      </div>

      <div className="site-container mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <RoomGallery images={room.galleryImages} title={room.name} />
          </div>

          {/* Right Column: Room Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#7A2332] font-bold mb-3">
                <span>{room.typeLabel}</span>
                <span>•</span>
                <span>{room.floor}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#2B2623] font-bold mb-5">{room.name}</h1>

              <p className="text-base text-[#5C5650] leading-relaxed mb-6 font-normal">
                {room.longDescription}
              </p>

              {/* Quick Spec Box */}
              <div className="bg-white p-6 border border-[#D8D0C5] mb-6 space-y-2.5 shadow-xs">
                <div className="flex justify-between text-xs py-1 border-b border-[#EBE5DC]">
                  <span className="text-[#5C5650]">Bed Configuration:</span>
                  <span className="font-bold text-[#2B2623]">{room.bed}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-[#EBE5DC]">
                  <span className="text-[#5C5650]">Occupancy:</span>
                  <span className="font-bold text-[#2B2623]">
                    {room.adults} Adult{room.adults > 1 ? 's' : ''} {room.children > 0 ? `+ ${room.children} Child` : ''}
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#5C5650]">Location:</span>
                  <span className="font-bold text-[#2B2623]">{room.floor}</span>
                </div>
              </div>

              {/* Amenities List */}
              <div className="mb-6">
                <h3 className="font-serif text-lg text-[#2B2623] font-bold mb-3">Room Amenities</h3>
                <AmenityList amenities={room.amenities} />
              </div>
            </div>

            {/* Action Box */}
            <div className="pt-6 border-t border-[#D8D0C5]">
              <PrimaryButton size="lg" className="w-full text-center mb-3 font-bold" />
              <p className="text-xs text-[#5C5650] text-center font-normal">
                Questions about this room? Call us on{' '}
                <a href="tel:+441253291080" className="underline font-bold text-[#2B2623] hover:text-[#7A2332]">
                  (+44) 01253 291 080
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Rooms */}
      <div className="site-container py-14 border-t border-[#D8D0C5]">
        <h2 className="font-serif text-2xl text-[#2B2623] font-bold mb-8">Other Rooms You May Like</h2>
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
