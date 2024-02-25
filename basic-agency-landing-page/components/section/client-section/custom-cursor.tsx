import React from 'react'

interface CustomCursorParams {
  cursorRef: React.RefObject<HTMLDivElement>, mousePressed: boolean, cursorOnLink: boolean
}

export default function CustomCursor({ cursorRef, mousePressed, cursorOnLink }: CustomCursorParams) {
  /**
   * - Custom cursor
   * - follow mouse cursor, using ref pointer
   * - On mouse press change shape 
   * - when cursor on top of links, it becomes transparent
   */
  return (
    <div className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center ${cursorOnLink ? "opacity-50" : "opacity-100"}`} ref={cursorRef}>
      <div className={`rounded-full bg-custom-cream text-custom-dark shadow-sm flex justify-center items-center font-semibold text-center uppercase transition-all duration-300 ease-linear ${mousePressed ? "w-16 h-16" : "w-28 h-28 "}`}>
        {mousePressed ? "" : cursorOnLink ? "" : "Drag"}
      </div>

      {/* show conditionally on mousePressed true  */}
      <span className={`${mousePressed ? "block" : "hidden"}`}>
        {/* left arrow icon */}
        <svg className='w-10 h-10 swap-on fill-custom-cream absolute right-full bottom-1/2 translate-y-1/2' version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z" /></svg>
        {/* right arrow icon */}
        <svg className='w-10 h-10 swap-on fill-custom-cream absolute left-full bottom-1/2 translate-y-1/2' version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M184.7,413.1l2.1-1.8l156.5-136c5.3-4.6,8.6-11.5,8.6-19.2c0-7.7-3.4-14.6-8.6-19.2L187.1,101l-2.6-2.3  C182,97,179,96,175.8,96c-8.7,0-15.8,7.4-15.8,16.6h0v286.8h0c0,9.2,7.1,16.6,15.8,16.6C179.1,416,182.2,414.9,184.7,413.1z" /></svg>
      </span>
    </div>
  )
}
