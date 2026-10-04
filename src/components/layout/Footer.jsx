import { contact, footerLinks, socials, applyUrl, SITE } from '../../data/content'
import Icon from '../ui/Icon'

const btn = 'block min-h-[48px] rounded-lg bg-white px-6 py-3 text-center font-serif text-xl font-bold text-navy-800 transition-transform hover:-translate-y-0.5'

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden text-white">
      <img src="/img/footer-bg.jpg" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover blur-sm" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-900/80" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[280px_1fr_1fr_220px]">
        <iframe title="Map showing Tulas International School" src={contact.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-64 w-full rounded-2xl border-0 lg:h-72" />
        <address className="not-italic leading-8">
          <div className="mb-5 flex items-center gap-4"><img src="/img/logo.png" alt="" loading="lazy" className="h-20 w-20 rounded-full" /><p className="font-serif text-2xl font-bold leading-tight">Tula&apos;s International School</p></div>
          <a href={contact.mapsLink} target="_blank" rel="noreferrer" className="block hover:underline">{contact.address}</a>
          <p>Landline No. {contact.landlines.map((l, i) => <span key={l.label}>{i > 0 && ', '}<a href={l.href} className="hover:underline">{l.label}</a></span>)}</p>
          <p>Admission Helpline No. <a href={contact.phoneHref} className="hover:underline">{contact.phone}</a></p>
          <a href={`mailto:${contact.email}`} className="inline-block border-b border-white pb-1 hover:text-saffron-400">{contact.email}</a>
        </address>
        <nav aria-label="Footer"><ul className="space-y-1">
          {footerLinks.map((l) => <li key={l.label}><a href={l.href} target="_blank" rel="noreferrer" className="inline-block py-1.5 text-lg hover:text-saffron-400">{l.label}</a></li>)}
        </ul></nav>
        <div className="space-y-4">
          <a href={`${SITE}/virtual-tour/`} target="_blank" rel="noreferrer" className={btn}>Virtual Tour</a>
          <a href={applyUrl} target="_blank" rel="noreferrer" className={btn}>Apply Now</a>
          <a href="https://tis.fedena.com/" target="_blank" rel="noreferrer" className={btn}>Fedena Login</a>
        </div>
      </div>
      <div className="px-6 pb-10 text-center">
        <p>Copyright © {new Date().getFullYear()} Tulas International School, Dehradun | All Rights Reserved</p>
        <p>Designed and Managed By <a href="https://netpuppys.com" target="_blank" rel="noreferrer" className="hover:underline">NetPuppys</a></p>
        <ul className="mt-5 flex justify-center gap-3">
          {socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-navy-800 transition-transform hover:scale-110"><Icon name={s.icon} size={20} /></a></li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
