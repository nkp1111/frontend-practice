"use client";

import React, { useEffect, useState } from 'react'

export default function ContactForm() {
  const [inputFocussed, setInputFocussed] = useState(false);
  useEffect(() => {
    const inputField = document.getElementsByTagName("input")[0];
    const inputFocusCheck = () => {
      if (inputField === document.activeElement) setInputFocussed(() => true);
      else setInputFocussed(() => false);
    }

    inputFocusCheck();
    inputField.addEventListener("focusin", inputFocusCheck);
    inputField.addEventListener("focusout", inputFocusCheck);

    return () => {
      inputField.removeEventListener("focusin", inputFocusCheck);
      inputField.removeEventListener("focusout", inputFocusCheck);
    }
  }, []);
  return (
    <form className={`mt-4  border-custom-light flex  md:w-10/12 transition-all duration-300 ease-linear ${inputFocussed ? "border-b-2" : "border-b"}`}>
      <input type="search" id="default-search" className="block w-full py-2 text-lg bg-transparent focus:outline-none focus:border-none" placeholder="Email Address" required />
      <svg xmlns="http://www.w3.org/2000/svg" fill="#f4f4f4" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Line" className={`icon flat-line w-10 h-10`}><line id="primary" x1="3" y1="12" x2="21" y2="12" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} stroke="#f4f4f4" fill={"none"} /><polyline id="primary-2" data-name="primary" points="18 15 21 12 18 9" strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} stroke="#f4f4f4" fill={"none"} /></svg>
    </form>
  )
}
