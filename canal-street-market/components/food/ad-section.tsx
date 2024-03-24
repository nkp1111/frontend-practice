import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'
import SmilingIcon from '../general/icons/smilingIcon'

export default function AdSection() {
  return (
    <section className='my-16'>
      <GeneralPaddingX>
        <MovingZigZagBorder />
        <div className='flex justify-between py-8 my-8 items-center'>
          <span className='animate-bounce flex justify-center flex-1 '>
            <SmilingIcon />
          </span>
          <div className='text-center'>
            <h2 className='text-7xl md:text-8xl font-medium'>The <br />Best of <br />NYC</h2>
            <p className='text-lg'>All under one roof!</p>
          </div>
          <span className='animate-bounce flex justify-center flex-1'>
            <SmilingIcon rotate />
          </span>
        </div>
        <MovingZigZagBorder />
      </GeneralPaddingX>
    </section>
  )
}


export function MovingZigZagBorder({ dir = "ltr" }: { dir?: string }) {

  return (
    <div className={`flex overflow-hidden items-center w-full mt-5 gap-0 ${dir === "ltr" ? "rotate-180" : "rotate-0"}`}>
      <div className='flex items-center w-full bg-stone-800 flex-shrink-0 h-auto animate-loop-scroll overflow-hidden'>
        {Array.from({ length: 34 }, () => 0).map((_, index) => (
          <>
            <div className='w-0 border-[10px] border-t-[40px] border-transparent border-t-custom_blue border-b-0 mb-2'></div>
            <div className='w-0 border-[10px] border-b-[40px] border-transparent border-b-custom_blue border-t-0 mt-2'></div>
          </>
        ))}
      </div>
      <div className='flex items-center w-full bg-stone-800 flex-shrink-0 h-auto animate-loop-scroll overflow-hidden -ms-1'>
        {Array.from({ length: 34 }, () => 0).map((_, index) => (
          <>
            <div className='w-0 border-[10px] border-b-[40px] border-transparent border-b-custom_blue border-t-0 mt-2'></div>
            <div className='w-0 border-[10px] border-t-[40px] border-transparent border-t-custom_blue border-b-0 mb-2'></div>
          </>
        ))}
      </div>
    </div>
  )
}