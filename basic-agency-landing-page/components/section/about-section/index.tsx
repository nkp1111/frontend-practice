"use client";

import PaddingX from '@/components/general/paddingX'
import Image from 'next/image';
import React from 'react'
import backImg from "@/public/about-us/pexels-chantal-lenting-11829576.jpg";

export default function AboutUs() {
  return (
    <section className='bg-custom-dark text-custom-cream'>
      <h2 className='text-center invisible' aria-label='about us section'>About us section</h2>
      <PaddingX>
        <div className='flex flex-col  py-16  items-start overflow-hidden max-h-screen '>
          <div className='w-full flex md:flex-row flex-col gap-10'>
            <div className='flex-1'>
              <p className='text-8xl font-bold leading-none selection:text-custom-dark selection:bg-custom-cream'>
                BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE
              </p>
              <p className='my-5 selection:text-custom-dark selection:bg-custom-cream'>ADWEEK AGENCY SPOTLIGHT</p>

              <button type="button" className={`btn relative mt-8 rounded-full px-9 text-custom-cream border border-custom-cream py-1 btn-sm uppercase bg-transparent transition-all duration-300 ease-linear overflow-hidden
              before:bg-custom-cream before:h-full before:w-full before:absolute before:top-full hover:before:top-0 before:left-0 before:rounded-full before:transition-all before:duration-300 before:ease-linear before:text-custom-dark before:flex before:items-center before:justify-center hover:before:content-[var(--about-us-text)] before:font-semibold`}>About us</button>
            </div>

            <div className='flex-1 bg-custom-dark flex justify-center items-center'>
              <Image
                src={backImg || "https://source.unsplash.com/random/?magic"}
                alt={"."}
                width='450'
                height='700'
                className='w-auto h-auto object-cover object-center'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </PaddingX>
    </section>
  )
}
