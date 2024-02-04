import React from 'react'
import Image from 'next/image'
import BarcodeSvg from './barcode-svg';

export default function ScrollImages({ currentView }: { currentView: number }) {
  const imageColor = ["db2777", "e2e2e2", "16a34a", "ea580c", "0284c7", "dc2626", "7c3aed"];
  return (
    <div className='md:absolute w-1/2 left-1/4 top-0 flex flex-col'>
      <div className='h-[100vh] flex flex-col items-center p-5'>
        <div className='w-[350] h-[450] relative mt-10 rounded-md rounded-e-none shadow-xl'>
          <Image
            src={`https://placehold.co/350x450/${imageColor[currentView]}/${currentView === 1 ? "000" : "FFF"}/png?font=Roboto&text=Backstage Talks`}
            alt={"book image"}
            width={350}
            height={450}
            className='transition-all duration-200 ease-linear'
          />
          <div className={`absolute top-0 left-2 bottom-0 ${currentView === 1 ? "border-black" : "border-white"} border opacity-10 transition-all duration-200 ease-linear`}></div>
          <small className={`absolute top-2 right-2 text-xs ${currentView === 1 ? "text-black" : "text-white"} transition-all duration-200 ease-linear`}>
            Dialogues on Design and business
          </small>

          <div className={`w-20 h-20 rounded-full absolute right-0 top-10 translate-x-1/2 ${currentView === 1 ? "bg-orange-600" : "bg-black"} flex items-center justify-center text-white text-base`}>
            Issue {currentView + 1}
          </div>

          <small className={`absolute bottom-2 left-0 px-5 text-[8px] ${currentView === 1 ? "text-black" : "text-white"}
         transition-all duration-200 ease-linear flex justify-between w-full items-center overflow-hidden`}>
            <span className='w-10 h-5 bg-white p-1 flex justify-center items-center'>
              <BarcodeSvg />
            </span>
            <span className="flex gap-3">
              <span>Backstage Talks/By Design Magazine</span>
              <span className='font-bold'>Issue {currentView + 1}</span>
            </span>
          </small>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='font-medium text-xl text-black my-5'>Issue #{currentView + 1}</h2>
          <a href="#" className={`${currentView === 1 ? "text-orange-600" : "text-white"} font-bold text-lg uppercase hover:underline`}>Buy Here</a>
          <p className='mt-3'>or in <a href="#" className={`${currentView === 1 ? "text-orange-600" : "text-white"} hover:underline`}>selected stores</a></p>
        </div>
      </div>
    </div>
  )
}
