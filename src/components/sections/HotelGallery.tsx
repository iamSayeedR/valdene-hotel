import { useState, useEffect } from 'react'
import { SectionHeading } from '../ui/SectionHeading'

const galleryImages = [
  { src: '/images/gallery/front-entrance.jpg', alt: 'Valdene Hotel Front Entrance' },
  { src: '/images/gallery/street-view.jpg', alt: 'Valdene Hotel Street & Location' },
  { src: '/images/gallery/dining-room.jpg', alt: 'Hotel Dining Room' },
  { src: '/images/gallery/guest-lounge.jpg', alt: 'Guest Lounge Area' },
  { src: '/images/gallery/lounge-games.jpg', alt: 'Guest Lounge Arcade Games Table' },
  { src: '/images/gallery/lounge-seating.jpg', alt: 'Guest Lounge Seating Area' },
  { src: '/images/gallery/room-6-main.jpg', alt: 'Superior Triple Family Room 6' },
  { src: '/images/gallery/room-4-main.jpg', alt: 'Standard Double Room 4' },
  { src: '/images/gallery/room-2-main.jpg', alt: 'Superior Double Room 2' },
  { src: '/images/gallery/room-7-main.jpg', alt: 'Superior Single Room 7' },
]

export function HotelGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      nextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [currentIndex, isAutoPlaying])

  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="site-container">
        <SectionHeading
          heading="Hotel Gallery"
          subheading="Browse through our comfortable rooms and hotel guest spaces."
          align="center"
          className="mb-12"
        />

        {/* Clean Interactive Hotel Image Carousel */}
        <div
          className="relative max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-md border border-[#D8D0C5]/50 group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Viewport (Clean, No Text Overlay) */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EBE5DC]">
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
            />

            {/* Previous Arrow Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2B2623] hover:text-[#7A2332] p-3 rounded-full shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2B2623] hover:text-[#7A2332] p-3 rounded-full shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next photo"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="bg-[#FAF7F2] px-6 py-4 border-t border-[#D8D0C5]/40 flex items-center justify-center">
            <div className="flex items-center gap-2">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#7A2332]' : 'w-2.5 bg-[#D8D0C5] hover:bg-[#7A2332]/50'
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
