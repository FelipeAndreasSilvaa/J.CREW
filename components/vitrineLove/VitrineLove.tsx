import React from 'react'
import Image from 'next/image'

const VitrineLove = () => {
  return (
    <section className='mt-20 text-center'>
    <h1 className='font-with tamanhoStories ml-10'>You`ll Also Love</h1>
    <div className='flex flex-col md:flex-row justify-center gap-9 md:gap-8'>
        <div className="flex flex-col items-center">
            <Image src={'/stories1.webp'} width={300} height={60} alt='image1' className='w-full'/>
        </div>
        <div className="flex flex-col items-center">
            <Image src={'/stories2.webp'} width={300} height={60} alt='image2' className='w-full'/>
        </div>
        <div className="flex flex-col items-center">
            <Image src={'/stories3.webp'} width={300} height={60} alt='image3' className='w-full'/>
        </div>
        <div className="flex flex-col items-center">
            <Image src={'/stories1.webp'} width={300} height={60} alt='image1' className='w-full'/>
        </div>
        <div className="flex flex-col items-center">
            <Image src={'/stories2.webp'} width={300} height={60} alt='image2' className='w-full'/>
        </div>
    </div>
</section>

  )
}

export default VitrineLove