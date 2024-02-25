"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'


interface ClientParams {
  client: {
    id: number;
    name: string;
    description: string;
    icon: any;
  },
  cursorCoord: { x: number, y: number }
}

export default function SingleClient({ client, cursorCoord }: ClientParams) {
  const [cursorOnLink, setCursorOnLink] = useState<Element | null>(null);

  useEffect(() => {
    const clientLinks = document.querySelectorAll(".client-link");
    console.log(clientLinks)
    for (let i = 0; i < clientLinks.length; i++) {
      const link = clientLinks[i];
      console.log(cursorCoord, link.getBoundingClientRect())
      const { x, y, width, height } = link.getBoundingClientRect();
    }
  }, []);

  useEffect(() => {
    console.log(cursorOnLink)
  }, [cursorOnLink]);


  return (
    <article className='flex flex-col-reverse md:w-1/3 sm:w-1/2 w-full flex-shrink-0 focus:ring-0 focus:outline-none transition-all duration-300 ease-linear'>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: client.name }} className='uppercase font-bold text-2xl mb-5 mt-16 focus:ring-0 focus:outline-none' />
        <p dangerouslySetInnerHTML={{ __html: client.description }} className='font-medium w-10/12 text-lg focus:ring-0 focus:outline-none' />
      </div>
      <div className='flex justify-start flex-col focus:ring-0 focus:outline-none'>
        <Image
          src={client.icon}
          alt={client.name}
          width={client.id === 4 ? 70 : 200}
          height={client.id === 4 ? 70 : 200}
          className='object-scale-down object-left focus:ring-0 focus:outline-none'
        />
        <div className='w-[10%] bg-custom-dark h-[4px]' />
      </div>
    </article>
  )
}
