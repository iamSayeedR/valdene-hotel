import { Hero } from '../components/sections/Hero'
import { HotelIntro } from '../components/sections/HotelIntro'
import { RoomsPreview } from '../components/sections/RoomsPreview'
import { WhyValdene } from '../components/sections/WhyValdene'
import { DiningPreview } from '../components/sections/DiningPreview'
import { HotelGallery } from '../components/sections/HotelGallery'
import { ReviewsSection } from '../components/sections/ReviewsSection'
import { AwardsSection } from '../components/sections/AwardsSection'
import { LocationSection } from '../components/sections/LocationSection'
import { BookingCTA } from '../components/ui/BookingCTA'

export function HomePage() {
  return (
    <div>
      <Hero />
      <HotelIntro />
      <RoomsPreview />
      <WhyValdene />
      <DiningPreview />
      <HotelGallery />
      <ReviewsSection />
      <AwardsSection />
      <LocationSection />
      <BookingCTA subtext="Contact Bob & Linda directly for the best rates and personalized service." />
    </div>
  )
}
