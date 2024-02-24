import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface AwardParams {
  award: {
    image: any;
    text: string;
    link: string;
    name: string;
  }
}

export default function SingleAward({ award }: AwardParams) {
  return (
    <Link className='flex flex-col gap-4 flex-1 items-center group'
      href={award.link}
    >
      <Image
        src={award.image}
        alt={award.name}
        width={40}
        height={40}
        className={`w-44 h-36 group-hover:scale-110 transition-all duration-300 ease-linear`}
      />

      <h3 className={`text-custom-dark text-sm text-center group-hover:underline transition-all duration-300 ease-linear underline-offset-1 font-semibold`} dangerouslySetInnerHTML={{ __html: award.text }}></h3>
    </Link>
  )
}
