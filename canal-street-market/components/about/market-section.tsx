import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'
import Image from 'next/image'
import marketImage from "@/public/about-section/market.jpg"
import officeImage from "@/public/about-section/office.jpg"
import workImage from "@/public/about-section/pexels-cowomen-2041393.jpg"

export default function MarketSection() {
  return (
    <GeneralPaddingX>
      <section className='py-10'>
        <h2 className='mb-16 text-4xl sm:text-5xl md:text-7xl xl:text-8xl'>
          A New Kind <br /> of Market
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap md:gap-10 gap-16">
          <article className='flex flex-col md:flex-1 md:w-auto w-full'>
            <figure className='inline-block lg:h-96 sm:h-64 h-32  overflow-hidden relative bg-amber-50'>
              <Image
                src={marketImage}
                alt="."
                width={500}
                height={500}
                className='w-auto h-96 object-cover'
              />
            </figure>
            <h3 className="md:mt-5 mt-3 text-lg">
              Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.
            </h3>
          </article>

          <article className='flex flex-col md:flex-1 md:w-auto w-full'>
            <figure className='inline-block lg:h-96 sm:h-64 h-32 overflow-hidden relative bg-amber-50'>
              <Image
                src={officeImage}
                alt="."
                width={500}
                height={500}
                className='w-auto h-96 object-cover'
              />
            </figure>
            <h3 className="md:mt-5 mt-3 text-lg">
              Retail Market Hours:
            </h3>
            <p className='md:mt-5 mt-3 text-lg'>
              Thursday - Sun: 11:00AM - 7:00PM
            </p>
          </article>

          <article className='flex flex-col md:flex-1 md:w-auto w-full'>
            <figure className='inline-block lg:h-96 sm:h-64 h-32  overflow-hidden relative bg-amber-50'>
              <Image
                src={workImage}
                alt="."
                width={500}
                height={500}
                className='w-auto h-96 object-cover'
              />
            </figure>
            <h3 className="md:mt-5 mt-3 text-lg">
              Food Hall Hours:
            </h3>
            <p className='md:mt-5 mt-3 text-lg'>
              Mon - Sun: 11:00AM - 8:00PM
            </p>
          </article>
        </div>

        <div className='md:mt-20 mt-16 mb-16'>
          <div className="flex flex-row justify-between items-center">
            <span className='text-3xl md:text-4xl font-mono flex-1 text-center text-slate-500'>Happy</span>
            <span className='text-4xl sm:text-5xl md:text-7xl xl:text-8xl flex-1 text-center'>Market <br /> Events</span>
            <span className='text-3xl md:text-4xl font-mono flex-1 text-center text-slate-500'>Day</span>
          </div>
        </div>

        <div>
          <div>
            <MovingDashedLine dir={"ltr"} />
            <MovingDashedLine dir={"ltr"} />
          </div>

          <div className='my-14 flex justify-between sm:items-center w-full sm:flex-row flex-col'>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className='sm:text-center text-start font-mono border-0'>09/21</span> <br />
              <span className='sm:text-center text-start'>Small Business Retail Pop Up Weekend!</span>
            </span>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className="sm:text-center text-start font-mono border-0">02/07</span> <br />
              <span className='sm:text-center text-start'>New Balance x Paperboy Paris by <br className='sm:block hidden' /> Greenhouse @ Canal Street Market</span>
            </span>
            <span className="flex flex-1 sm:justify-center justify-start sm:flex-col flex-row sm:gap-0 gap-5 sm:border-0 border-b border-gray-100 mb-2">
              <span className='sm:text-center text-start font-mono border-0'>12/11</span> <br />
              <span className='sm:text-center text-start'>Hack City 12/11</span>
            </span>
          </div>

          <div className='relative'>
            <MovingDashedLine />
            <MovingDashedLine />
            <button type="button" className="absolute bg-slate-50 border border-black hover:bg-black transition-custom-transition top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block hover:text-white p-4 px-16 text-lg">see all</button>
          </div>
        </div>


      </section>
    </GeneralPaddingX>
  )
}


export function MovingDashedLine({ dir = "rtl" }: { dir?: string }) {
  return (
    <div className={`flex overflow-hidden items-center gap-1 w-full mt-5 ${dir === "ltr" ? "rotate-180" : "rotate-0"}`}>
      <div className='flex items-center animate-loop-scroll border-dashed border-black border-2 w-full flex-shrink-0 h-0'>s</div>
      <div className='flex items-center animate-loop-scroll border-dashed border-black border-2 w-full flex-shrink-0 h-0'>s</div>
    </div>
  )
}
