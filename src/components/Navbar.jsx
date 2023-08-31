import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [cartSidebar, setCartSidebar] = useState(false)
    const [userDropdown, setUserDropdown] = useState(false)

    useEffect(() => {
        if (cartSidebar) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "auto"
        }

        if (mobileMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
      }, [cartSidebar, mobileMenu])

    const mobileMenuAnimate = () => {
        if(mobileMenu) {
            return 'translate-x-0'
        } else {
            return 'translate-x-full'
        }
    }

    const toggleCartSidebar = () => {
        console.log(`Toggling cart sidebar!`)
        setCartSidebar(!cartSidebar)
    }

    const toggleUser = () => {
        setUserDropdown(!userDropdown)
    }

    const cartMenuAnimate = () => {
        if(cartSidebar) {
            return 'lg:translate-x-0'
        } else {
            return 'lg:translate-x-full'
        }
    }

  return (
    <nav className='flex items-center justify-between py-8 font-poppins'>
    <Link to={`/`}>
      <div className='uppercase text-3xl font-bold ml-12 text-white'>
        Logo.
      </div>
    </Link>

        {/* Mobile navbar */}
        <div className='lg:hidden flex'>
            <div className='text-3xl mr-4 cursor-pointer'>
              <Link to={`myCart`}><i className='bx bxs-cart-alt text-white'></i></Link>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className='text-3xl mr-10 cursor-pointer'>
                {mobileMenu ? <i className='bx bx-x'></i> : <i className='bx bx-menu-alt-right text-white'></i>}
            </button>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:block'>
            <ul className='flex gap-12 text-lg uppercase lg:text-md text-white'>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/products`}>Our Products</Link></li>
                <li><Link to={`/about`}>About Us</Link></li>
                <li><Link to={`/contacts`}>Contact Us</Link></li>
            </ul>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed top-0 right-0 bottom-0 w-64 shadow-xl bg-white transition-transform transform ${mobileMenuAnimate()} duration-200 z-50`}>
             <button onClick={() => setMobileMenu(false)} className='absolute top-4 right-4 text-2xl'>
            <i className='bx bx-x'></i>
            </button>
            <ul className='flex flex-col gap-4 p-4 mt-10'>
                <li className='hover:bg-slate-200 cursor-pointer'><Link to={`/login`}><i className='bx bxs-user text-xl'></i></Link></li>
                <li className='hover:bg-slate-200 cursor-pointer'><Link to={`/`}>Home</Link></li>
                <li className='hover:bg-slate-200 cursor-pointer'><Link to={`/products`}>Our Products</Link></li>
                <li className='hover:bg-slate-200 cursor-pointer'><Link to={`/about`}>About Us</Link></li>
                <li className='hover:bg-slate-200 cursor-pointer'><Link to={`/contacts`}>Contact Us</Link></li>
            </ul>
        </div>

        {/* Cart menu */}
        <div className={`hidden lg:block lg:fixed lg:top-0 lg:right-0 lg:bottom-0 lg:w-96 lg:shadow-xl lg:bg-white lg:transition-transform lg:transform lg:duration-500 ${cartMenuAnimate()} lg:shadow-xl lg:z-50`}>
            {cartSidebar && (
                <div  onClick={toggleCartSidebar} className='lg:absolute lg:top-4 lg:right-3 cursor-pointer'>
                    <i className='bx bx-x text-3xl'></i>
                </div>
            )}
            <div className='hidden lg:block lg:mt-6 lg:ml-8'>
                <p className="font-poppins font-semibold text-xl tracking-wider relative after:h-[2px] after:w-[430px] after:bg-amber-500 after:absolute after:bottom-[-20px] after:left-[-9%] after:content-''">Shopping Cart</p>
                <p className='font-mont font-medium text-slate-500 text-lg mt-[350px] ml-12'>No Products In The Cart!</p>
            </div>
            <div className='mt-96 ml-12'>
                <Link to={`/products`}><button className='px-14 py-2 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-poppins text-lg transition-all duration-500 rounded-sm'>Continue Shopping</button></Link>
            </div>
        </div>

        <div className='hidden md:flex gap-4 text-3xl mr-10 cursor-pointer text-white'>
            <div onClick={toggleCartSidebar}><i className='bx bxs-cart-alt'></i></div>
            <div onClick={toggleUser} className='lg:transition-all lg:duration-500'>
                <i className='bx bxs-user'></i>
                {userDropdown && (
                    <div className='lg:relative'>
                    <div className='hidden lg:block lg:absolute lg:-right-6 lg:mt-2 lg:py-2 lg:w-32 lg:bg-white lg:border lg:border-gray-slate-300 lg:rounded lg:shadow-lg'>
                        <Link to={`/login`} className='block px-4 py-2 font-poppins text-slate-600 text-base hover:text-black transition-all duration-300'>Login</Link>
                        <Link to={`/register`} className='block px-4 py-2 font-poppins text-slate-600 text-base hover:text-black transition-all duration-300'>Register</Link>
                    </div>
                    </div>

                )}
            </div>
        </div>

    </nav>
  )
}

export default Navbar