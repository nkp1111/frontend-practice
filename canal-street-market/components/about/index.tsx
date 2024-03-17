import React from 'react'
import FrontSection from "./front-section"
import Image from 'next/image'
import mainImage from "@/public/about-section/pexels-w-w-2793729.jpg"
import MarketSection from './market-section'


export default function index() {
  return (
    <section>
      <FrontSection />
      <div className='h-screen w-full my-10 overflow-hidden relative'>
        <Image
          src={mainImage}
          alt=""
          width={1000}
          height={1000}
          className='h-auto w-full'
          priority
        ></Image>
      </div>
      <MarketSection />
    </section>
  )
}
