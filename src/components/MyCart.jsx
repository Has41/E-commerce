import React from 'react'
import NavBar1 from './NavBar1'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'

const MyCart = () => {
  return (
    <>
    <NavBar1 />
      <section className='bg-slate-50 py-20'>
        <div className='ml-8'>
            <p className="font-poppins font-semibold uppercase tracking-wide text-xl relative after:h-[3px] after:rounded-lg after:w-[320px] after:bg-amber-500 after:absolute after:bottom-[-20px] after:left-[1%] after:content-''">My Cart</p>
            <p className='mt-12 font-mont font-medium text-slate-500 ml-4'>Your Cart is empty!</p>
            <div className='mt-8'>
              <Link to={`/products`} className='px-4 py-2 border-2 border-amber-500 text-amber-500 rounded-sm hover:bg-amber-500 hover:text-white transition-all duration-300 font-poppins'>Return To Shopping</Link>
            </div>
        </div>
      </section>
      <Footer2 />
    </>
  )
}

export default MyCart