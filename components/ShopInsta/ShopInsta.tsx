import React from 'react'
import Image from 'next/image'
import Slider from '../Slider/Slider'

const Banner = () => {
  return (
    <div className='mt-20 text-center'>
      <h1 className='bannerH1'>Shop our Instagram</h1>
      <p className='bannerP'>(and join the fun with #injcrew)</p>
      <Slider />
    </div>
     

  )
}

export default Banner