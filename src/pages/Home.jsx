import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Main from './Main'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className='md:bg-fixed bg-scroll bg-cover bg-center h-[70vh] w-full md:h-[95vh] md:w-auto' style={{ backgroundImage: 'url("/wepik.png")'}}>
        <div className='h-[70vh] md:h-[95vh] bg-black/20'>
          <Navbar />
          <Hero />
        </div>
      </div>
      <Main />
      <Footer />
    </>
  )
}

export default Home