import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Stories = () => {
  return (
    <section className='mt-6 text-center'>
        <h1 className='font-with tamanhoStories ml-10'>More Stories</h1>
        <div className='flex flex-col md:flex-row justify-center gap-9 md:gap-8'>
            <div className="flex flex-col items-center">
                <Image src={'/stories1.webp'} width={300} height={60} alt='image1' className='w-full'/>
                <p className="text-center mt-2">A linen love storys</p>
                <Link className='border-b-4 text-black' href={''}>Shop the spring campaign</Link>
            </div>
            <div className="flex flex-col items-center">
                <Image src={'/stories2.webp'} width={300} height={60} alt='image2' className='w-full'/>
                <p className="text-center mt-2">Introducing the Crecuts LookBook</p>
                <Link className='border-b-4 border-x-cyan-800' href={''}>Shop the spring campaign</Link>
            </div>
            <div className="flex flex-col items-center">
                <Image src={'/stories3.webp'} width={300} height={60} alt='image3' className='w-full'/>
                <p className="text-center mt-2">Olympia`s picks</p>
                <Link className='border-b-4 text-black' href={''}>Shop the spring campaign</Link>
            </div>
        </div>
    </section>


  )
}

export default Stories