import { parentVideos, SITE } from '../../data/content'
import { RevealGroup, RevealItem } from '../animation/Reveal'

const ParentsSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <RevealGroup className="text-center">
        <RevealItem as="h2" className="font-serif text-4xl font-black italic text-navy-800 dark:text-saffron-400">From The Parents</RevealItem>
        <RevealItem as="p" className="mx-auto mt-5 max-w-3xl text-xl font-light leading-relaxed">“We have seen a remarkable improvement in our child&apos;s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.”</RevealItem>
      </RevealGroup>
      <RevealGroup as="ul" className="mt-10 grid gap-4 md:grid-cols-3">
        {parentVideos.map((src, i) => (
          <RevealItem as="li" key={src}>
            <video controls preload="none" playsInline aria-label={`Parent testimonial video ${i + 1}`} className="aspect-video w-full rounded-2xl bg-navy-900"><source src={src} type="video/mp4" /></video>
          </RevealItem>
        ))}
      </RevealGroup>
      <RevealGroup className="mt-16 overflow-hidden rounded-3xl bg-navy-800 p-8 text-center text-white sm:p-12">
        <RevealItem as="p" className="text-2xl font-extrabold uppercase">Dive into our...</RevealItem>
        <RevealItem as="h2" className="text-5xl font-extrabold uppercase sm:text-7xl">Virtual <span className="font-serif font-black normal-case italic text-saffron-400">Tour</span></RevealItem>
        <RevealItem><a href={`${SITE}/virtual-tour/`} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[48px] items-center rounded-full bg-white px-8 font-bold text-navy-800 transition-transform hover:-translate-y-0.5">Start the tour</a></RevealItem>
      </RevealGroup>
    </section>
  )
}

export default ParentsSection
