import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface WorkParams {
  work: {
    id: number;
    title: string;
    link: string;
    description: string;
    image: StaticImageData;
  }
}

export default function SingleWork({ work }: WorkParams) {
  return (
    <article className='flex flex-1 group'
    >
      <Link href={work.link} className='flex flex-col-reverse'>
        <div>
          <h3 className='font-bold text-xl mt-5 mb-4 group-hover:underline transition-all duration-300 ease-linear'>{work.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: work.description }} className='text-sm'></p>
        </div>
        <div className='w-full overflow-hidden'>
          <Image
            src={work.image}
            alt={work.title}
            width={300}
            height={700}
            className='object-cover object-center w-full md:h-[600px] sm:h-[300px] h-[200px] group-hover:scale-105 transition-all duration-300 ease-linear'
          />
        </div>
      </Link>
    </article>
  )
}
