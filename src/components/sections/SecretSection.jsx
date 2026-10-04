import { stats } from '../../data/content'
import { RevealGroup, RevealItem } from '../animation/Reveal'
import Counter from '../animation/Counter'
import Icon from '../ui/Icon'

const Photo = ({ src, alt, className = '' }) => <RevealItem className={`overflow-hidden ${className}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" /></RevealItem>
const Stat = ({ s }) => (
  <RevealItem className="flex flex-col items-center justify-center p-4 text-center">
    <Icon name={s.icon} size={64} className="text-saffron-500" />
    <p className="mt-4 text-4xl font-light sm:text-5xl">{s.text ?? <Counter value={s.value} suffix={s.suffix} />}</p>
    <p className="mt-1 text-sm font-medium uppercase tracking-wide opacity-75">{s.label}</p>
  </RevealItem>
)

const SecretSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <RevealGroup className="grid items-center gap-8 md:grid-cols-[auto_1fr]">
        <RevealItem><img src="/img/q-reader.jpg" alt="Student reading" loading="lazy" className="h-28 w-28 rounded-full object-cover" /></RevealItem>
        <div>
          <RevealItem as="h2" className="font-serif text-3xl font-black italic text-navy-800 dark:text-saffron-400 sm:text-4xl">At Tulas, we always ask, “What’s the secret to making school awesome?”</RevealItem>
          <RevealItem as="p" className="mt-5 text-lg leading-relaxed">The secret to making one&apos;s school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.</RevealItem>
          <RevealItem as="p" className="mt-4 text-lg text-navy-700 dark:text-saffron-400">There, we cracked it!</RevealItem>
        </div>
      </RevealGroup>

      <div className="my-10 h-0.5 bg-saffron-500" />
      <RevealGroup className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => <Stat key={s.label} s={s} />)}
        <Photo src="/img/c-run.jpg" alt="Students jogging together on the sports ground" className="col-span-2 aspect-[2/1] rounded-2xl" />
        <Photo src="/img/c-medical.jpg" alt="Doctor examining a student in the school infirmary" className="aspect-square rounded-2xl md:aspect-auto" />
        <Photo src="/img/c-guitar.jpg" alt="Students learning guitar in a music class" className="aspect-square rounded-2xl md:aspect-auto" />
      </RevealGroup>
      <div className="mt-10 h-0.5 bg-saffron-500" />
    </section>
  )
}

export default SecretSection
