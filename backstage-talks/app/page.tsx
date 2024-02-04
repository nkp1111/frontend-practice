"use client";

import { Oswald } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import ScrollImages from "./component/scroll-images";
import { backgroundColorClass } from "./component/data";

const inter = Oswald({ weight: ["700"], subsets: ["latin"] });

export default function Home() {
  const [currentView, setCurrentView] = useState(0);
  const issueColors = backgroundColorClass;

  // scroll to that image base on link click on big size screen
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const scrollEl = document.querySelector(".scroll-el") as HTMLElement;
      if (scrollEl) {
        scrollEl.style.transform = `translateY(-${window.innerHeight * currentView}px)`
      }
    }
  }, [currentView]);

  // auto color change based on scroll on small size screen 
  useEffect(() => {
    const height = window.innerHeight * 0.8;
    const offset = 50;
    const body = document.querySelector("main");
    if (window.innerWidth < 768) {
      window.addEventListener("scroll", () => {
        const view = Math.ceil((window.scrollY + offset) / height);
        setCurrentView(() => view - 1);
      })
    }
  });

  return (
    <main className={`md:h-[100vh] w-full p-5 flex flex-col justify-between text-lg ${issueColors[currentView]} transition-all duration-300 ease-linear  relative`}>
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <h1 className={`uppercase font-bold md:text-4xl text-2xl ${inter.className}`}>backstage talks</h1>
        </div>
        <div className="flex-1 text-end md:block hidden">
          <a href="#" className="font-semibold hover:underline transition-all duration-200 ease-linear ">info@backstagetalks.com</a>
        </div>
      </div>

      {/* scroll images  */}
      <ScrollImages />

      <div className="flex-1 flex justify-between items-end">
        <div className="flex-1 md:text-left text-center">
          <p className="md:max-w-[40%] w-full font-semibold">
            Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
          </p>
          <p className={`text-sm mb-5 mt-1 ${currentView === 1 ? "text-gray-600" : "text-gray-200"}`}>&copy; 2024
            <a href="#" className="hover:underline"> Published by Büro Milk</a>
          </p>
          <p className="font-bold"> <a href="#" className="hover:no-underline underline">Privacy Policy</a></p>
        </div>
        <div className="flex-1 text-end flex-col-reverse hidden md:flex">
          {Array(7).fill(0).map((_, index) => (
            <a key={index} href={`#`} className={`hover:underline ${currentView === index ? "font-bold" : "font-normal"}`}
              onClick={() => setCurrentView(index)}
            >Issue # {index + 1}</a>
          ))}
        </div>
      </div >
    </main >
  );
}
