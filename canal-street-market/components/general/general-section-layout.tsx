import Image from 'next/image';
import React from 'react'

interface SectionParams {
  setActivePage: React.Dispatch<React.SetStateAction<string>>
  activePage: string,
  section: {
    id: number;
    name: string;
    logo: any;
    Component: () => JSX.Element;
    baseClass: string;
  },
  children: React.ReactNode,
}

export default function GeneralSectionLayout({ setActivePage, activePage, section, children }: SectionParams) {
  return (
    <div
      className={`transition-custom-transition overflow-x-hidden min-h-screen ${section.baseClass}`}
      onClick={() => {
        setActivePage(section.name)
      }}
    >
      {activePage !== section.name ? (
        <div className='w-full h-screen flex items-center justify-center text-xl tracking-wider capitalize relative'>
          <div className='absolute top-10'>
            <Image
              src={section.logo}
              alt={"."}
              width={35}
              height={35}
            />
          </div>
          <span className='rotate-90'>{section.name}</span>
        </div>
      ) : (
        <>
          {children}
        </>
      )}
    </div>
  )
}
