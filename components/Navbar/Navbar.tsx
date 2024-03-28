"use client"
import  React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Shop from '../icons/shop'

const Navbar = () => {
  
    const [isClick, setIsClick] = useState(false)

    const toggleNavbar = (): void =>{
      setIsClick(!isClick)
    }

  return (
    <nav>
    <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} width={150} height={150} alt='oi' />
                    </Link> 
                </div>{/**flex-shrink-0*/}
            </div>{/**flex items-center*/}
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                <Link className='font-normal tamanho ' href=''>Home</Link>
                <Link className='font-normal tamanho' href=''>New</Link>
                <Link className='font-normal tamanho' href=''>Women</Link>
                <Link className='font-normal tamanho' href=''>Men</Link>
                <Link className='font-normal tamanho' href=''>Kids</Link>
                <Link className='font-normal tamanho' href=''>Swim</Link>
                <Link className='font-normal tamanho' href=''>Cashmere</Link>
                <Link className='font-normal tamanho' href=''>Sale</Link>
                <input className='border border-gray-700 outline-none spacee h-8' type="text" placeholder='Search J.Crew' />
                <Link className='tamanho' href={''}>Sig In</Link>
                </div>{/** ml-4 flex items-center space-x-4" */}
            </div>{/** hidden md:block" */}
            <div className="md:hidden flex items-center">
                <button className='inline-flex items-center justify-center p-2 rounded-md text-black md:text-black hover:text-black focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-black' onClick={toggleNavbar}>
                    {isClick ? (
                        <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                            <path strikethroughPosition='round'
                            strokeLinecap='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6L12 12' />
                        </svg>
                    ): (
                        <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg"
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                            <path strikethroughPosition='round'
                            strokeLinecap='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16m-7 6h7' />
                        </svg>
                    )}
                </button>
            </div>
        </div>{/**flex items-center justify-between h-16*/}
    </div>{/**max-w7xl mx-auto px-4 sm:px-6 lg:px-8 */}
    {isClick && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-3 sm:px-2 ">
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Home</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>New</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Women</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Men</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Kids</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Swim</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Cashmere</Link>
                <Link className='font-normal tamanho block text-center border border-gray-200' href=''>Sale</Link>
                <Link className='tamanho text-center block border border-gray-200' href={''}>Sig In</Link>
            </div>
        </div>
    )}
</nav>


  )
}

export default Navbar