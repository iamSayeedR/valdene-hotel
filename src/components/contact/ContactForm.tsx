import { useState, FormEvent } from 'react'
import { PrimaryButton } from '../ui/PrimaryButton'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div className="bg-white p-8 sm:p-12 border border-[#DDD6CC]/60 shadow-sm">
      <h3 className="font-serif text-2xl text-[#1E1E1E] mb-2">Send Us a Message</h3>
      <p className="text-xs text-[#6B6560] mb-8">
        Have a question or special enquiry? Fill in the form below and we will respond promptly.
      </p>

      {submitted ? (
        <div className="bg-[#FAF7F2] p-8 border border-[#7A2332]/30 text-center my-6">
          <span className="text-2xl text-[#7A2332] block mb-2">✓</span>
          <h4 className="font-serif text-xl text-[#1E1E1E] mb-2">Thank You!</h4>
          <p className="text-xs text-[#6B6560]">
            We've received your message. Bob & Linda will get back to you shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', message: '' }) }}
            className="mt-6 text-xs uppercase tracking-widest text-[#7A2332] font-medium underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#FAF7F2] border border-[#DDD6CC] px-4 py-3 text-xs text-[#1E1E1E] focus:border-[#7A2332] outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-[#DDD6CC] px-4 py-3 text-xs text-[#1E1E1E] focus:border-[#7A2332] outline-none transition-colors"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#FAF7F2] border border-[#DDD6CC] px-4 py-3 text-xs text-[#1E1E1E] focus:border-[#7A2332] outline-none transition-colors"
                placeholder="Optional contact number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#1E1E1E] font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#FAF7F2] border border-[#DDD6CC] px-4 py-3 text-xs text-[#1E1E1E] focus:border-[#7A2332] outline-none transition-colors"
              placeholder="Tell us about your planned stay or enquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7A2332] text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#5C1A26] transition-colors"
          >
            Submit Enquiry
          </button>
        </form>
      )}
    </div>
  )
}
