import { RevealGroup, RevealItem } from '../animation/Reveal'

const QuoteSection = () => (
  <section className="mx-auto max-w-6xl px-5 pb-20 pt-4">
    <RevealGroup className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
      <RevealItem>
        <blockquote className="font-serif text-2xl font-bold text-navy-800 dark:text-saffron-400 sm:text-3xl">“We feel supported in what we do and nudged further to do more”</blockquote>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed opacity-80">At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.</p>
      </RevealItem>
      <RevealItem><img src="/img/q-student.jpg" alt="Tulas student" loading="lazy" className="h-40 w-40 rounded-full border-8 border-saffron-400 object-cover" /></RevealItem>
    </RevealGroup>

    <RevealGroup className="mt-14 grid overflow-hidden rounded-3xl bg-navy-800 text-white md:grid-cols-2">
      <RevealItem className="flex flex-col justify-center p-8 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-saffron-400">Tula’s is…</p>
        <h2 className="mt-3 font-serif text-5xl font-black leading-[1.05] sm:text-6xl">
          Made for the <span className="italic text-saffron-400">future</span>
        </h2>
      </RevealItem>
      <RevealItem className="flex flex-col justify-center bg-navy-900/60 p-8 sm:p-12">
        <p className="font-serif text-xl font-bold text-saffron-400 sm:text-2xl">“Tulas helped me thrive and become the best version of myself”</p>
        <p className="mt-3 text-lg leading-relaxed text-white/85">When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.</p>
      </RevealItem>
    </RevealGroup>
  </section>
)

export default QuoteSection
