import React from 'react'
import SingleImageHolder from './single-image-holder';
import { bookImageColors } from "../component/data";

export default function ScrollImages() {
  const imageColor = bookImageColors;
  return (
    <div className={`static md:fixed md:w-1/2 w-auto left-1/4 top-0 flex flex-col scroll-el transition-all ease-linear duration-500 scroll-smooth bg-transparent`}>
      {imageColor.map((color, index) => (
        <SingleImageHolder
          key={index}
          {...{ index, imageColor: color }}
        />
      ))}
    </div>
  )
}
