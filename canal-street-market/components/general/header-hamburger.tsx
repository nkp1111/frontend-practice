import React from 'react'
import FacebookIcon from './icons/facebook';
import InstagramIcon from './icons/instagram';

interface HamburgerNavParams {
  setActivePage: React.Dispatch<React.SetStateAction<string>>,
  showHamburger: boolean,
}

export default function HeaderHamburger({ setActivePage, showHamburger }: HamburgerNavParams) {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen flex flex-col gap-5 transition-custom-transition bg-white ${showHamburger ? "hidden" : "block  pb-5 overflow-y-auto no-scrollbar"}`}>
      {/* grid nav  */}
      <div className={`grid grid-cols-2`}>
        <div
          className="transition-custom-transition bg-white cursor-pointer w-full h-64 flex justify-center items-center text-xl"
          onClick={() => setActivePage("about")}
        >
          <span className='-rotate-45'>About</span>
        </div>
        <div
          className="transition-custom-transition bg-custom_blue cursor-pointer w-full h-64 flex justify-center items-center text-xl"
          onClick={() => setActivePage("food")}
        >
          <span className='rotate-45'>Food</span>
        </div>
        <div
          className="transition-custom-transition bg-custom_red cursor-pointer w-full h-64 flex justify-center items-center text-xl"
          onClick={() => setActivePage("retail")}
        >
          <span className='rotate-45'>Retail</span>
        </div>
        <div
          className="transition-custom-transition bg-custom_yellow cursor-pointer w-full h-64 flex justify-center items-center text-xl"
          onClick={() => setActivePage("community")}
        >
          <span className='-rotate-45'>Community</span>
        </div>
      </div>

      <div className='px-5'>
        <button type="button" className='bg-slate-50 border border-black w-full p-3 hover:bg-white transition-custom-transition'>become a vendor</button>
        <p className='mt-5'>
          265 Canal Street <br className='sm:hidden block' />
          New York, New York
        </p>
        <p className='mt-6'>
          Food Hall Hours: <br className='sm:hidden block' />
          Mon – Sun: 10AM- 10PM
        </p>
        <p className='mt-7'>
          Retail Market Hours: <br className='sm:hidden block' />
          Mon – Sat: 11AM- 7PM <br className='sm:hidden block' />
          Sun: 11AM-6PM
        </p>
        <p className='my-7'>
          <a href="mailto:neerajp4321@gmail.com" className='underline'>Email us:</a>
        </p>

        <div className="flex justify-between gap-5 items-center">
          <a href="#" role="button" title="facebook" className='border border-black flex-1 p-3 group flex justify-center'>
            <div className='group-hover:scale-105 transition-custom-transition'>
              <FacebookIcon />
            </div>
          </a>
          <a href="#" role="button" title="instagram" className='border border-black flex-1 p-3 group flex justify-center'>
            <div className='group-hover:scale-105 transition-custom-transition'>
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}


