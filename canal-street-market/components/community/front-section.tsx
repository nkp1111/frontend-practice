import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'


export default function FrontSection() {
  return (
    <GeneralPaddingX>
      <div className='py-10 pt-20'>
        <div className='flex justify-between items-center'>
          <span className='rotate-90 flex items-center gap-3 text-gray-600'>
            <span>Community</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" className='stroke-gray-600'>
              <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span className='text-end'>Our mixed-use space hosts <br />
            ongoing events, podcasts <br />
            & artists in residence
          </span>
        </div>


        <div className='mt-20 flex justify-between items-center gap-5 flex-col md:flex-row overflow-hidden'>
          <p className='text-6xl md:text-9xl xl:text-[200px]'>
            Canal St.   <br />Community</p>
        </div>


      </div>
    </GeneralPaddingX>
  )
}
