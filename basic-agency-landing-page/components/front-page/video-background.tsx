"use client";

import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

export default function VideoBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const setCursorPos = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc set custom cursor position to cursor location on div overlay
     */
    const xPos = event.clientX;
    const yPos = event.clientY;
    const customCursorEl = cursorRef.current;
    if (!customCursorEl) return;
    customCursorEl.style.top = yPos + "px";
    customCursorEl.style.left = xPos + "px";
  }

  const resetCursorPos = () => {
    /**
     * @desc resets custom cursor position to div overlay center
     */
    const customCursorEl = cursorRef.current;
    if (!customCursorEl) return;
    customCursorEl.style.top = "50%";
    customCursorEl.style.left = "50%";
  }

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

      {/* cursor-[url("https://placehold.co/100x100/fff/000?text=Watch++Reel"),_pointer] */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10 hover:cursor-none'
        onMouseOver={setCursorPos}
        onMouseEnter={setCursorPos}
        onMouseMove={setCursorPos}
        onMouseLeave={resetCursorPos}
      ></div>

      {/* custom cursor */}
      <div className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`} ref={cursorRef}>
        <div className='w-28 h-28 rounded-full bg-custom-light text-custom-dark shadow-sm flex justify-center items-center font-semibold text-center uppercase'>
          Watch<br />Reel
        </div>
        <div className='text-center font-bold text-custom-light mt-2'>
          <span className='uppercase'>Basic/Dept</span> <br />
          <span className='text-xs -mt-3'>2010-&#8734;</span>
        </div>
      </div>
    </div>
  )
}
