import React from 'react'

export default function HeaderHamburger({ setActivePage, smallScreen }: { setActivePage: React.Dispatch<React.SetStateAction<string>>, smallScreen: boolean }) {
  return (
    <div className={`${smallScreen ? "block" : "hidden"} absolute top-5 right-5 grid grid-cols-2`}>
      <div
        className="transition-custom-transition bg-custom_red cursor-pointer w-20 h-20"
        onClick={() => setActivePage("retail")}
      >
        Retail
      </div>
      <div
        className="transition-custom-transition bg-white cursor-pointer w-20 h-20"
        onClick={() => setActivePage("about")}
      >
        About
      </div>
      <div
        className="transition-custom-transition bg-custom_yellow cursor-pointer w-20 h-20"
        onClick={() => setActivePage("community")}
      >
        Community
      </div>
      <div
        className="transition-custom-transition bg-custom_blue cursor-pointer w-20 h-20"
        onClick={() => setActivePage("food")}
      >
        Food
      </div>
    </div>
  )
}
