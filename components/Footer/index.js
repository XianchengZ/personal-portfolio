import React from 'react'
import Socials from '../Socials'

const Footer = ({}) => {
  return (
    <>
      <div className='mt-5 laptop:mt-40 p-2 laptop:p-0'>
        <div>
          <h1 className='text-2xl text-bold'>Contact.</h1>
          <Socials />
          <div className='mt-10'></div>
          <div className='mt-10'></div>
          <div className='mt-10'></div>
        </div>
      </div>
    </>
  )
}

export default Footer
