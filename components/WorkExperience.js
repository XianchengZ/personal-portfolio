// import React from 'react'

// const ProjectResume = ({ dates, type, position, bullets }) => {
//   const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split('•'))

//   return (
//     <div className='mt-5 w-full flex mob:flex-col desktop:flex-row justify-between'>
//       <div className='text-lg w-2/5'>
//         <h2 className='text-xl font-bold'>{position}</h2>
//         <h2>{dates}</h2>
//         <h3 className='text-sm opacity-50'>{type}</h3>
//       </div>
//       <div className='w-3/5'>
//         {bulletsLocal && bulletsLocal.length > 0 && (
//           <ul className='list-disc'>
//             {bulletsLocal.map((bullet, index) => (
//               <li key={index} className='text-lg my-1'>
//                 {bullet}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ProjectResume

// import React from 'react'
// import { motion } from 'framer-motion'

// const WorkExperienceCard = ({ dates, type, position, bullets, logo }) => {
//   const bulletsLocal = bullets.split('•').filter((b) => b.trim() !== '')

//   return (
//     <motion.div
//       className='mt-5 w-full flex flex-col bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow'
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//     >
//       <div className='flex items-center mb-3'>
//         <div className='flex items-center justify-center w-16 h-16 bg-white rounded-md overflow-hidden mr-3'>
//           {logo && (
//             <img
//               src={logo}
//               alt={`${position} logo`}
//               className='max-w-full max-h-full'
//             />
//           )}
//         </div>

//         <div>
//           <h2 className='text-xl font-bold'>{position}</h2>
//           <h3 className='text-sm opacity-50'>{type}</h3>
//           <h3 className='text-sm'>{dates}</h3>
//         </div>
//       </div>
//       <ul className='list-disc pl-5'>
//         {bulletsLocal.map((bullet, index) => (
//           <li key={index} className='text-lg my-1'>
//             {bullet}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   )
// }

// export default WorkExperienceCard

import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const WorkExperienceCard = ({ dates, type, position, bullets, logo }) => {
  const bulletsLocal = bullets.split('•').filter((b) => b.trim() !== '')
  const { theme } = useTheme()

  return (
    <motion.div
      className={`mt-5 w-full flex flex-col p-4 justify-between rounded-lg shadow-lg transition-shadow 
                  ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} 
                  hover:shadow-xl hover:scale-120`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className='flex items-center mb-3'>
        <div
          className={`flex items-center justify-center w-16 h-16 rounded-md overflow-hidden mr-3 
                        ${theme === 'dark' ? 'text-transparent' : 'bg-white'}`}
        >
          {logo && (
            <img
              src={logo}
              alt={`${position} logo`}
              className='max-w-full max-h-full'
            />
          )}
        </div>

        <div>
          <h2 className='text-xl font-bold'>{position}</h2>
          <h3 className='text-sm opacity-50'>{type}</h3>
          <h3 className='text-sm'>{dates}</h3>
        </div>
      </div>
      <ul className='list-disc pl-5'>
        {bulletsLocal.map((bullet, index) => (
          <li key={index} className='text-lg my-1'>
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default WorkExperienceCard
