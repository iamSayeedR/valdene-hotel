import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className = '' }: LogoProps) {
  const colorClass = light ? 'text-white' : 'text-[#2A333F]'
  const subColorClass = light ? 'text-amber-300 border-white/30' : 'text-[#2A333F]/80 border-[#2A333F]/30'
  const lineClass = light ? 'bg-white/40' : 'bg-[#2A333F]/40'

  return (
    <Link to="/" className={`inline-flex flex-col items-center group py-1 ${className}`}>
      {/* Centered 3 Stars */}
      <img
        src="https://www.valdenehotelblackpool.com/wp-content/uploads/2021/03/StarRating_DarkBlue.png"
        alt="Valdene Hotel 3 Star Rating"
        className="h-4 sm:h-5 w-auto mb-1 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {/* Main Title: VALDENE HOTEL */}
      <span
        className={`font-serif text-[20px] sm:text-[24px] font-bold tracking-[0.12em] uppercase leading-none transition-colors ${
          light ? 'group-hover:text-amber-200' : 'group-hover:text-[#7A2332]'
        } ${colorClass}`}
      >
        Valdene Hotel
      </span>

      {/* Subtitle: ─── Est 1997 ─── */}
      <div className={`flex items-center justify-center gap-2 mt-1 w-full text-[11px] font-serif ${subColorClass}`}>
        <span className={`h-[1px] w-6 sm:w-8 ${lineClass}`} />
        <span className="tracking-wider">Est 1997</span>
        <span className={`h-[1px] w-6 sm:w-8 ${lineClass}`} />
      </div>
    </Link>
  )
}
