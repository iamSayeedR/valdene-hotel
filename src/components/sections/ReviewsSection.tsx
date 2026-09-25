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
    <section className="py-24 md:py-32 bg-[#FAF7F2]">
      <div className="site-container max-w-3xl text-center">
        <SectionHeading
          heading="Our Guests Love Us"
          subheading="Genuine reviews from guests who have stayed at Valdene Hotel."
          align="center"
          className="mb-12"
        />

        <div className="py-6">
          <p className="text-[#7A2332] text-lg font-bold mb-4">★★★★★</p>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#2B2623] italic leading-relaxed mb-6 font-normal max-w-2xl mx-auto">
            "{current.text}"
          </blockquote>
          <div className="mb-8">
            <span className="text-base font-bold text-[#2B2623] block">
              {current.author}
            </span>
            <span className="text-xs tracking-widest uppercase text-[#7A2332] font-semibold mt-1 block">
              Verified {current.source} Review
            </span>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-[#D8D0C5]">
            <button
              onClick={prev}
              className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors py-2 px-3"
              aria-label="Previous review"
            >
              ← Previous
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? 'bg-[#7A2332] w-6' : 'bg-[#D8D0C5] w-2'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors py-2 px-3"
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
          className="inline-block mt-8 text-xs uppercase tracking-widest font-bold text-[#2B2623] hover:text-[#7A2332] transition-colors border-b border-[#7A2332] pb-0.5"
        >
          Read All Guest Reviews on TripAdvisor ↗
        </a>
      </div>
    </section>
  )
}
