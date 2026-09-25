import { Link } from 'react-router-dom'
interface SecondaryButtonProps { to?: string; href?: string; onClick?: () => void; className?: string; children: React.ReactNode; light?: boolean }
export function SecondaryButton({ to, href, onClick, className = '', children, light = false }: SecondaryButtonProps) {
  const base = `inline-block border tracking-[0.1em] uppercase text-[13px] font-semibold px-8 py-3.5 transition-all duration-200 ${light ? 'border-white/80 text-white hover:bg-white hover:text-[#1E1E1E]' : 'border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E] hover:text-white'} ${className}`
  if (to) return <Link to={to} className={base}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base}>{children}</a>
  return <button onClick={onClick} className={base}>{children}</button>
}
