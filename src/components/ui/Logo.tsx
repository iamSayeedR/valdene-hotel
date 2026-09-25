import { Link } from 'react-router-dom'

interface LogoProps {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3.5 group shrink-0 py-1 ${className}`}>
      <img
        src="https://www.valdenehotelblackpool.com/wp-content/uploads/2021/03/StarRating_DarkBlue.png"
        alt="Valdene Hotel 3 Star Rating"
        className="h-7 sm:h-8 w-auto shrink-0"
      />
      <div className="flex flex-col shrink-0 leading-tight">
        <span
          className={`font-serif text-[22px] sm:text-[25px] font-bold tracking-tight leading-none transition-colors whitespace-nowrap ${
            light ? 'text-white group-hover:text-amber-200' : 'text-[#2B2623] group-hover:text-[#7A2332]'
          }`}
        >
          Valdene Hotel
        </span>
        <span
          className={`text-[10px] tracking-[0.22em] uppercase font-bold mt-1 whitespace-nowrap ${
            light ? 'text-amber-300' : 'text-[#7A2332]'
          }`}
        >
          EST. 1997 · BLACKPOOL
        </span>
      </div>
    </Link>
  )
}
