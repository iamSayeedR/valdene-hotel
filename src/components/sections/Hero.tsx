import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'

export function Hero() {
  return (
    <section className="relative h-[75vh] min-h-[520px] max-h-[700px] flex items-center justify-center text-white overflow-hidden bg-[#2B2623]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/Rooms_Cover.jpg?fit=1024%2C600&ssl=1"
          alt="Valdene Hotel Blackpool Exterior & Rooms"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2623]/90 via-[#2B2623]/50 to-[#2B2623]/45" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 text-center flex flex-col items-center py-10">
        <span className="text-xs font-bold tracking-[0.22em] uppercase text-amber-300 mb-4 bg-[#2B2623]/70 backdrop-blur-xs px-4 py-1.5 rounded-full border border-white/20">
          Est. 1997 · Blackpool
        </span>

        <h1 className="font-serif font-bold text-white text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[1.05] mb-5 drop-shadow-lg max-w-5xl">
          Valdene Hotel
        </h1>

        <p className="font-serif italic text-amber-100 text-xl sm:text-2xl md:text-[1.75rem] max-w-3xl mb-4 leading-snug drop-shadow-md font-normal">
          Ensuite accommodation in the heart of Blackpool
        </p>

        <p className="text-white/90 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal">
          16 Cocker Street — 5 minutes walk from Blackpool North station, Winter Gardens & North Pier.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <PrimaryButton size="lg" className="w-full sm:w-auto min-w-[210px] text-sm px-10 py-4 shadow-md font-bold" />
          <SecondaryButton to="/rooms" light className="w-full sm:w-auto min-w-[210px] text-sm px-9 py-4 bg-[#2B2623]/60 backdrop-blur-xs border-white/80 text-white hover:bg-white hover:text-[#2B2623] font-bold">
            Explore Rooms
          </SecondaryButton>
        </div>
      </div>
    </section>
  )
}
