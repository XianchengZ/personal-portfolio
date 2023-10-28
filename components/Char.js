import { motion } from 'framer-motion'

const Char = ({ char, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, repeat: Infinity, repeatDelay: 10 }}
    >
      {char}
    </motion.span>
  )
}

export default Char
