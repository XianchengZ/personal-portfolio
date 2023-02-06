import React from 'react'
import Button from '../Button'
import { toast } from 'react-toastify'

import yourData from '../../data/portfolio.json'

const Socials = ({ className }) => {
  const onClick = (key) => {
    if (key === 'email') {
      navigator.clipboard.writeText('andrewxzang@gmail.com')
      toast.success('Copied email to Clipboard!', {
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      navigator.clipboard.writeText('6472049535')
      toast.success('Copied phone number to Clipboard!', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  }
  return (
    <>
      <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
        {yourData.socials.map((social, index) => (
          <Button key={index} onClick={() => window.open(social.link)}>
            {social.title}
          </Button>
        ))}
      </div>
      <Button key={'email'} onClick={() => onClick('email')}>
        Email: andrewxzang@gmail.com
      </Button>
      <Button key={'phoneNumber'} onClick={() => onClick('phone')}>
        Phone Number: +1 (647) - 204 -9535
      </Button>
    </>
  )
}

export default Socials
