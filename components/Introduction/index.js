// import React from 'react'
import { motion } from 'framer-motion'

// const HeaderText = ({ text }) => {
//   return (
//   )
// }

// export default HeaderText

import React from 'react'
import Char from '../Char'

const HeaderText = ({ text }) => {
  const chars = text
    .split('')
    .map((char, index) => <Char key={index} char={char} index={index} />)

  return (
    <motion.div
      className='text-container text-center ml-10'
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.3, 1.1] }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
      }}
    >
      <div className='text-center text-3xl tablet:text-5xl laptop:text-5xl p-1 tablet:p-1 text-bold mob:w-full'>
        {chars}
      </div>
    </motion.div>
  )
}

export default HeaderText
