// Special offers — update with current offers from the hotel
// No invented prices or dates are included here
export const offers: Offer[] = []

export interface Offer {
  id: string
  title: string
  description: string
  terms?: string
  image?: string
  imageAlt?: string
}

export const offersContactNote = 'For our latest special offers and packages, please contact us directly by phone or email and we\'ll be happy to help find the best option for your stay.'
