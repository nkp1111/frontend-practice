import React from 'react'

export default function PaddingX({ children }: { children: React.ReactNode }) {
  return (
    <div className='md:px-20 sm:px-10 px-4'>
      {children}
    </div>
  )
}
