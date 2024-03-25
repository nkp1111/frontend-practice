import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'

export default function EventSection() {
  return (
    <section className='my-20'>
      <GeneralPaddingX>
        <div>
          <div className="flex gap-10">
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
          </div>

          <div className='flex my-10 items-center'>
            <div className="flex flex-col w-1/4">
              <div className='text-center flex flex-col'>
                <small className='mb-1 text-xs'>09/21 (past)</small>
                <span className='font-medium'>Small Business <br /> Retail Pop Up <br /> Weekend!</span>
              </div>

              <div className="w-full h-4 repeating_linear_gradient_bg my-10"></div>

              <div className='text-center flex flex-col'>
                <small className='mb-1 text-xs'>12/11 (past)</small>
                <span className='font-medium'>Hack City 12/11</span>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-center justify-center">
              <h2 className='font-medium text-6xl md:text-8xl text-center'>Market <br /> Events</h2>
            </div>

            <div className="flex flex-col w-1/4">
              <div className='text-center flex flex-col'>
                <small className='mb-1 text-xs'>02/07 (past)</small>
                <span className='font-medium'>New Balance x <br /> Paperboy Paris by <br /> Greenhouse @ Canal <br /> Street Market</span>
              </div>

              <div className="w-full h-4 repeating_linear_gradient_bg my-10"></div>

              <div className='text-center flex flex-col'>
                <small className='mb-1 text-xs'>07/27 (past)</small>
                <span className='font-medium'>Taiwanese Wave</span>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
            <div className="flex-1 h-4 repeating_linear_gradient_bg"></div>
          </div>
        </div>


        <div className='flex mt-16'>
          <button type="button" className="w-full bg-custom_yellow border border-black hover:bg-black transition-custom-transition inline-block hover:text-white p-4 px-16 text-lg">see all</button>
        </div>
      </GeneralPaddingX>
    </section>
  )
}
