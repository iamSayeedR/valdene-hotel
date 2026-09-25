import { SectionHeading } from '../ui/SectionHeading'

const galleryImages = [
  { src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room6Main_2.jpg?fit=1024%2C768&ssl=1', alt: 'Superior Triple Family Room', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/02/Room4Main.jpg?fit=1024%2C768&ssl=1', alt: 'Standard Double Room', span: '' },
  { src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/1bcf3958-1b02-406a-8bd1-c8ca16fc1b86-l.jpg?fit=1024%2C768&ssl=1', alt: 'Hotel Lounge', span: '' },
  { src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/35ce1698-4661-439a-bfd0-aceabd11bb23-l.jpg?fit=1024%2C768&ssl=1', alt: 'Guest Dining Room', span: '' },
  { src: 'https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/732fc899-1974-4591-9465-59553e9f4971-l.jpg?fit=1024%2C768&ssl=1', alt: 'Valdene Bar', span: 'md:col-span-2' },
]

export function HotelGallery() {
  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        <SectionHeading
          heading="A Glimpse Inside The Valdene"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className={`overflow-hidden group aspect-[4/3] ${img.span}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
