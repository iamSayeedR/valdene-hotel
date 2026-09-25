import { PrimaryButton } from '../ui/PrimaryButton'
import { SecondaryButton } from '../ui/SecondaryButton'

export function Hero() {
  return (
    <section className="relative min-h-[480px] md:min-h-[540px] py-16 md:py-24 flex items-center justify-center text-white overflow-hidden bg-[#2B2623]">
      {/* Full-Width Hotel Photography */}
      <div className="absolute inset-0">
        <img
          src="https://i0.wp.com/www.valdenehotelblackpool.com/wp-content/uploads/2021/03/Rooms_Cover.jpg?fit=1024%2C600&ssl=1"
          alt="Valdene Hotel Blackpool Exterior & Rooms"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Vignette Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2623]/90 via-[#2B2623]/60 to-[#2B2623]/40" />
      </div>

      {/* Hero Content inside Centered Container */}
      <div className="relative z-10 site-container text-center flex flex-col items-center">
        <h1 className="font-serif font-bold text-white text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] leading-[1.05] mb-5 drop-shadow-lg max-w-3xl">
          Valdene Hotel
        </h1>

        <p className="font-serif italic text-amber-100 text-xl sm:text-2xl md:text-[1.65rem] max-w-2xl mb-8 leading-snug drop-shadow-md font-normal">
          Award-winning family-run ensuite accommodation in the heart of Blackpool
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <SecondaryButton to="/offers" light className="w-full sm:w-auto min-w-[200px] text-sm px-8 py-3.5 bg-[#2B2623]/60 backdrop-blur-xs border-white/80 text-white hover:bg-white hover:text-[#2B2623] font-bold">
            View Special Offers
          </SecondaryButton>
          <PrimaryButton size="lg" className="w-full sm:w-auto min-w-[200px] text-sm px-8 py-3.5 shadow-md font-bold" />
        </div>
      </div>
    </section>
  )
}
