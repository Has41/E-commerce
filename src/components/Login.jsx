import React from 'react'
import NavBar1 from './NavBar1'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'

const Login = () => {
  return (
    <>
    <NavBar1 />
    <section className='bg-slate-50 py-8 lg:py-20 max-w-full'>
        <div className='text-center bg-white sm:space-y-8 py-8 lg:py-16 w-[90%] ml-4 sm:ml-8 lg:ml-[360px] rounded-sm shadow-sm lg:w-[45%]'>
            <p className='uppercase font-mont lg:font-poppins lg:tracking-wider font-semibold text-black/80 text-2xl lg:text-4xl lg:mb-8 lg:-mt-4'>Login</p>
            <form action="#">
                <div className='space-y-5 mt-4 lg:ml-0 sm:ml-32 sm:flex sm:flex-col lg:flex lg:flex-col lg:items-center lg:justify-center'>
                  <input className='py-2 lg:py-3 rounded-sm border border-slate-300 w-[250px] sm:w-[350px] lg:w-[450px]' type="text" />
                  <input className='py-2 lg:py-3 rounded-sm border border-slate-300 w-[250px] sm:w-[350px] lg:w-[450px]' type="text" />
                </div>
                <div className='flex items-center justify-center space-x-1 mt-4 lg:mr-72 lg:mt-8'>
                  <input className='rounded-sm border border-slate-300 active:border active:border-amber-500 checked:bg-amber-500 focus:border-transparent focus:ring-0' type="checkbox" />
                  <p className='font-poppins text-sm text-slate-500'>Remember me</p>
                </div>
                <button className='border-2 border-black/80 text-black/80 font-mont mt-5 px-[93px] sm:px-[145px] lg:px-[185px] hover:bg-black/80 hover:border hover:border-black/80 hover:text-white transition-all duration-500 py-1 lg:py-2 lg:text-xl lg:font-semibold rounded-sm uppercase'>Log in</button>
                <div className='mt-4 lg:mt-8'>
                <pre className='font-mont font-medium text-sm text-slate-500 lg:text-base'>Don't have an account yet? <Link className='text-amber-500 hover:text-amber-700 font-semibold transition-all duration-500' to={`/register`}>Register Now!</Link></pre>
                </div> 
            </form>
        </div>
    </section>
    <Footer2 />
    </>
  )
}

export default Login