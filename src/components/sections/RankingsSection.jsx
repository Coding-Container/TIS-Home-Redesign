import { Trophy } from 'lucide-react'
import { rankings } from '../../data/content'
import { RevealGroup, RevealItem } from '../animation/Reveal'

const RankingsSection = () => {
  return (
    <section aria-labelledby="rank-title" className="bg-mist px-5 py-14 dark:bg-night-card">
      <RevealGroup className="mx-auto grid max-w-6xl items-stretch gap-4 lg:grid-cols-[220px_1fr]">
        <RevealItem className="flex flex-col items-center justify-center rounded-xl border-2 border-navy-800 dark:border-saffron-500 bg-white p-6 text-center dark:bg-night">
          <Trophy aria-hidden="true" size={72} className="text-navy-800 dark:text-saffron-400" strokeWidth={1.5} />
          <h2 id="rank-title" className="mt-3 font-serif text-2xl font-black italic text-navy-800 dark:text-saffron-400">Our Rankings</h2>
          <p className="font-semibold">Top Boarding School</p>
        </RevealItem>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {rankings.map((r) => (
            <RevealItem as="li" key={r.place + r.rank} className="rounded-xl bg-navy-800 p-5 text-center text-white dark:bg-navy-900 transition-transform hover:-translate-y-1">
              <p className="font-serif text-4xl font-black text-saffron-400">{r.rank}</p>
              <p className="font-serif text-2xl font-black italic">{r.place}</p>
              <p className="mt-1 text-[15px] leading-snug">{r.text}</p>
            </RevealItem>
          ))}
        </ul>
      </RevealGroup>
    </section>
  )
}

export default RankingsSection
