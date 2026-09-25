interface SectionHeadingProps { eyebrow?: string; heading: string; subheading?: string; align?: 'left' | 'center'; light?: boolean; className?: string }

export function SectionHeading({ eyebrow, heading, subheading, align = 'left', light = false, className = '' }: SectionHeadingProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const eyebrowColor = light ? 'text-amber-300' : 'text-[#7A2332]'
  const headingColor = light ? 'text-white' : 'text-[#1E1E1E]'
  const subColor = light ? 'text-white/80' : 'text-[#5C5650]'
  return (
    <div className={`${textAlign} ${className}`}>
      {eyebrow && <span className={`text-sm tracking-[0.2em] uppercase font-semibold block mb-4 ${eyebrowColor}`}>{eyebrow}</span>}
      <h2 className={`font-serif font-medium leading-[1.15] text-[2.5rem] sm:text-[2.75rem] md:text-[3.25rem] ${headingColor}`}>{heading}</h2>
      {subheading && <p className={`mt-5 text-lg md:text-xl leading-relaxed max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${subColor}`}>{subheading}</p>}
    </div>
  )
}
