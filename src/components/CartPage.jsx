import React, { useState } from 'react'
import NavBar1 from './NavBar1'
import Footer2 from './Footer2'

const CartPage = () => {
    const [quantity, setQuanity] = useState(1)

    const increaseQuantity = () => {
        setQuanity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity > 1) {
            setQuanity(quantity - 1)
        }
    }

    const starRating = () => {
        const starIcons = []
    
        for (let i = 0; i <= 5; i++) {
          starIcons.push(
            <i key={i} className="bx bx-star text-gray-300 text-base lg:text-xl"></i>
          )
        }
        return (
          <span className="flex items-center justify-center">{starIcons}</span>
        )
      }

  return (
    <>
        <NavBar1 />
        <section className='bg-slate-50/40 pt-8 pb-12'>
            <section className='lg:flex'>
            <div className='text-center flex items-center justify-center lg:w-[90%]'>
                <img className='h-[400px] sm:h-[500px] rounded-sm lg:h-[600px] lg:w-[80%]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <div>
            <div className='text-center mt-4 lg:text-justify'>
               <p className='font-poppins font-semibold text-xl uppercase lg:text-3xl lg:font-bold'>Black Shirt</p>
               <p className='font-mont font-semibold text-slate-600 text-lg mt-2 lg:text-2xl lg:mt-5'>$49.00</p>
               <p className='font-mont font-normal sm:px-14 text-slate-500 text-sm px-6 mt-3 text-justify lg:px-4 lg:text-base lg:font-semibold lg:text-slate-500 lg:-ml-4 lg:mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque totam minus accusantium consequatur ullam consequuntur quaerat dolores veniam natus.</p>
            </div>
            <div className='lg:flex lg:items-center lg:justify-center mt-8 lg:mt-16 lg:space-x-64 lg:mr-5'>
            <div className='flex items-center justify-center'>
                <button onClick={increaseQuantity} className='border border-slate-300 px-4 py-2 lg:py-3 lg:px-5 bg-slate-50 hover:bg-black hover:text-white transition-all duration-500 rounded-l-sm lg:text-2xl'>+</button>
                <div className='border-y-[1px] border-slate-300 px-6 py-2 lg:py-[14px] lg:px-7 lg:text-lg'>{quantity}</div>
                <button onClick={decreaseQuantity} className='border border-slate-300 px-4 py-2 lg:py-3 lg:px-5 bg-slate-50 hover:bg-black hover:text-white transition-all duration-500 rounded-r-sm lg:text-2xl'>-</button>
            </div>
            <div className='text-center mt-6 mb-4 lg:mt-0 lg:mb-0'>
                <button className='px-3 py-2 sm:px-4 sm:py-3 sm:text-base lg:px-5 lg:py-4 lg:text-base lg:uppercase font-semibold border-2 border-black font-mont text-sm rounded-sm hover:bg-black hover:text-white transition-all duration-500'>Add To Cart</button>
            </div>
            </div>


            <div className='mt-8 ml-8 lg:ml-0 lg:mt-16'>
                <p className='font-mont font-semibold text-base sm:text-lg lg:text-xl'>Free shipping on orders over 50$!</p>
                <ul className='list-disc mt-2 ml-6 sm:ml-8 lg:ml-8'>
                    <li className='font-mont font-medium text-slate-600 text-sm text-justify sm:text-base lg:text-lg'>No-Risk Money Back Guarantee!</li>
                    <li className='font-mont font-medium text-slate-600 text-sm text-justify sm:text-base lg:text-lg'>Secure Payment!</li>
                    <li className='font-mont font-medium text-slate-600 text-sm text-justify sm:text-base lg:text-lg'>No Hassle Refunds!</li>
                </ul>
            </div>
            <div className='text-justify mt-4 ml-8 lg:hidden sm:mt-8'>
                <p className='font-mont font-semibold text-base sm:text-lg'>Reviews (0)</p>
                <p className='font-mont font-medium text-slate-500 text-sm sm:text-base mt-2'>No reviews yet</p>
            </div>
            </div>
            </section>
          
           
            <div className='mt-8 ml-8 lg:mt-16 lg:ml-16'>
                <p className='font-poppins font-semibold uppercase text-lg sm:text-xl tracking-wide lg:text-2xl'>Related Products</p>
            </div>

        <div className="mt-8 ml-3 sm:ml-12 lg:mt-10 grid grid-cols-2 items-center justify-center lg:grid-cols-4 gap-y-3 lg:ml-16 mb-4">

          <div className="border border-slate-50 w-[170px] h-[320px] sm:w-[270px] sm:h-[450px] hover:shadow-2xl transition-all duration-1000 rounded-sm lg:w-[250px] lg:h-[450px]">
            <div className="text-center flex items-center justify-center w-[170px] sm:w-[270px]">
              <img
                className="h-[210px] w-[170px] sm:w-[270px] rounded-sm sm:h-[330px] lg:h-[300px] lg:w-[255px]"
                src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"
                alt=""
              />
            </div>
            <p className="text-center font-mont font-semibold mt-4 text-sm lg:text-lg">
              Black Shirt
            </p>
            <p className="text-center font-mont font-normal text-slate-500 text-sm lg:text-lg">
              Men
            </p>
            <p className="text-center font-mont font-semibold text-xs lg:text-lg">$49</p>
            {starRating()}
          </div>

          <div className="border border-slate-50 w-[170px] h-[320px] sm:w-[270px] sm:h-[450px] hover:shadow-2xl transition-all duration-1000 rounded-sm lg:w-[250px] lg:h-[450px]">
            <div className="text-center flex items-center justify-center w-[170px] sm:w-[270px]">
              <img
                className="h-[210px] w-[170px] sm:w-[270px] rounded-sm sm:h-[330px] lg:h-[300px] lg:w-[255px]"
                src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"
                alt=""
              />
            </div>
            <p className="text-center font-mont font-semibold mt-4 text-sm lg:text-lg">
              Black Shirt
            </p>
            <p className="text-center font-mont font-normal text-slate-500 text-sm lg:text-lg">
              Men
            </p>
            <p className="text-center font-mont font-semibold text-xs lg:text-lg">$49</p>
            {starRating()}
          </div>


          <div className="border border-slate-50 w-[170px] h-[320px] sm:w-[270px] sm:h-[450px] hover:shadow-2xl transition-all duration-1000 rounded-sm lg:w-[250px] lg:h-[450px]">
            <div className="text-center flex items-center justify-center w-[170px] sm:w-[270px]">
              <img
                className="h-[210px] w-[170px] sm:w-[270px] rounded-sm sm:h-[330px] lg:h-[300px] lg:w-[255px]"
                src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"
                alt=""
              />
            </div>
            <p className="text-center font-mont font-semibold mt-4 text-sm lg:text-lg">
              Black Shirt
            </p>
            <p className="text-center font-mont font-normal text-slate-500 text-sm lg:text-lg">
              Men
            </p>
            <p className="text-center font-mont font-semibold text-xs lg:text-lg">$49</p>
            {starRating()}
          </div>



          <div className="border border-slate-50 w-[170px] h-[320px] sm:w-[270px] sm:h-[450px] hover:shadow-2xl transition-all duration-1000 rounded-sm lg:w-[250px] lg:h-[450px]">
            <div className="text-center flex items-center justify-center w-[170px] sm:w-[270px]">
              <img
                className="h-[210px] w-[170px] sm:w-[270px] rounded-sm sm:h-[330px] lg:h-[300px] lg:w-[255px]"
                src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg"
                alt=""
              />
            </div>
            <p className="text-center font-mont font-semibold mt-4 text-sm lg:text-lg">
              Black Shirt
            </p>
            <p className="text-center font-mont font-normal text-slate-500 text-sm lg:text-lg">
              Men
            </p>
            <p className="text-center font-mont font-semibold text-xs lg:text-lg">$49</p>
            {starRating()}
          </div>

          
        </div>

        <div className="text-center mt-14 lg:mt-20">
          <button className="px-3 py-2 text-sm sm:text-base md:text-normal lg:text-lg lg:px-4 lg:py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-700 rounded-md font-medium font-poppins">
            Load More
          </button>
        </div>
        </section>
        <Footer2 />
    </>
  )
}

export default CartPage