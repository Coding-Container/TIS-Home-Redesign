import { Building2, Dumbbell, HeartPulse, Percent, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const icons = { Building2, Dumbbell, HeartPulse, Percent, Facebook, Twitter, Linkedin, Instagram, Youtube }

const Icon = ({ name, className, size = 24 }) => {
  const Cmp = icons[name]
  return Cmp ? <Cmp aria-hidden="true" className={className} size={size} /> : null
}

export default Icon
