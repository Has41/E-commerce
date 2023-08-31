import React from 'react'

const Form = () => {
  return (
        <>
        <section className='bg-slate-50 pt-16 lg:py-16'>
        <div className='text-center'>
            <p className="font-mont text-sm tracking-wider mb-4 lg:text-lg">Any Queries?</p>
            <p className="font-poppins text-xl relative tracking-wider font-semibold lg:text-3xl after:h-[2px] lg:after:h-[4px] after:rounded-lg after:w-[100px] lg:after:w-[150px] after:bg-amber-500 after:absolute lg:after:left-[44%] lg:after:bottom-[-15px] after:bottom-[-9px] after:left-[37%] after:content-''">We're glad to help!</p>
        </div>
 
        <div className='max-w-full lg:max-w-[1200px] lg:ml-8 flex flex-col items-center justify-center mt-16 lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-7'>
            <div className='bg-white mb-4 w-[80%] text-center py-8 space-y-5 rounded-md shadow hover:shadow-xl transition-all duration-700 lg:w-[28%]'>
                <p className='font-poppins font-semibold text-lg lg:text-xl lg:tracking-wider'>Sales</p>
                <p className='font-mont font-medium whitespace-break-spaces text-sm text-slate-500 lg:px-4 lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, commodi.</p>
                <p className='font-mont font-semibold text-base text-amber-500 hover:text-amber-700 transition-all duration-500 lg:text-base'>+1200 6696 6889</p>
            </div>
            <div className='bg-white mb-4 w-[80%] text-center py-8 space-y-5 rounded-md shadow hover:shadow-xl transition-all duration-700 lg:w-[28%]'>
                <p className='font-poppins font-semibold text-lg lg:text-xl lg:tracking-wider'>Marketing</p>
                <p className='font-mont font-medium whitespace-break-spaces text-sm text-slate-500 lg:px-4 lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, commodi.</p>
                <p className='font-mont font-semibold text-base text-amber-500 hover:text-amber-700 transition-all duration-500 lg:text-base'>+1700 9933 7433</p>
            </div>
            <div className='bg-white mb-4 w-[80%] text-center py-8 space-y-5 rounded-md shadow hover:shadow-xl transition-all duration-700 lg:w-[28%]'>
                <p className='font-poppins font-semibold text-lg lg:text-xl lg:tracking-wider'>Complaints</p>
                <p className='font-mont font-medium whitespace-break-spaces text-sm text-slate-500 lg:px-4 lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, commodi.</p>
                <p className='font-mont font-semibold text-base text-amber-500 hover:text-amber-700 transition-all duration-500 lg:text-base'>+1237 9996 1234</p>
            </div>
            <div className='bg-white mb-4 w-[80%] text-center py-8 space-y-5 rounded-md shadow hover:shadow-xl transition-all duration-700 lg:w-[28%]'>
                <p className='font-poppins font-semibold text-lg lg:text-xl lg:tracking-wider'>Returns</p>
                <p className='font-mont font-medium whitespace-break-spaces text-sm text-slate-500 lg:px-4 lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, commodi.</p>
                <p className='font-mont font-semibold text-base text-amber-500 hover:text-amber-700 transition-all duration-500 lg:text-base'>mail@mail.com</p>
            </div>
        </div>
    </section>

    <section className='mt-16 lg:mt-10 lg:flex lg:items-center lg:justify-center lg:max-w-[1200px]'>
        <div className='border-b border-slate-200 lg:border-none pb-10 lg:pb-10 lg:w-[50%]'>
            <div className='text-center mb-14'>
                <p className='font-poppins font-semibold text-xl tracking-wide mb-1 lg:mb-4 lg:text-3xl'>Get In Touch</p>
                <p className='font-mont font-normal text-base px-4 lg:px-2 text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, a. Reprehenderit, error neque? Esse?</p>
            </div>

            <div className='text-center space-y-10'>
                <div className='space-y-2'>
                    <span><i className='bx bx-current-location text-amber-500 text-2xl lg:text-4xl'></i></span>
                    <p className='font-mont font-medium text-base tracking-wider text-amber-600 lg:text-lg lg:font-semibold'>Visit Us</p>
                    <p className='font-mont font-medium text-base text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='space-y-2'>
                    <span><i className='bx bxs-envelope text-amber-500 text-2xl lg:text-4xl'></i></span>
                    <p className='font-mont font-medium text-base tracking-wider text-amber-600 lg:text-lg lg:font-semibold'>Email Us</p>
                    <p className='font-mont font-medium text-base text-slate-600'>Company@gmail.com</p>
                </div>

                <div className='space-y-2'>
                    <span><i className='bx bxs-phone-call text-amber-500 text-2xl lg:text-4xl'></i></span>
                    <p className='font-mont font-medium text-base tracking-wider text-amber-600 lg:text-lg lg:font-semibold'>Call Us</p>
                    <p className='font-mont font-medium text-base text-slate-600'>+92 332 1234567</p>
                </div>
            </div>
        </div>

        <div className='text-center py-20 lg:w-[50%]'>
            <p className='font-poppins font-medium text-xl tracking-wide lg:text-3xl lg:font-semibold'>Don't Be A Stranger!</p>
            <p className='font-poppins font-normal text-sm tracking-wider mt-2 text-slate-500 lg:text-lg'>Drop In A Line Or Two!</p>

            <form className='space-y-8 mt-8' action="#">
                <div className='relative'>
                    <input className='border border-slate-400 rounded-sm py-4 pl-11 w-[70%] text-sm lg:text-base lg:w-[90%] lg:py-5' type="text" placeholder='Type Full Name Here!' />
                    <div className='absolute top-[5px] lg:top-[7px] bottom-[1px] right-[290px] lg:right-[532px] flex items-center'>
                      <i className='bx bxs-user-pin text-xl text-amber-500 lg:text-2xl'></i>
                    </div>
                </div>

                <div className='relative'>
                    <input className='border border-slate-400 rounded-sm py-4 pl-11 w-[70%] text-sm lg:text-base lg:w-[90%] lg:py-5' type="text" placeholder='Type Email Here!' />
                    <div className='absolute top-[3px] lg:top-[5px] bottom-[1px] right-[290px] lg:right-[532px] flex items-center'>
                    <i className='bx bxs-envelope text-xl text-amber-500 lg:text-2xl'></i>
                    </div> 
                </div>

                <div className='relative'>
                    <input className='border border-slate-400 rounded-sm pt-4 pb-24 lg:pb-40 pl-11 w-[70%] text-sm lg:text-lg lg:w-[90%]' type="text" placeholder='Type Comment or Here!' />
                    <div className='absolute top-[5px] bottom-[80px] lg:bottom-[139px] right-[290px] lg:right-[530px] flex items-center'>
                    <i className='bx bxs-comment-dots text-xl text-amber-500 lg:text-2xl'></i>
                    </div>
                </div>

                <button type='submit' className='px-[102px] lg:px-[234px] py-3 text-lg lg:text-xl lg:tracking-wider lg:font-semibold font-medium bg-amber-500 hover:bg-amber-600 transition-all duration-500 text-white rounded-sm font-poppins'>Submit</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Form