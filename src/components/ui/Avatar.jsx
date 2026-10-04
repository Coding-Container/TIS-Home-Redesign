const Avatar = ({ name, img, className = 'h-28 w-28' }) => {
  if (img) return <img src={img} alt={name} loading="lazy" className={`${className} rounded-full object-cover`} />
  const initials = name.split(' ').filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('')
  return (
    <span aria-hidden="true" className={`${className} flex items-center justify-center rounded-full bg-saffron-500 font-serif text-3xl font-bold text-ink`}>
      {initials}
    </span>
  )
}

export default Avatar
