import { personalities } from '../../data/content'
import Avatar from '../ui/Avatar'
import ScrollRow from '../ui/ScrollRow'

const PersonalitiesSection = () => {
  return (
    <section className="bg-mist py-16 dark:bg-night-card">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-serif text-3xl font-black italic text-navy-800 dark:text-saffron-400 sm:text-4xl">Influential Personalities On Campus</h2>
        <p className="mt-4 text-xl opacity-80">Sports Person/Social Media Influencers</p>
      </div>
      <div className="mx-auto mt-8 max-w-[1400px]">
        <ScrollRow label="Influential personalities">
          {personalities.map((p) => (
            <article key={p.name} className="w-[80%] shrink-0 snap-start overflow-hidden rounded-lg border border-navy-800/30 dark:border-white/25 bg-white dark:bg-night sm:w-[300px]">
              {p.img ? <img src={p.img} alt={p.name} loading="lazy" className="aspect-[3/2] w-full object-cover" /> : <div className="flex aspect-[3/2] items-center justify-center bg-navy-800/10"><Avatar name={p.name} className="h-24 w-24" /></div>}
              <div className="p-4">
                <h3 className="font-bold text-navy-800 dark:text-saffron-400">{p.name}</h3>
                <p className="mt-1 text-[13px] italic leading-snug opacity-80">({p.text})</p>
              </div>
            </article>
          ))}
        </ScrollRow>
      </div>
    </section>
  )
}

export default PersonalitiesSection
