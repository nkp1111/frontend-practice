"use client";

import Image from 'next/image';
import React, { useState } from 'react'

interface AwardParams {
  award: {
    image: any;
    text: string;
    link: string;
    name: string;
  }
}

export default function SingleAward({ award }: AwardParams) {
  const [hover, setHover] = useState(false);
  return (
    <div className='flex flex-col gap-4 flex-1 items-center cursor-pointer'
      onMouseOver={() => setHover(() => true)}
      onMouseLeave={() => setHover(() => false)}
    >
      <Image
        src={award.image}
        alt={award.name}
        width={40}
        height={40}
        className={`w-44 h-36 ${hover ? "scale-110" : "scale-100"} transition-all duration-300 ease-linear`}
      />

      <h3 className={`text-custom-dark text-sm text-center ${hover ? "underline" : "no-underline"} transition-all duration-300 ease-linear underline-offset-1 font-semibold`} dangerouslySetInnerHTML={{ __html: award.text }}></h3>
    </div>
  )
}
