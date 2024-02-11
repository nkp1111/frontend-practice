"use client";

import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoBackground() {

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-custom-dark flex justify-center items-start overflow-hidden'>
      <div className='relative z-0 w-full h-full'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
          muted={true}
          loop={true}
          playing={true}
          controls={false}
          className="w-full"
          width='100%'
          height='100%'
        />
      </div>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10'></div>
    </div>
  )
}
