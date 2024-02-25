"use client";

import PaddingX from '@/components/general/paddingX'
import { clientData } from '@/constant/client-data'
import React, { useEffect, useRef, useState } from 'react'
import SingleClient from './single-client'
import CustomCursor from './custom-cursor';

export default function ClientSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePressed, setMousePressed] = useState<boolean>(false);
  const [currentClientPos, setCurrentClientPos] = useState(0);  // 0 or 1 show clients by sliding
  const [changeClientPos, setChangeClientPos] = useState(true); // for stopping spontaneous client article change
  const [cursorCoord, setCursorCoord] = useState({ x: 0, y: 0 });

  const setCursorPos = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc set custom cursor position to cursor location on div overlay
     */

    // mouse cursor current position
    const xPos = event.clientX;
    const yPos = event.clientY;
    setCursorCoord(() => ({ x: xPos, y: yPos }));  // set custom cursor coordinates

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

  const handleClientArticleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc on section on mouse down and move event set current article position  
     */
    const setCurrentArticlePos = (direction: string) => {
      let baseClientArticlePos = 0;  // base article position
      let maxClientArticlePos = 2;  // article position for full width
      const currentWidth = window.innerWidth;

      // medium width tailwind
      if (currentWidth >= 768) {
        maxClientArticlePos = 2;
        if (direction === "right") {  // change client position according to direction
          setCurrentClientPos((pre) => pre < maxClientArticlePos ? pre + 1 : pre);
        } else {
          setCurrentClientPos((pre) => pre > baseClientArticlePos ? pre - 1 : pre);
        }
      }
      // small width tailwind
      else if (currentWidth >= 640) {
        maxClientArticlePos = 3;
        if (direction === "right") {  // change client position according to direction
          setCurrentClientPos((pre) => pre < maxClientArticlePos ? pre + 1 : pre);
        } else {
          setCurrentClientPos((pre) => pre > baseClientArticlePos ? pre - 1 : pre);
        }
      }
      else {
        maxClientArticlePos = 4;
        if (direction === "right") {  // change client position according to direction
          setCurrentClientPos((pre) => pre < maxClientArticlePos ? pre + 1 : pre);
        } else {
          setCurrentClientPos((pre) => pre > baseClientArticlePos ? pre - 1 : pre);
        }
      }
    }

    if (!changeClientPos) return;
    if (!mousePressed) return;
    const movementX = event.movementX;

    // direction "right" slides client article "left" direction
    if (movementX > 0) {
      setCurrentArticlePos("left")
    }
    // direction "left" slides client article "right" direction
    if (movementX < 0) {
      setCurrentArticlePos("right")
    }

    // only allow client slide every 2s for better performance
    setChangeClientPos(() => false)
    setTimeout(() => {
      setChangeClientPos(() => true);
    }, 500)
  }


  useEffect(() => {
    /**
     * @desc slides article holder based on current article position
     */
    const clientHolder: HTMLElement | null = document.querySelector(".client-article-holder");  // article holder to slide
    if (!clientHolder) return;
    let articleNumOnScreen = 3; // number of articles visible on screen at a time
    let oneArticleWidth;
    const currentWidth = window.innerWidth;

    // medium width tailwind
    if (currentWidth >= 768) {
      const paddingX = 80; // according to padding applied on section
      articleNumOnScreen = 3;
      oneArticleWidth = (currentWidth - paddingX) / articleNumOnScreen; // calculate one article width
    }
    // small width tailwind
    else if (currentWidth >= 640) {
      const paddingX = 40;
      articleNumOnScreen = 2;
      oneArticleWidth = (currentWidth - paddingX) / articleNumOnScreen;
    }
    else {
      const paddingX = 32;
      articleNumOnScreen = 1;
      oneArticleWidth = (currentWidth - paddingX) / articleNumOnScreen;
    }

    clientHolder.style.transform = `translateX(-${oneArticleWidth * currentClientPos}px)`; // slide article holder
    // clientHolder.style.transition = `transform 1s ease-in-out`;

  }, [currentClientPos]);


  return (
    <section className='bg-custom-light overflow-hidden'>
      <PaddingX>
        <div className="flex flex-col-reverse">
          <div className='flex flex-col text-custom-dark py-20 pb-32'>
            <h2 className='text-start font-bold text-5xl uppercase' aria-label='client section'>Featured <br /> Engagements</h2>

            {/* client info  */}
            <div className="flex gap-5 items-start justify-start sm:my-32 my-16 overflow-y-visible transition-all duration-1000 ease-in-out relative cursor-none client-article-holder"
              onMouseOver={setCursorPos}
              onMouseEnter={setCursorPos}
              onMouseMove={(e) => {
                setCursorPos(e)
                handleClientArticleMove(e)
              }}
              onMouseLeave={resetCursorPos}
              onMouseDown={() => setMousePressed(() => true)}
              onMouseUp={() => setMousePressed(() => false)}
            >
              {clientData.map(client => (
                <SingleClient
                  key={client.id}
                  client={client}
                  cursorCoord={cursorCoord}
                />
              ))}

              <CustomCursor
                cursorRef={cursorRef}
                mousePressed={mousePressed}
              />
            </div>

            <div className='w-full h-[4px] bg-gray-300 relative'>
              <div className={`md:w-2/3 sm:w-1/2 w-1/3 h-full bg-custom-dark absolute top-0 transition-all duration-300 ease-linear ${currentClientPos === 0 ? "left-0" :
                currentClientPos === 1 ? "md:left-[17%] sm:left-[12%] left-[17%]" :
                  currentClientPos === 2 ? "md:left-1/3  sm:left-1/4 left-1/3" :
                    currentClientPos === 3 ? "sm:left-1/2 left-1/2" : "left-2/3"}`}></div>
            </div>
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
