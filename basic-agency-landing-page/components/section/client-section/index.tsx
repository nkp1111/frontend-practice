"use client";

import PaddingX from '@/components/general/paddingX'
import { clientData } from '@/constant/client-data'
import React, { useEffect, useRef, useState } from 'react'
import SingleClient from './single-client'
import CustomCursor from './custom-cursor';

export default function ClientSection() {
  const cursorRef = useRef<HTMLDivElement>(null); // pointer to custom cursor
  const [mousePressed, setMousePressed] = useState<boolean>(false);  // whether mouse button is pressed
  const [currentClientPos, setCurrentClientPos] = useState(0);  // 0 or 1 show clients by sliding
  const [changeClientPos, setChangeClientPos] = useState(true); // for stopping spontaneous client article change
  const [cursorCoord, setCursorCoord] = useState({ x: 0, y: 0 });  // current cursor position
  const [cursorOnLink, setCursorOnLink] = useState<boolean>(false);  // whether cursor is on top of link

  const setCursorPos = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc set custom cursor position to cursor location on div overlay
     */
    // mouse cursor current position
    const xPos = event.clientX;
    const yPos = event.clientY;
    setCursorCoord(() => ({ x: xPos, y: yPos }));  // set custom cursor coordinates

    const customCursorEl = cursorRef.current;  // custom cursor element
    if (!customCursorEl) return;

    // because of section distance from screen x and y position
    // padding for x and y position 
    let xPadding = 0;
    let yPadding = 0;
    // section on which custom cursor position
    const clientHolder = document.querySelector(".client-article-holder");
    if (clientHolder) {
      const rect = clientHolder.getBoundingClientRect();
      xPadding = rect.left;  // adding padding according to distance from screen
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
    setMousePressed(() => false);
  }

  const handleClientArticleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    /**
     * @desc on section on mouse down and move event set current article position  
     */
    const setCurrentArticlePos = (direction: string) => {
      let baseClientArticlePos = 0;  // base article position
      let maxClientArticlePos = 2;  // article position for full width
      const currentWidth = window.innerWidth;

      switch (true) {
        case (currentWidth >= 768):  // medium width tailwind
          maxClientArticlePos = 2;
          break;
        case (currentWidth >= 640):  // small width tailwind
          maxClientArticlePos = 3;
          break;
        default:
          maxClientArticlePos = 4;
      }

      if (direction === "right") {  // change client position according to direction
        setCurrentClientPos((pre) => pre < maxClientArticlePos ? pre + 1 : pre);
      } else {
        setCurrentClientPos((pre) => pre > baseClientArticlePos ? pre - 1 : pre);
      }
    }

    if (!changeClientPos) return;
    if (!mousePressed) return;
    const movementX = event.movementX;

    // direction "right" slides client article "left" direction
    if (movementX > 0) setCurrentArticlePos("left");
    // direction "left" slides client article "right" direction
    if (movementX < 0) setCurrentArticlePos("right");

    // only allow client slide every 100ms for better performance
    setChangeClientPos(() => false)
    setTimeout(() => {
      setChangeClientPos(() => true);
    }, 100)
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

  }, [currentClientPos]);


  return (
    <section className='bg-custom-light overflow-hidden'>
      <PaddingX>
        <div className="flex flex-col-reverse">
          <div className='flex flex-col text-custom-dark py-20 pb-32'>
            <h2 className='text-start font-bold text-5xl uppercase' aria-label='client section'>Featured <br /> Engagements</h2>

            {/* client info  */}
            <div className={`flex gap-5 items-start justify-start sm:my-24 my-16 overflow-y-visible transition-all duration-1000 ease-in-out relative client-article-holder ${cursorOnLink ? "cursor-pointer" : "cursor-none"}`}
              onMouseOver={setCursorPos}
              onMouseEnter={setCursorPos}
              onMouseMove={(e) => {
                setCursorPos(e)
                handleClientArticleMove(e)
              }}
              onMouseLeave={resetCursorPos}
              onMouseOut={resetCursorPos}
              onMouseDown={() => setMousePressed(() => true)}
              onMouseUp={() => setMousePressed(() => false)}
            >
              {clientData.map(client => (
                <SingleClient
                  key={client.id}
                  client={client}
                  cursorCoord={cursorCoord}
                  setCursorOnLink={setCursorOnLink}
                />
              ))}

              <CustomCursor
                cursorRef={cursorRef}
                mousePressed={mousePressed}
                cursorOnLink={cursorOnLink}
              />
            </div>

            {/* client article sliding progress bar  */}
            <div className='w-full h-[4px] bg-gray-300 relative'>
              <div className={`md:w-2/3 sm:w-1/2 w-1/3 h-full bg-custom-dark absolute top-0 transition-all duration-300 ease-linear ${currentClientPos === 0 ? "left-0" :
                currentClientPos === 1 ? "md:left-[17%] sm:left-[12%] left-[17%]" :
                  currentClientPos === 2 ? "md:left-1/3  sm:left-1/4 left-1/3" :
                    currentClientPos === 3 ? "sm:left-1/2 left-1/2" : "left-2/3"}`} />
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
