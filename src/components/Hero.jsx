import React from 'react'

const Hero = () => {
  return (
    <div className='text-center pt-5 sm:pt-8'>
        <p className='text-3xl sm:text-4xl lg:text-6xl text-white font-extrabold font-poppins mt-20 lg:mt-52 mb-6 lg:mb-10 leading-snug'>Raining Offers For Summer!</p>
        <p className='text-xl md:text-4xl text-white font-poppins font-semibold'>15% Off On All Products!</p>
      <div className='flex items-center justify-center gap-4 lg:gap-6 mt-8 lg:mt-16'>
        <button className='px-4 py-3 lg:px-6 lg:text-lg lg:py-4 text-black bg-white font-poppins font-medium hover:bg-black hover:text-white transition-all duration-500 rounded-sm'>Shop Now</button>
        <button className='px-4 py-[11px] lg:px-6 lg:py-4 lg:text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 font-poppins font-medium rounded-sm'>Find More</button>
      </div>
    </div>
  )
}

export default Hero