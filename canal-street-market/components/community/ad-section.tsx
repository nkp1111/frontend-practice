import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'
import HeadIcon from '../general/icons/headIcon'
import { MovingDashedLine } from '../about/market-section'

export default function AdSection() {
  return (
    <section className='my-16'>
      <GeneralPaddingX>
        <MovingZigZagBorder />
        <div className='flex justify-between py-8 my-8 items-center flex-col md:flex-row gap-8'>
          <span className='animate-bounce flex justify-center flex-1 '>
            <HeadIcon />
          </span>
          <div className='text-center'>
            <h2 className='text-7xl md:text-8xl font-medium'>Market  <br />Radio</h2>
            <p className='text-lg'>Podcasted from the market</p>
          </div>
          <span className='animate-bounce flex justify-center flex-1 duration-500'>
            <HeadIcon rotate />
          </span>
        </div>


        <div className='my-16 mb-24'>
          <div>
            <MovingDashedLine dir={"ltr"} />
            <MovingDashedLine dir={"ltr"} />
          </div>

          <div className='my-14 flex justify-between sm:items-center w-full sm:flex-row flex-col gap-5'>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className='sm:text-center text-start font-mono border-0'>03/19</span> <br />
              <span className='sm:text-center text-start font-medium'>S4E4: Getting your Korean Mom High w/ Dae Lim (Sundae School).</span>
            </span>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className="sm:text-center text-start font-mono border-0">03/04</span> <br />
              <span className='sm:text-center text-start font-medium'>
                Julie Uhrman Discusses Her Brainchild That is Angel City FC + Mexico Stuns United States in Gold Cup + NWSL Free Agency + Canada Sues Soccer Federation</span>
            </span>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className='sm:text-center text-start font-mono border-0'>05/22</span> <br />
              <span className='sm:text-center text-start font-medium'>
                Episode 13: Sarinya Srisakul</span>
            </span>
          </div>

          <div className='relative'>
            <MovingDashedLine />
            <MovingDashedLine />
            <button type="button" className="absolute bg-custom_yellow border border-black hover:bg-black transition-custom-transition top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block hover:text-white p-4 px-16 text-lg">see all</button>
          </div>
        </div>
      </GeneralPaddingX>
    </section>
  )
}


export function MovingZigZagBorder({ dir = "ltr" }: { dir?: string }) {

  return (
    <div className={`flex overflow-hidden items-center w-full mt-5 gap-0 ${dir === "ltr" ? "rotate-180" : "rotate-0"}`}>
      <div className='flex items-center w-full bg-stone-800 flex-shrink-0 h-auto animate-loop-scroll overflow-hidden'>
        {Array.from({ length: 70 }, () => 0).map((_, index) => (
          <>
            <div className='w-0 border-[4px] border-t-[40px] border-transparent border-t-custom_yellow border-b-0 mb-1'></div>
            <div className='w-0 border-[4px] border-b-[40px] border-transparent border-b-custom_yellow border-t-0 mt-1'></div>
          </>
        ))}
      </div>
      <div className='flex items-center w-full bg-stone-800 flex-shrink-0 h-auto animate-loop-scroll overflow-hidden -ms-2'>
        {Array.from({ length: 70 }, () => 0).map((_, index) => (
          <>
            <div className='w-0 border-[4px] border-b-[40px] border-transparent border-b-custom_yellow border-t-0 mt-1'></div>
            <div className='w-0 border-[4px] border-t-[40px] border-transparent border-t-custom_yellow border-b-0 mb-1'></div>
          </>
        ))}
      </div>
    </div>
  )
}