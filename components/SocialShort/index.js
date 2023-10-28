import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Socials = ({ className }) => {
  const onClick = (type) => {
    if (type === 'email') {
      navigator.clipboard.writeText('andrewxzang@gmail.com')
      toast.success('Copied email to Clipboard!')
    } else {
      navigator.clipboard.writeText('6472049535')
      toast.success('Copied phone number to Clipboard!')
    }
  }

  return (
    <div className={`${className} flex space-x-4 ml-10`}>
      <a
        href='https://www.linkedin.com/in/andrew-zang/'
        target='https://www.linkedin.com/in/andrew-zang/'
        rel='noopener noreferrer'
        className='text-2xl hover:text-blue-700 hover:scale-150 active:scale-100 duration-200'
      >
        <FaLinkedin />
      </a>
      <a
        href='https://github.com/XianchengZ'
        target='https://github.com/XianchengZ'
        rel='noopener noreferrer'
        className='text-2xl hover:text-gray-700 hover:scale-150 active:scale-100 duration-200'
      >
        <FaGithub />
      </a>
      <button
        onClick={() => onClick('email')}
        className='text-2xl hover:text-green-500 hover:scale-150 active:scale-100 duration-200'
      >
        <FaEnvelope />
      </button>
      <button
        onClick={() => onClick('phone')}
        className='text-2xl hover:text-green-500 hover:scale-150 active:scale-100 duration-200'
      >
        <FaPhone />
      </button>
    </div>
  )
}

export default Socials
