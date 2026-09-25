import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF7F2] px-6 text-center py-24">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#7A2332] font-medium block mb-3">404 Error</span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#1E1E1E] mb-4">Page Not Found</h1>
        <p className="text-xs text-[#6B6560] max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#7A2332] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-[#5C1A26] transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
