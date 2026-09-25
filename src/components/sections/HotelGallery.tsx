import { SectionHeading } from '../ui/SectionHeading'

const galleryImages = [
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room_6_Main.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Superior Family Room',
    span: 'lg:col-span-8 aspect-[16/10]',
  },
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room4Main.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Ensuite Double Room',
    span: 'lg:col-span-4 aspect-[16/10]',
  },
  {
    src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1',
    alt: 'Valdene Hotel Bar and Lounge',
    span: 'lg:col-span-4 aspect-[16/10]',
  },
]

export function HotelGallery() {
  return (
    <section className="py-16 md:py-24 bg-[#F0EAE0]">
      <div className="site-container">
        <SectionHeading
          heading="Hotel Gallery"
          align="center"
          className="mb-10"
        />

        {/* Desktop: Large Featured Image Left, 2 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {galleryImages.map((img, i) => (
            <div key={i} className={`overflow-hidden border border-[#D8D0C5] bg-[#EBE5DC] ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  // Fallback image if network fails
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
