import React from 'react'
import SingleImageHolder from './single-image-holder';

export default function ScrollImages({ currentView }: { currentView: number }) {
  const imageColor = ["db2777", "e2e2e2", "16a34a", "ea580c", "0284c7", "dc2626", "7c3aed"];
  return (
    <div className='md:fixed w-1/2 left-1/4 top-0 flex flex-col scroll-el transition-all ease-linear duration-500 scroll-smooth'>
      {imageColor.map((color, index) => (
        <SingleImageHolder
          key={index}
          {...{ index, imageColor: color }}
        />
      ))}
    </div>
  )
}
