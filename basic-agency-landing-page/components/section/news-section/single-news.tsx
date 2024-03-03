import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'


interface SingleNewsParams {
  item: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    press: string;
    link: string;
  }
}

export default function SingleNews({ item }: SingleNewsParams) {
  return (
    <li className='border-t border-custom-dark mt-16 text-custom-dark py-5 group selection:text-custom-light selection:bg-custom-dark'>
      <Link href={item.link}>
        <div className='flex gap-5'>
          <div className='relative overflow-hidden flex-shrink-0'>
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className='md:w-96 h-64 object-center object-cover transition-all duration-300 ease-linear group-hover:scale-105'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className='font-medium text-5xl md:w-10/12 group-hover:underline transition-all duration-300 ease-linear'>{item.title}</h3>
              <p className='text-sm'>{item.description.slice(0, 40)}</p>
            </div>
            <p className='uppercase'>Press {item.press}</p>
          </div>
          <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" className={`icon flat-line w-10 h-10 group-hover:animate-ping`}><line id="primary" x1="3" y1="12" x2="21" y2="12" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} stroke="#000" fill={"none"} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} stroke="#000" fill={"none"} /></svg>
          </div>
        </div>
      </Link>
    </li>
  )
}
