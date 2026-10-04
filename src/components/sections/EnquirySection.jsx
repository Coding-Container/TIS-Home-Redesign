import { useState } from 'react'
import { Mail, MapPin, Phone, PhoneCall } from 'lucide-react'
import { classes, contact, countryCodes, states } from '../../data/content'
import { RevealGroup, RevealItem } from '../animation/Reveal'

const initial = { name: '', email: '', code: '+91', mobile: '', otp: '', cls: '', state: '', consent: false }
const input = 'w-full rounded-lg bg-white/60 px-4 py-3 text-ink placeholder:text-ink/60 focus:bg-white'
const pill = 'min-h-[48px] rounded-lg bg-navy-900 px-6 font-bold text-white transition-opacity hover:opacity-80 disabled:opacity-40'

const validate = (f, verified) => {
  const e = {}
  if (!f.name.trim()) e.name = 'Enter your full name.'
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
  if (!/^\d{10}$/.test(f.mobile)) e.mobile = 'Enter a 10 digit mobile number.'
  else if (!verified) e.otp = 'Verify your mobile number with the OTP.'
  if (!f.cls) e.cls = 'Select a class.'
  if (!f.state) e.state = 'Select your state.'
  if (!f.consent) e.consent = 'Please accept to continue.'
  return e
}

const EnquirySection = () => {
  const [f, setF] = useState(initial)
  const [errors, setErrors] = useState({})
  const [otpSent, setOtpSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [done, setDone] = useState(false)

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const mobileOk = /^\d{10}$/.test(f.mobile)

  const sendOtp = () => {
    if (!mobileOk) return setErrors((p) => ({ ...p, mobile: 'Enter a 10 digit mobile number.' }))
    setErrors((p) => ({ ...p, mobile: undefined }))
    setOtpSent(true)
  }
  const verifyOtp = () => {
    if (/^\d{4,6}$/.test(f.otp)) { setVerified(true); setErrors((p) => ({ ...p, otp: undefined })) }
    else setErrors((p) => ({ ...p, otp: 'Enter the 4 to 6 digit OTP.' }))
  }
  const submit = (e) => {
    e.preventDefault()
    const found = validate(f, verified)
    setErrors(found)
    if (Object.keys(found).length === 0) setDone(true)
  }
  const Err = ({ k }) => (errors[k] ? <p role="alert" className="mt-1 text-sm font-semibold text-red-800">{errors[k]}</p> : null)

  return (
    <section id="enquire" className="relative z-10 -mt-24 px-4 pb-20">
      <RevealGroup className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-[2fr_3fr]">
        <RevealItem className="bg-white p-8 text-ink">
          <h2 className="font-serif text-2xl font-bold">Contact Us.</h2>
          <ul className="mt-6 space-y-5 text-[15px]">
            <li className="flex gap-4"><Phone aria-hidden="true" className="shrink-0 text-navy-700 dark:text-saffron-400" /><a href={contact.phoneHref}>Admission Helpline No. {contact.phoneDisplay}</a></li>
            <li className="flex gap-4"><Mail aria-hidden="true" className="shrink-0 text-navy-700 dark:text-saffron-400" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex gap-4"><MapPin aria-hidden="true" className="shrink-0 text-navy-700 dark:text-saffron-400" /><a href={contact.mapsLink} target="_blank" rel="noreferrer">{contact.address.replace('Tulas International School, ', 'Tulas International School ')}</a></li>
            <li className="flex gap-4"><PhoneCall aria-hidden="true" className="shrink-0 text-navy-700 dark:text-saffron-400" /><span>Landline No. {contact.landlines.map((l, i) => <span key={l.label}>{i > 0 && ', '}<a href={l.href}>{l.label}</a></span>)}</span></li>
          </ul>
          <img src="/img/logo.png" alt="" loading="lazy" className="ml-auto mt-8 h-24 w-24 rounded-full" />
        </RevealItem>

        <RevealItem className="bg-saffron-400 p-6 sm:p-8">
          {done ? (
            <div role="status" className="flex h-full flex-col items-center justify-center py-16 text-center text-ink">
              <h2 className="font-serif text-3xl font-bold">Thank you, {f.name.split(' ')[0]}.</h2>
              <p className="mt-3 max-w-sm">Our admissions team will call you on {f.code} {f.mobile} shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-4 text-ink">
              <h2 className="mx-auto w-fit border-b-2 border-ink font-serif text-xl font-bold">Enquire Now!</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="sr-only" htmlFor="name">Full name</label><input id="name" className={input} placeholder="Enter your Full Name...." value={f.name} onChange={set('name')} autoComplete="name" /><Err k="name" /></div>
                <div><label className="sr-only" htmlFor="email">Email (optional)</label><input id="email" type="email" className={input} placeholder="Enter Email Id (Optional)" value={f.email} onChange={set('email')} autoComplete="email" /><Err k="email" /></div>
              </div>
              <div className="flex flex-wrap gap-3">
                <label className="sr-only" htmlFor="code">Country code</label>
                <select id="code" className="min-h-[48px] w-24 rounded-lg bg-white/60 px-3 text-ink focus:bg-white" value={f.code} onChange={set('code')}>{countryCodes.map((c) => <option key={c}>{c}</option>)}</select>
                <div className="min-w-[180px] flex-1"><label className="sr-only" htmlFor="mobile">Mobile number</label><input id="mobile" inputMode="numeric" maxLength={10} className={input} placeholder="Enter your Mobile No...." value={f.mobile} onChange={(e) => setF((p) => ({ ...p, mobile: e.target.value.replace(/\D/g, '') }))} autoComplete="tel-national" /><Err k="mobile" /></div>
                <button type="button" onClick={sendOtp} className={pill}>{otpSent ? 'Resend OTP' : 'Send OTP'}</button>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="min-w-[180px] flex-1"><label className="sr-only" htmlFor="otp">OTP</label><input id="otp" inputMode="numeric" maxLength={6} className={input} placeholder="Enter OTP" disabled={!otpSent || verified} value={f.otp} onChange={set('otp')} /><Err k="otp" />{otpSent && !verified && <p className="mt-1 text-sm">Demo mode: enter any 4 to 6 digit code.</p>}</div>
                <button type="button" onClick={verifyOtp} disabled={!otpSent || verified} className={pill}>{verified ? 'Verified' : 'Verify OTP'}</button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="sr-only" htmlFor="cls">Class</label><select id="cls" className={input} value={f.cls} onChange={set('cls')}><option value="">Select Class</option>{classes.map((c) => <option key={c}>{c}</option>)}</select><Err k="cls" /></div>
                <div><label className="sr-only" htmlFor="state">State</label><select id="state" className={input} value={f.state} onChange={set('state')}><option value="">Select State</option>{states.map((s) => <option key={s}>{s}</option>)}</select><Err k="state" /></div>
              </div>
              <div>
                <label className="flex items-start gap-3 text-[15px]"><input type="checkbox" checked={f.consent} onChange={set('consent')} className="mt-1 h-5 w-5 shrink-0 accent-black" />I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun</label>
                <Err k="consent" />
              </div>
              <button type="submit" className={`${pill} mx-auto block px-10 text-lg`}>Enquire Now</button>
            </form>
          )}
        </RevealItem>
      </RevealGroup>
    </section>
  )
}

export default EnquirySection
