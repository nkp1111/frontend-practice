import GeneralPaddingX from '@/components/general/general-padding-x'
import Image from 'next/image'
import React from 'react'
import aboutLogo from "@/public/sections-logo/about_icon.svg"

export default function index() {
  return (
    <GeneralPaddingX>
      <div className='py-10'>
        <figure className='border rounded-full p-4 border-black inline-block'>
          <Image
            src={aboutLogo}
            alt="."
            width={30}
            height={30}
          />
        </figure>

        <p className='mt-20 text-4xl sm:text-5xl md:text-7xl xl:text-8xl'>
          Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. <span data-text={"Support Small Business"} className='relative before:absolute before:animate-wave before:text-transparent overflow-hidden pb-8 before:whitespace-nowrap before:underline before:underline-offset-8 before:decoration-wavy before:decoration-4 before:decoration-custom_yellow before:content-[attr(data-text)attr(data-text)] before:w-32'>Support Small Business</span> this weekend!
        </p>
      </div>
    </GeneralPaddingX>
  )
}
