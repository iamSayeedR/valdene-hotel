import { bookingConfig } from '../../config/booking'
interface PrimaryButtonProps { className?: string; size?: 'sm' | 'md' | 'lg'; children?: React.ReactNode }
export function PrimaryButton({ className = '', size = 'md', children }: PrimaryButtonProps) {
  const sizes = { sm: 'px-6 py-3 text-[13px]', md: 'px-8 py-3.5 text-[13px]', lg: 'px-10 py-4 text-[14px]' }
  return (
    <a href={bookingConfig.url} target="_blank" rel="noopener noreferrer" className={`inline-block bg-[#7A2332] text-white tracking-[0.1em] uppercase font-semibold transition-colors duration-200 hover:bg-[#5C1A26] ${sizes[size]} ${className}`}>
      {children ?? bookingConfig.label}
    </a>
  )
}
