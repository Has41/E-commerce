import React from 'react'

const Other = () => {
  return (
    <>
    <main className='pt-20 bg-slate-50 h-[85vh] lg:h-[63vh] max-w-full mb-4'>
    <div className='bg-white w-[344px] lg:w-[1200px] ml-5 shadow-lg pt-4 lg:pt-0 lg:flex lg:items-center lg:justify-center'>
        <div className='text-center lg:w-[50%]'>
            <p className="text-lg lg:text-3xl lg:relative lg:right-44 lg:bottom-5 font-semibold font-poppins mb-6 pt-4 tracking-wider relative after:h-[3px] after:rounded-lg after:w-[65px] after:bg-amber-500 after:absolute after:bottom-[-5px] after:left-[41%] after:content-''">Our Story</p>
            <p className='whitespace-break-spaces px-4 leading-normal font-mont text-sm text-slate-700 lg:break-after-all lg:text-lg lg:text-justify lg:ml-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi officiis eos, repellat error nobis quisquam excepturi nostrum dolorem non esse maiores sit sed, nulla officia? Exercitationem sed expedita non est!</p>
        </div>

        <div className='flex items-center justify-center mt-4 lg:mt-0'>
            <img className='h-[260px] lg:w-[600px] lg:h-[400px] rounded-tl-none rounded-tr-none rounded-bl-sm rounded-br-sm' src="https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?w=740&t=st=1693213629~exp=1693214229~hmac=8c087f2f62cd1fd035f244aaa47d23372d77d8a1f4e1d39c9f393cf47ed13bf5" alt="" />
        </div>
    </div>
    </main>

    <section className='bg-white lg:mb-20 lg:mt-12'>
        <div className='text-center max-w-full lg:flex lg:items-center lg:justify-center'>
            <div className='p-8 w-[100%] py-8'>
                <div><i className='bx bx-world text-5xl lg:text-7xl'></i></div>
                <div><p className='font-poppins font-semibold tracking-wider text-normal py-3 lg:text-xl'>World Wide Shipping</p></div>
                <div><p className='text-sm tracking-wide font-mont text-slate-600 lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, labore?</p></div>
            </div>
            <div className='p-8 w-[100%] py-8'>
                <div><i className='bx bx-shield text-5xl lg:text-7xl'></i></div>
                <div><p className='font-poppins font-semibold tracking-wider text-normal py-3 lg:text-xl'>Best Quality</p></div>
                <div><p className='text-sm tracking-wide font-mont text-slate-600 lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, labore?</p></div>
            </div>
            <div className='p-8 w-[100%] py-8'>
                <div><i className='bx bx-purchase-tag-alt text-5xl lg:text-7xl'></i></div>
                <div><p className='font-poppins font-semibold tracking-wider text-normal py-3 lg:text-xl'>Best Offers</p></div>
                <div><p className='text-sm tracking-wide font-mont text-slate-600 lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, labore?</p></div>
            </div>
            <div className='p-8 w-[100%] py-8'>
                <div><i className='bx bx-lock text-5xl lg:text-7xl'></i></div>
                <div><p className='font-poppins font-semibold tracking-wider text-normal py-3 lg:text-xl'>Secure Payments</p></div>
                <div><p className='text-sm tracking-wide font-mont text-slate-600 lg:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, labore?</p></div>
            </div> 
        </div>
    </section>

    <section className='mt-12'>
        <div className='w-full h-[40vh] md:w-[99%] md:ml-2 md:rounded-sm bg-scroll md:bg-fixed bg-cover bg-center md:h-[65vh] relative' style={{ backgroundImage: 'url("/Follow.png")'}}>
            <div className='bg-black/30 w-full h-[40vh] md:h-[65vh]'>
                <div className='text-center rounded-sm shadow-lg lg:shadow-xl w-[90%] lg:w-full lg:h-[50%] py-12 md:pt-56 bg-white lg:absolute lg:left-0 lg:top-36 absolute top-16 left-5'>
                  <p className="text-black relative lg:bottom-36 font-poppins tracking-wider text-2xl font-bold lg:text-6xl after:h-[2px] lg:after:h-[4px] after:rounded-lg after:w-[70px] lg:after:w-[200px] after:bg-amber-500 after:absolute after:bottom-[-8px] lg:after:bottom-[-14px] lg:after:absolute lg:after:left-[41%] after:left-[39%] after:content-''">Follow Us!</p>
                  <div className='mt-8 lg:mt-0 space-x-6 text-lg lg:text-4xl lg:relative lg:right-2 lg:bottom-20 lg:space-x-10'>
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-instagram'></i>
                    <i className='bx bxl-twitter'></i>
                    <i className='bx bxl-google'></i>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Other