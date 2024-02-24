import PaddingX from '@/components/general/paddingX'
import React from 'react'
import { workData } from '@/constant/works-data'
import SingleWork from './single-work'

export default function WorkSection() {
  return (
    <section className='bg-custom-light'>
      <h2 className='text-center invisible' aria-label='works section'>Works section</h2>
      <PaddingX>
        <div className='flex flex-col text-custom-dark py-20 pb-32 border-y-2 border-custom-dark items-start'>
          <div className='w-full flex md:flex-row flex-col gap-10'>
            <div className='flex-1'>
              <p className='text-4xl font-medium lg:w-3/4'>
                BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
              </p>

              <button type="button" className={`btn relative mt-8 rounded-full px-9 text-custom-dark border border-custom-dark py-1 btn-sm uppercase bg-transparent transition-all duration-300 ease-linear overflow-hidden
              before:bg-custom-dark before:h-0 hover:before:h-full before:w-full before:absolute before:top-full hover:before:top-0 before:left-0 before:rounded-full before:transition-all before:duration-300 before:ease-linear before:text-custom-light before:flex before:items-center before:justify-center hover:before:content-[var(--see-work-text)]`}>See the work</button>

            </div>
            <div className='flex-1 text-end'>
              <p className='text-8xl sm:text-9xl md:text-[180px] flex items-center justify-end font-extrabold'>B/D <span className='font-mono border-[12px] border-custom-dark rounded-full w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-6xl sm:text-8xl'>R</span></p>
            </div>
          </div>

          <div className="flex justify-between items-start gap-6 w-full mt-20">
            {workData.map(item => (
              <SingleWork key={item.id} work={item} />
            ))}
          </div>
        </div>
      </PaddingX>
    </section>
  )
}
