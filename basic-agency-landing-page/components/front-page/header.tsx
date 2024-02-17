"use client";

import React, { useEffect, useState } from 'react'
import PaddingX from '../general/paddingX';
import { navData } from '@/constant/header-navdata';
import Link from 'next/link';


export default function Header() {
  useEffect(() => {
    // when screen top is less than 50vh
    // background transparent
    // background custom-light
    // on certain section background custom-dark
  }, []);
  return (
    <header className='z-50 relative bg-custom-dark bg-opacity-20 text-custom-light font-bold shadow-sm py-5 blur_background'>
      <PaddingX>
        <nav className="navbar md:justify-between justify-center flex-wrap gap-4 gap-y-2 items-center sm:flex-row flex-col">
          <div className="">
            <Link className="text-2xl" href="/">BASIC/DEPT</Link>
          </div>

          <ul className='flex items-center justify-center flex-row xl:gap-16 lg:gap-10 md:gap-6 gap-2 flex-1 sm:flex-nowrap flex-wrap'>
            {navData.map(item => (
              <AnimatedLink key={item.id} item={item} />
            ))}
          </ul>

          <div className="flex-none">
            <button type="button" className="btn btn-square bg-transparent hover:bg-transparent shadow-none hover:shadow-none border-none hover:scale-x-125 tooltip" data-tip="Options" aria-label='Options'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </nav>
      </PaddingX>
    </header>
  )
}


export function AnimatedLink({ item }: { item: { id: number, name: string, link: string } }) {
  const [showProgress, setShowProgress] = useState(false);
  return (
    <li key={item.id} className='relative flex flex-col gap-1'
      onMouseEnter={() => setShowProgress(true)}
      onMouseLeave={() => setShowProgress(false)}
    >
      <Link href={item.link} className='uppercase text-sm font-medium'>{item.name}</Link>
      <div className={`${showProgress ? "w-full" : "w-0"} h-[2px] transition-all duration-300 ease-linear bg-white`}></div>
    </li>
  )
}
