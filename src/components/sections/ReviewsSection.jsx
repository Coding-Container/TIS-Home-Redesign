import { reviews } from '../../data/content'
import Avatar from '../ui/Avatar'
import ScrollRow from '../ui/ScrollRow'
import Scribble from '../ui/Scribble'

const ReviewsSection = () => {
  return (
    <section className="relative isolate overflow-hidden py-16 text-ink">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-800 to-navy-900" />
      <h2 className="text-center font-serif text-4xl font-black italic text-white">Google Reviews</h2>
      <Scribble className="mt-1 text-white" width={160} />
      <div className="mx-auto mt-8 max-w-[1400px]">
        <ScrollRow label="Google reviews" arrowClass="bg-saffron-500 text-navy-900">
          {reviews.map((r) => (
            <article key={r.name} className="flex w-[85%] shrink-0 snap-start flex-col items-center rounded-2xl bg-white p-6 text-center sm:w-[340px]">
              <Avatar name={r.name} img={r.img} />
              <h3 className="mt-3 text-xl font-bold">{r.name}</h3>
              <p className="text-sm font-bold">{r.rel}</p>
              <p className="mt-3 text-[15px] leading-relaxed">{r.text}</p>
            </article>
          ))}
        </ScrollRow>
      </div>
    </section>
  )
}

export default ReviewsSection
