import { MessageCircle } from 'lucide-react'
import { applyUrl, contact } from '../../data/content'

const FloatingActions = () => {
  return (
    <>
      <a href={applyUrl} target="_blank" rel="noreferrer" className="fixed right-0 top-1/2 z-30 -translate-y-1/2 rounded-l-xl bg-saffron-400 px-2 py-4 text-xs sm:px-3 sm:py-6 sm:text-sm font-bold tracking-wide text-ink shadow-lg transition-colors hover:bg-saffron-500 [writing-mode:vertical-rl]">
        <span className="rotate-180 inline-block">APPLY NOW</span>
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110">
        <MessageCircle aria-hidden="true" size={28} />
      </a>
    </>
  )
}

export default FloatingActions
