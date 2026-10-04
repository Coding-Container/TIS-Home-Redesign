import { motion } from 'framer-motion'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Wrap a group; children wrapped in <RevealItem> stagger in once the group enters the viewport.
export const RevealGroup = ({ as = 'div', className, children }) => {
  const Tag = motion[as]
  return (
    <Tag className={className} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </Tag>
  )
}

export const RevealItem = ({ as = 'div', className, children }) => {
  const Tag = motion[as]
  return <Tag className={className} variants={item}>{children}</Tag>
}
