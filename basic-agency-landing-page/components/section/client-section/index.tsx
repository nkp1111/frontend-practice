"use client";

import PaddingX from '@/components/general/paddingX'
import { clientData } from '@/constant/client-data'
import React, { useRef, useState } from 'react'
import SingleClient from './single-client'
import CustomCursor from './custom-cursor';

export default function ClientSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePressed, setMousePressed] = useState<boolean>(false);

  const setCursorPos = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc set custom cursor position to cursor location on div overlay
     */

    // mouse cursor current position
    const xPos = event.clientX;
    const yPos = event.clientY;
    const customCursorEl = cursorRef.current;  // custom cursor element
    // because of section distance from screen x and y position
    // padding for x and y position 
    let xPadding = 0;
    let yPadding = 0;
    if (!customCursorEl) return;

    // section on which custom cursor position
    const clientHolder = document.querySelector(".client-article-holder");
    if (clientHolder) {
      const rect = clientHolder.getBoundingClientRect();
      xPadding = rect.left;
      yPadding = rect.top;
    }
    // position custom cursor accordingly
    customCursorEl.style.top = yPos - yPadding + "px";
    customCursorEl.style.left = xPos - xPadding + "px";
  }

  const resetCursorPos = () => {
    /**
     * @desc resets custom cursor position on section
     */
    const customCursorEl = cursorRef.current;
    if (!customCursorEl) return;
    customCursorEl.style.top = "50%";
    customCursorEl.style.left = "90%";
  }


  return (
    <section className='bg-custom-light overflow-hidden'>
      <PaddingX>
        <div className="flex flex-col-reverse">
          <div className='flex flex-col text-custom-dark py-20 pb-32'>
            <h2 className='text-start font-bold text-5xl uppercase' aria-label='client section'>Featured <br /> Engagements</h2>

            {/* client info  */}
            <div className="flex gap-5 items-start justify-start my-32 overflow-y-visible relative cursor-none client-article-holder"
              onMouseOver={setCursorPos}
              onMouseEnter={setCursorPos}
              onMouseMove={setCursorPos}
              onMouseLeave={resetCursorPos}
              onMouseDown={() => setMousePressed(() => true)}
              onMouseUp={() => setMousePressed(() => false)}
            >
              {clientData.map(client => (
                <SingleClient key={client.id} client={client} />
              ))}

              <CustomCursor cursorRef={cursorRef} />
            </div>

            <div className='w-full h-[1px] border-gray-300 border-2'></div>
          </div>

          <div className='flex text-custom-dark text-sm font-bold items-center mt-3'>
            <p className='w-1/4'>00</p>
            <p>/05</p>
            <span className='ms-auto w-3 h-3 rounded-full bg-custom-dark inline-block'></span>
          </div>
        </div>
      </PaddingX>
    </section>
  )
}
