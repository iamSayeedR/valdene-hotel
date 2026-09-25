import { Link } from 'react-router-dom'

interface BreadcrumbItem {
  label: string
  to?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs tracking-wide text-[#6B6560]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#DDD6CC]">/</span>}
          {item.to ? (
            <Link to={item.to} className="hover:text-[#7A2332] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1E1E1E]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
