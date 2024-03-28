import Link from 'next/link'
import React from 'react'

const ShopNew = () => {
  return (
    <>
        <div className='mt-5 text-center flex flex-wrap justify-center gap-4'>
          <h1 className='font-normal tamanhoH1 w-full'>Shop New Arrivals</h1>
          <span className='border font-bold border-gray-500 box_tamanho cursor-pointer tamanho hover:bg-slate-400 transition-all w-full md:w-auto md:max-w-xs lg:max-w-none'>Shop Women</span>
          <span className='border font-bold border-gray-500 box_tamanho cursor-pointer tamanho hover:bg-slate-400 transition-all w-full md:w-auto md:max-w-xs lg:max-w-none'>Shop Men</span>
          <span className='border font-bold border-gray-500 box_tamanho cursor-pointer tamanho hover:bg-slate-400 transition-all w-full md:w-auto md:max-w-xs lg:max-w-none'>Shop Girls</span>
          <span className='border font-bold border-gray-500 box_tamanho cursor-pointer tamanho hover:bg-slate-400 transition-all w-full md:w-auto md:max-w-xs lg:max-w-none'>Shop Boys</span>
        </div><br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center ">
            <div className="image image1">
              <div className='margin-top text-center'>
                <span className='text-white tamanho-shop'>New arrivals, new linen</span>
                <br />
                <Link href='' className='font-bold text-white border-b-4 text-lg mt'>Shop the Spring Collection</Link>
              </div>
            </div>
            <div className="image image2">
               <div className='margin-top text-center'>
                  <span className='text-white tamanho-shop'>New arrivals, new linen</span>
                  <br />
                  <Link href='' className='font-bold text-white border-b-4 text-lg mt'>Shop the Spring Collection</Link>
                </div>
            </div>
            <div className="image image3">
              <div className='margin-top text-center'>
                  <span className='text-white tamanho-shop'>New arrivals, new linen</span>
                  <br />
                  <Link href='' className='font-bold text-white border-b-4 text-lg mt'>Shop the Spring Collection</Link>
                </div>
            </div>
            <div className="image image4">
              <div className='margin-top text-center'>
                  <span className='text-white tamanho-shop'>New arrivals, new linen</span>
                  <br />
                  <Link href='' className='font-bold text-white border-b-4 text-lg mt'>Shop the Spring Collection</Link>
                </div>
            </div>
        </div>



    </>
  )
}

export default ShopNew