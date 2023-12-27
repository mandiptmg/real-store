import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='bg-[url(https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg)] h-screen w-full bg-cover bg-no-repeat -mt-20  bg-blend-overlay bg-black/50'>
        <div className='container mx-auto w-full  h-full grid place-items-center md:flex items-center justify-left'>
          <div className='md:max-w-2xl max-w-md space-y-4'>
            <h1 className='uppercase text-6xl sm:text-7xl font-bold text-gray-200'>
              biggest deals on top brands
            </h1>
            <p className='text-sm sm:text-lg text-gray-400'>
              updated the language of comfort with these
            </p>
            <button className='hover:text-white bg-white hover:bg-purple-700 p-3 hover:scale-105 hover:bg-gray-100 duration-500 uppercase'>
              explore now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero