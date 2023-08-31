import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import Other from '../components/Other'
import Footer from '../pages/Footer'

const About = () => {
  return (
    <>
    <div className='md:bg-fixed bg-scroll bg-cover bg-center h-[40vh] w-full md:h-[60vh] md:w-auto' style={{ backgroundImage: 'url("/wepik.png")'}}>
      <div className='h-[40vh] md:h-[60vh] bg-black/10'>
        <Navbar />
        <AboutHero />
      </div>
    </div>
    <Other />
    <Footer />
  </>
  )
}

export default About