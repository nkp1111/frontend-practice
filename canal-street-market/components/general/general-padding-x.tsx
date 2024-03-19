import React from 'react'

export default function GeneralPaddingX({ children }: { children: React.ReactNode }) {
  return (
    <div className='md:px-16 sm:px-10 px-2'>
      {children}
    </div>
  )
}
