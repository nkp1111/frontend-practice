import React from 'react'
import GeneralPaddingX from '../general/general-padding-x'
import { featureData } from '@/constant/feature-data'
import Image from 'next/image'

export default function FeatureSection() {
  return (
    <section className='my-20'>
      <GeneralPaddingX>
        <h2 className='font-medium text-6xl md:text-8xl mb-10'>Features</h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-24">
          {featureData.map(item => (
            <article key={item.id} className='relative flex'>
              <h3 className='bg-white p-5 text-4xl absolute -bottom-10 left-5 inline-block before:absolute before:w-4 before:top-2 before:bottom-2 before:-left-2 before:bg-white'><a href={item.link}>{item.title}</a></h3>
              <div className='w-full h-96 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={500}
                  className='w-full object-contain'
                />
              </div>
            </article>
          ))}
        </div>

        <div className='flex mt-20'>
          <button type="button" className="w-full bg-custom_yellow border border-black hover:bg-black transition-custom-transition inline-block hover:text-white p-4 px-16 text-lg">view all stories</button>
        </div>
      </GeneralPaddingX>
    </section>
  )
}
