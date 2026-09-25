import { Link } from 'react-router-dom'

interface SecondaryButtonProps {
  to?: string
  href?: string
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SecondaryButton({
  to,
  href,
  children,
  className = '',
  light = false,
}: SecondaryButtonProps) {
  const baseClasses = `inline-block uppercase tracking-[0.1em] text-[13px] font-bold px-6 py-3 rounded-md transition-all duration-200 ${className}`

  const styleClasses = light
    ? 'bg-[#2B2623]/60 text-white border border-white/40 hover:bg-white hover:text-[#2B2623] backdrop-blur-xs'
    : 'bg-white text-[#2B2623] border border-[#D8D0C5] hover:bg-[#7A2332] hover:text-white hover:border-[#7A2332] shadow-xs'

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${styleClasses}`}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={`${baseClasses} ${styleClasses}`}>
      {children}
    </a>
  )
}
