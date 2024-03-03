"use client";

import React, { useEffect, useState } from "react";
import About from "@/components/about";
import Food from "@/components/food";
import Retail from "@/components/retail";
import Community from "@/components/community";
import HeaderHamburger from "@/components/general/header-hamburger";

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) setSmallScreen(() => true);
      else setSmallScreen(() => false);
    }

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize)
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    }
  }, []);

  return (
    <main className="flex min-h-screen transition-custom-transition relative">
      <div className={`${activePage === "about" ? "flex-1" : `${smallScreen ? "hidden flex-grow-0" : "block flex-[0.05]"}`} h-full`}>
        <About setActivePage={setActivePage} />
      </div>
      <div className={`${activePage === "food" ? "flex-1" : `${smallScreen ? "hidden flex-grow-0" : "block flex-[0.05]"}`} h-full`}>
        <Food setActivePage={setActivePage} />
      </div>
      <div className={`${activePage === "retail" ? "flex-1" : `${smallScreen ? "hidden flex-grow-0" : "block flex-[0.05]"}`} h-full`}>
        <Retail setActivePage={setActivePage} />
      </div>
      <div className={`${activePage === "community" ? "flex-1" : `${smallScreen ? "hidden flex-grow-0" : "block flex-[0.05]"}`} h-full`}>
        <Community setActivePage={setActivePage} />
      </div>

      <HeaderHamburger setActivePage={setActivePage} smallScreen={smallScreen} />
    </main>
  );
}
