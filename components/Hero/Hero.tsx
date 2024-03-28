import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <p className='text-center tamanho'>Have a question? We can help. *</p>
      <br />
      <div className="banner flex flex-col justify-center items-center tracking-wider">
        <span className="text-xl font-bold text-white">INTRODUCING</span>
        <h1 className="text-4xl font-normal text-white mb-1">THE SOLEIL</h1>
        <h3 className="text-2xl font-normal text-white mb-1">linen pant</h3>
        <p className="text-lg text-white">For vacation vibes, all the time...</p>
        <p className="text-lg text-white">In seven colors, plus stripes and polka dots</p>
        <Link className="text-lg text-white mb-1 border-b-4" href={''}>Get your pair</Link>
      </div>



    </>
  )
}

export default Hero