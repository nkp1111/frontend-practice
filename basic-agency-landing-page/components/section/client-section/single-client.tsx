import Image from 'next/image';
import React from 'react'


interface ClientParams {
  client: {
    id: number;
    name: string;
    description: string;
    icon: any;
  }
}

export default function SingleClient({ client }: ClientParams) {
  return (
    <article className='flex flex-col-reverse w-1/3 flex-shrink-0'>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: client.name }} className='uppercase font-bold text-2xl mb-5 mt-16' />
        <p dangerouslySetInnerHTML={{ __html: client.description }} className='font-medium w-10/12 text-lg' />
      </div>
      <div className='flex justify-start flex-col'>
        <Image
          src={client.icon}
          alt={client.name}
          width={client.id === 4 ? 70 : 200}
          height={client.id === 4 ? 70 : 200}
          className='object-scale-down object-left'
        />
        <div className='w-[10%] bg-custom-dark h-[4px]' />
      </div>
    </article>
  )
}
