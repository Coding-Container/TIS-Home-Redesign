import { collaborations } from '../../data/content'

const CollaborationsSection = () => {
  const loop = [...collaborations, ...collaborations]
  return (
    <section aria-labelledby="collab-title" className="overflow-hidden py-16">
      <h2 id="collab-title" className="text-center text-3xl font-extrabold uppercase text-navy-800 dark:text-saffron-400 sm:text-4xl">12+ <span className="font-serif font-black italic">Collaborations</span></h2>
      <div className="group mt-10">
        <ul className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
          {loop.map((c, i) => (
            <li key={c.name + i} aria-hidden={i >= collaborations.length} className="shrink-0 rounded-lg bg-white p-2"><img src={c.img} alt={i < collaborations.length ? c.name : ''} loading="lazy" className="h-24 w-auto object-contain" /></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CollaborationsSection
