import PaddingX from '@/components/general/paddingX'
import React from 'react'
import SingleNews from './single-news'
import { newsData } from '@/constant/news-data'

export default function NewsSection() {
  return (
    <section className='bg-custom-light overflow-hidden'>
      <PaddingX>
        <div className="flex flex-col py-20 pb-32 ">
          <div className='flex row text-custom-dark justify-between w-full'>
            <h2 className='text-start font-bold text-5xl uppercase' aria-label='client section'>Featured <br /> news</h2>
            <button type="button" className={`btn relative mt-8 rounded-full px-9 text-custom-dark border border-custom-dark py-1 btn-sm uppercase bg-transparent transition-all duration-300 ease-linear overflow-hidden
              before:bg-custom-dark before:h-0 hover:before:h-full before:w-full before:absolute before:top-full hover:before:top-0 before:left-0 before:rounded-full before:transition-all before:duration-300 before:ease-linear before:text-custom-light before:flex before:items-center before:justify-center hover:before:content-[var(--view-all-text)]`}>View all</button>
          </div>

          <ul className='flex flex-col'>
            {newsData.map(item => (
              <SingleNews item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </PaddingX>
    </section>
  )
}
