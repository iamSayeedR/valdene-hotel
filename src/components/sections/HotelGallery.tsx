import { SectionHeading } from '../ui/SectionHeading'

const galleryImages = [
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room_6_Main.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Superior Family Room',
  },
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room4Main.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Ensuite Double Room',
  },
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Bar and Lounge',
  },
]

export function HotelGallery() {
  return (
    <section className="py-24 md:py-32 bg-[#F0EAE0]">
      <div className="site-container">
        <SectionHeading
          heading="Hotel Gallery"
          align="center"
          className="mb-12"
        />

        {/* Balanced 3-Column Photography Grid with Soft Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((img, i) => (
            <div key={i} className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EBE5DC] shadow-sm hover:shadow-md transition-shadow">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/space-2.jpg?fit=812%2C608&ssl=1'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
