"use client";

import { Oswald } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import ScrollImages from "./component/scroll-images";

const inter = Oswald({ weight: ["700"], subsets: ["latin"] });

export default function Home() {
  const [currentView, setCurrentView] = useState(0);
  const issueColors = ["bg-pink-500", "bg-white", "bg-green-500", "bg-orange-500", "bg-sky-500", "bg-red-500", "bg-violet-500"];
  useEffect(() => {
    const scrollEl = document.querySelector(".scroll-el") as HTMLElement;
    if (scrollEl) {
      scrollEl.style.transform = `translateY(-${window.innerHeight * currentView}px)`
    }
  }, [currentView]);

  return (
    <main className={`h-[100vh] p-5 flex flex-col justify-between text-lg ${issueColors[currentView]} transition-all duration-300 ease-linear  relative`}>
      <div className="flex-1 flex justify-between">
        <div className="flex-1">
          <h1 className={`uppercase font-bold text-4xl ${inter.className}`}>backstage talks</h1>
        </div>
        <div className="flex-1 text-end">
          <a href="#" className="font-semibold hover:underline transition-all duration-200 ease-linear ">info@backstagetalks.com</a>
        </div>
      </div>

      {/* scroll images  */}
      <ScrollImages currentView={currentView} />

      <div className="flex-1 flex justify-between items-end">
        <div className="flex-1">
          <p className="max-w-[40%] font-semibold">
            Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
          </p>
          <p className={`text-sm mb-5 mt-1 ${currentView === 1 ? "text-gray-600" : "text-gray-200"}`}>&copy; 2024
            <a href="#" className="hover:underline"> Published by Büro Milk</a>
          </p>
          <p className="font-bold"> <a href="#" className="hover:no-underline underline">Privacy Policy</a></p>
        </div>
        <div className="flex-1 text-end flex flex-col-reverse">
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
