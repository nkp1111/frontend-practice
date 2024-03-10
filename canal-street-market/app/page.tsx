"use client";

import React, { useEffect, useState } from "react";
import HeaderHamburger from "@/components/general/header-hamburger";
import HamburgerMenu from "@/components/general/icons/hamburger";
import CloseIcon from "@/components/general/icons/closeIcon";
import GeneralSectionLayout from "@/components/general/general-section-layout";
import { sectionData } from "@/constant/section-data";

export default function Home() {
  const [activePage, setActivePage] = useState("about");
  const [smallScreen, setSmallScreen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

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
  useEffect(() => {
    if (!smallScreen) setShowHamburger(true);
  }, [smallScreen])


  return (
    <main className="flex min-h-screen transition-custom-transition relative">
      {sectionData.map(section => {
        const { id, name, } = section;
        return (
          <div key={section.id} className={`${activePage === section.name ? "flex-1" : `${smallScreen ? "hidden flex-grow-0" : "block w-16"}`} h-full`}>

            <GeneralSectionLayout
              setActivePage={setActivePage}
              activePage={activePage}
              section={section}
            >
              <div>something</div>
            </GeneralSectionLayout>
          </div>
        )
      })}

      {smallScreen && (
        <>
          <HeaderHamburger setActivePage={setActivePage} showHamburger={showHamburger} />

          <div className={`w-10 h-10 cursor-pointer fixed top-8 right-10 transition-custom-transition`}
            onClick={() => setShowHamburger(pre => !pre)}>
            {showHamburger ? <HamburgerMenu /> : <CloseIcon />}
          </div>
        </>
      )}

    </main>
  );
}
