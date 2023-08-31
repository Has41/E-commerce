import React, { useEffect, useState } from "react"
import NavBar1 from "../components/NavBar1"
import Footer2 from "../components/Footer2"
import RangeSlider from "../components/RangeSlider"
import { Link } from "react-router-dom"

const AllProducts = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [showSidebar]);

  const getSidebar = () => {
    let sidebarClass = ""
    if (showSidebar) {
      sidebarClass = "-translate-x-[27%]"
    } else {
      sidebarClass = "-translate-x-[150%]"
    }
    return sidebarClass;
  };

  const getLgSidebar = () => {
    let sidebarLgClass = ""
    if (showSidebar) {
      sidebarLgClass = "lg:-translate-x-[16%]"
    } else {
      sidebarLgClass = "lg:-translate-x-[150%]"
    }
    return sidebarLgClass;
  };

  const starRating = () => {
    const starIcons = []

    for (let i = 0; i <= 5; i++) {
      starIcons.push(
        <i key={i} className="bx bx-star text-gray-300 text-xl"></i>
      )
    }
    return (
      <span className="flex items-center justify-center">{starIcons}</span>
    )
  }

  return (
    <>
      <NavBar1 />
      <section className="bg-slate-50/40 pb-4">
        <div className="pt-10 lg:flex lg:items-center lg:justify-center lg:space-x-96">
          <div className="flex items-center justify-center space-x-16 sm:space-x-20 lg:space-x-5 lg:pr-32">
            <button
              className="flex items-center space-x-1 pl-4 lg:pl-0 sm:pr-60 lg:pr-0"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <div className="pt-1">
                <i className="bx bx-filter text-xl lg:text-3xl"></i>
              </div>
              <p className="font-mont font-medium text-slate-500 lg:font-semibold lg:text-xl">
                Filter
              </p>
            </button>

            {/* Side button for filter */}
            <div
              className={`${getSidebar()} ${getLgSidebar()} shadow-lg top-0 left-0 w-60 lg:w-96 bg-white h-full fixed transition-all duration-500 ease-in-out overflow-y-auto`}
            >
              {showSidebar && (
                <button
                  onClick={() => setShowSidebar(false)}
                  className="absolute top-4 right-4 text-slate-400"
                >
                  <i className="bx bx-x text-2xl"></i>
                </button>
              )}

              <div className="mt-20 ml-6 lg:ml-20">
                <p className="font-poppins font-semibold text-base uppercase tracking-wide lg:text-xl lg:font-poppins">
                  Product Categories
                </p>
                <div>
                  <ul className="space-y-2 mt-5 lg:text-lg">
                    <li className="font-mont font-medium text-amber-600">
                      Shirt
                    </li>
                    <li className="font-mont font-medium text-amber-600">
                      Pants
                    </li>
                    <li className="font-mont font-medium text-amber-600">
                      Shoes
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="font-poppins font-semibold uppercase tracking-wide lg:text-xl">
                    Price Filter
                  </p>
                  <RangeSlider />
                  <p className="font-mont font-medium text-slate-500 text-sm ml-20 mt-2">
                    Price: $10 to $40
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-slate-500 font-mont text-sm lg:font-medium lg:text-base">
                Showing 1-9 of 11 results
              </p>
            </div>
          </div>

          <button className="flex items-center space-x-4 pl-4 lg:relative lg:bottom-4">
            <p className="font-mont font-medium text-slate-500 pl-4 pt-8 lg:text-lg">
              Sort by popularity
            </p>
            <div className="pt-9">
              <i class="bx bx-chevron-down text-xl lg:text-3xl"></i>
            </div>
          </button>
        </div>


    {/* Cards */}
    <div className='mt-8 lg:mt-24 grid items-center justify-center lg:grid-cols-3 gap-6 sm:gap-20 lg:gap-4 lg:ml-14 mb-4'>
        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>

        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>

        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>
        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>

        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>

        <Link to={`/cartPage`} className='border border-slate-50 hover:shadow-2xl transition-all duration-1000 w-[300px] h-[520px] lg:h-[545px] rounded-sm sm:w-[350px] sm:h-[630px] lg:w-[350px]'>
            <div className='text-center flex items-center justify-center sm:w-[350px] lg:w-[350px]'>
              <img className='h-[400px] sm:h-[450px] rounded-sm sm:w-[350px] lg:h-[400px]' src="https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg" alt="" />
            </div>
            <p className='text-center font-mont font-semibold mt-4 sm:text-lg'>Black Shirt</p>
            <p className='text-center font-mont font-normal text-slate-500 sm:text-lg'>Men</p>
            <p className='text-center font-mont font-medium sm:text-lg sm:font-semibold'>$49</p>
            {starRating()}
        </Link>
    </div>

        <div className="text-center mb-8 mt-8">
          <button className="px-3 py-2 text-sm md:text-normal lg:text-lg md:px-4 md:py-3 border-2 border-black hover:bg-black hover:text-white transition-all duration-700 rounded-md font-medium font-poppins">
            Load More
          </button>
        </div>
      </section>
      <Footer2 />
    </>
  )
}

export default AllProducts