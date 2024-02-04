import React from 'react'
import SingleImageHolder from './single-image-holder';
import { bookImageColors } from "../component/data";

export default function ScrollImages({ currentView }: { currentView: number }) {
  const imageColor = bookImageColors;
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
