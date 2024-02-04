import React from 'react'
import Image from 'next/image'

export default function ScrollImages() {
  const imageColor = [""];
  return (
    <div className='md:absolute w-1/2 left-1/4 top-0 flex flex-col'>
      <div className='h-[100vh] flex flex-col items-center p-5'>
        <div className='w-[350] h-[450] relative'>
          <Image
            src={"https://placehold.co/350x450/orange/FFF/png?text=Backstage%20Talks&font=Roboto"}
            alt={"book image"}
            width={350}
            height={450}
            className='mt-10 rounded-md rounded-e-none shadow-xl'
          />
        </div>
      </div>
    </div>
  )
}
