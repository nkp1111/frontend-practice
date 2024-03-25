import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'
import Image from 'next/image'
import workImage from "@/public/about-section/pexels-cowomen-2041393.jpg"
import { foodData } from '@/constant/food-data'


export default function FrontSection() {
  return (
    <GeneralPaddingX>
      <div className='py-10 pt-20'>
        <div className='flex justify-between items-center'>
          <span className='rotate-90 flex items-center gap-3'>
            <span>Food</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <span>Food Hall Hours: <br />
            Mon - Sun: 11:00AM - 8:00PM
          </span>
        </div>


        <div className='mt-20 flex justify-between items-center gap-5 flex-col md:flex-row'>
          <p className='text-6xl md:text-9xl xl:text-[200px]'>The <br /> Food  <br />Hall</p>
          <Image
            src={workImage}
            alt="."
            width={500}
            height={900}
            className='w-auto h-96 object-cover'
          />
        </div>

        <div className='relative grid sm:grid-cols-3 grid-cols-2 gap-3 gap-y-8 md:gap-y-16 mt-16'>

          {foodData.map(item => (
            <a href={item.link} key={item.id} className='group'>
              <article>
                <h3>{item.food_genre}</h3>
                <p className='md:text-3xl text-2xl mt-5'>{item.name}</p>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={500}
                    className='w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block hidden transition-all duration-300 ease-linear bg-transparent opacity-40'
                  />
                )}
              </article>
            </a>
          ))}
        </div>
      </div>
    </GeneralPaddingX>
  )
}
