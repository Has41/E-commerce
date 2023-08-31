import React from 'react'

const Section = () => {
    const starRating = () => {
        const starIcons = []

        for (let i = 0; i <= 5; i++) {
            starIcons.push(<i key={i} className='bx bx-star text-gray-300 text-xl'></i>)
        }
        return (
            <span className='flex items-center justify-center'>{starIcons}</span>
        )
    }
  return (
    <section className='bg-slate-50/50 pt-4 pb-8'>
    <div className='text-center mt-8'>
        <p className='text-sm font-mont sm:text-lg lg::text-xl text-slate-600'>New Arrivals</p>
        <p className='text-xl sm:text-2xl lg:text-3xl font-bold mt-4 font-poppins tracking-wider'>
            <span className='border-b-2 border-slate-500 pb-1 rounded-sm'>Featured Products</span>
        </p>
    </div>

    <div className='mt-8 md:mt-24 grid items-center justify-center lg:grid-cols-3 gap-6 sm:gap-20 lg:gap-4 lg:ml-14 mb-4'>
        <div className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[430px] sm:h-[660px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[430px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[500px] rounded-sm sm:w-[430px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </div>

        <div className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] rounded-sm lg:h-[545px] sm:w-[430px] sm:h-[660px] lg:w-[350px]'>
            <div className='text-center flex justify-center place-items-center sm:w-[430px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[500px] rounded-sm sm:w-[430px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </div>

        <div className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] rounded-sm lg:h-[545px]  sm:w-[430px] sm:h-[660px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[430px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[500px] rounded-sm sm:w-[430px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </div>
    </div>
    </section>
  )
}

export default Section