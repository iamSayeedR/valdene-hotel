import { useState } from 'react'

interface RoomGalleryProps {
  images: string[]
  title: string
}

export function RoomGallery({ images, title }: RoomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '')

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="aspect-[4/3] bg-[#F0EAE0] rounded-sm overflow-hidden border border-[#DDD6CC] shadow-sm">
        <img
          src={selectedImage}
          alt={`${title} main view`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails if multiple images */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-24 aspect-[4/3] rounded-sm overflow-hidden border-2 shrink-0 transition-all ${
                selectedImage === img ? 'border-[#7A2332]' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`${title} view ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
