"use client";

import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoBackground() {

  return (
    <div className='absolute top-0 left-0 right-0 md:h-full h-3/4 bg-custom-dark flex justify-center items-start overflow-hidden -z-0'>
      <div className='relative z-0 w-full h-full -left-[10%] -top-[10%] flex-1'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          muted={true}
          loop={true}
          playing={true}
          controls={false}
          width='120%'
          height='120%'
        />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10'></div>
    </div>
  )
}
