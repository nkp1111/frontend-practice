import React from 'react'
import { awards } from '@/constant/awards-data'
import SingleAward from './single-award'

export default function AwardSection() {

  return (
    <section className='bg-custom-light py-28'>
      <h2 className='text-center invisible' aria-label='home award section'>Home award section</h2>
      <div className="flex justify-center md:items-center items-start gap-6 w-full md:px-32 px-8">
        {awards.map((award, ind) => (
          <SingleAward key={ind} award={award} />
        ))}
      </div>
    </section>
  )
}
