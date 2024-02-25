import React from 'react'

export default function CustomCursor({ cursorRef }: { cursorRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center`} ref={cursorRef}>
      <div className='w-28 h-28 rounded-full bg-custom-cream text-custom-dark shadow-sm flex justify-center items-center font-semibold text-center uppercase'>
        Drag
      </div>
    </div>
  )
}
