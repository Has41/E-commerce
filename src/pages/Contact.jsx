import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <div className='md:bg-fixed bg-scroll bg-cover bg-center h-[40vh] w-full md:h-[60vh] md:w-auto' style={{ backgroundImage: 'url("/wepik.png")'}}>
      <div className='h-[40vh] md:h-[60vh] bg-black/10'>
        <Navbar />
        <div className='text-center pt-4'>
          <p className='text-4xl tracking-wider md:text-6xl text-white font-extrabold font-poppins mt-8 md:mt-36 mb-6 md:mb-10 leading-snug'>Contact Us</p>
        </div>
      </div>
    </div>
    <Form />
    <Footer />
    </>
  )
}

export default Contact