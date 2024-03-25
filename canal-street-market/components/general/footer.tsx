import React from 'react'
import GeneralPaddingX from './general-padding-x'

import PencilIcon from './icons/pencilIcon';
import FacebookIcon from './icons/facebook';
import InstagramIcon from './icons/instagram';

export default function Footer() {
  return (
    <footer className='mt-8 pb-8'>
      <GeneralPaddingX>
        <CrossLineBackground />
        <div className='flex flex-col items-center justify-center gap-8 my-8 py-4'>
          <p className='text-2xl md:text-4xl'>Interested in becoming a vendor?</p>
          <button type="button" className='py-3 px-8 border border-black hover:bg-black hover:text-white transition-all duration-300 ease-linear'>click here</button>
        </div>
        <CrossLineBackground />

        <div className='my-8 py-8 flex flex-col gap-16'>
          <div className='flex gap-8'>
            <div className='animate_border flex flex-col items-center justify-center flex-1 md:p-10 gap-3 p-5 text-center'>
              <span><PencilIcon /></span>
              <span>Email us</span>
            </div>
            <div className='animate_border flex flex-col items-center justify-center flex-1 md:p-10 gap-3 p-5 text-center'>
              <span><FacebookIcon /></span>
              <span>Follow us <br />on facebook</span>
            </div>
            <div className='animate_border flex flex-col items-center justify-center flex-1 md:p-10 gap-3 p-5 text-center'>
              <span><InstagramIcon /></span>
              <span>Follow us <br />on instagram</span>
            </div>
          </div>

          <div className='animate_border flex items-center justify-between md:p-10 gap-16 p-5'>
            <p className='text-2xl md:text-3xl'>Stay up to date <br /> with our newsletter</p>
            <form className='flex-1'>
              <input type="email" name="email" id="email" placeholder='Email' className='w-full border border-black p-4 text-black placeholder:text-black text-xl px-8 bg-transparent' />
            </form>
          </div>
        </div>

        <div className='flex gap-5 md:gap-10 items-center justify-between'>
          <span className="flex">Copyright Canal Street Market {new Date().getFullYear()}</span>
          <span className="flex"><a href="#" className='underline'>Privacy Policy</a></span>
          <span className="flex"><a href="#" className='underline'>Vendor Login</a></span>
          <span className="flex flex-1 justify-end">Site by <span className='line-through ms-1'>Neeraj</span></span>
        </div>

      </GeneralPaddingX>
    </footer>
  )
}

export function CrossLineBackground() {
  return (
    <div className='w-full h-4 repeating_linear_gradient_bg'></div>
  )
}