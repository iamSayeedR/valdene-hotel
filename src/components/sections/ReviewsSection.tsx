import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { reviews } from '../../data/reviews'
import { hotel } from '../../data/hotel'

export function ReviewsSection() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((p) => (p + 1) % reviews.length)
  const prev = () => setIdx((p) => (p - 1 + reviews.length) % reviews.length)
  const current = reviews[idx]

  return (
    <section className="py-20 md:py-28 bg-[#F0EAE0] border-t border-[#D8D0C5]">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <SectionHeading
          heading="Our Guests Love Us"
          subheading="Genuine reviews from guests who have stayed at the Valdene Hotel."
          align="center"
          className="mb-14"
        />

        <div className="bg-white p-8 sm:p-12 md:p-14 border border-[#D8D0C5] text-center shadow-sm">
          <span className="font-serif text-6xl text-[#7A2332] leading-none block mb-4 select-none">“</span>
          <blockquote className="font-serif text-xl sm:text-2xl md:text-[1.5rem] text-[#1E1E1E] italic leading-relaxed mb-8 max-w-[720px] mx-auto font-normal">
            {current.text}
          </blockquote>
          <div>
            <span className="text-sm font-bold text-[#1E1E1E] block">
              {current.author}
            </span>
            <span className="text-xs tracking-widest uppercase text-[#7A2332] font-semibold mt-1 block">
              Verified {current.source} Review
            </span>
          </div>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#EBE5DC]">
            <button
              onClick={prev}
              className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] hover:text-[#7A2332] transition-colors py-2 px-3"
              aria-label="Previous review"
            >
              ← Previous
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === idx ? 'bg-[#7A2332] w-7' : 'bg-[#D8D0C5] w-2.5'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] hover:text-[#7A2332] transition-colors py-2 px-3"
              aria-label="Next review"
            >
              Next →
            </button>
          </div>
        </div>

        <a
          href={hotel.social.tripadvisor}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 text-xs uppercase tracking-widest font-bold text-[#1E1E1E] hover:text-[#7A2332] transition-colors border-b-2 border-[#7A2332] pb-1"
        >
          Read All Guest Reviews on TripAdvisor ↗
        </a>
      </div>
    </section>
  )
}
