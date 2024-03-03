import React from 'react'
import PaddingX from '../general/paddingX'
import ContactForm from './contact-form'
import { footerData } from '@/constant/footer-data'

export default function Footer() {
  return (
    <footer className='min-h-screen bg-custom-dark text-custom-light py-20 pb-28 md:pb-16 relative flex justify-between flex-col gap-20'>
      <PaddingX>
        <div className='flex flex-col md:gap-20 gap-14'>
          <div className='flex md:flex-row flex-col gap-10 font-medium text-3xl'>
            <p className="flex-1">B/D®</p>
            <p className="flex-1 leading-none">We collaborate with ambitious brands and people. Let&apos;s build.<br />
              <a href="mailto:neerajp4321@gmail.com" className='underline'>neerajp4321@gmail.com</a></p>
          </div>

          <div className='flex md:flex-row flex-col gap-10'>
            <div className="flex-1">
              <p className='flex items-center gap-2'><CustomDot /> STAY IN THE KNOW</p>
              <ContactForm />
            </div>
            <div className="flex-1 flex gap-5 justify-between flex-wrap">
              {Object.keys(footerData).map(key => (
                <article key={key}>
                  <h3 className='font-medium text-lg uppercase flex items-center gap-2'><CustomDot /> {key}</h3>
                  <ul className='mt-5'>
                    {footerData[key as any as "social" | "initiatives" | "offices"].map(item => (
                      <li key={item.id}>
                        <a href={item.link} className='capitalize hover:underline mt-1'>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PaddingX>

      <div className='bg-stone-900 py-4'>
        <PaddingX>
          <div className='flex justify-between w-full sm:flex-row flex-col items-center text-[10px]'>
            <span className='bg-custom-dark text-start '>BASIC/DEPT®, INC 10 - 24©</span>
            <span className='bg-custom-dark text-center '>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</span>
            <span className='bg-custom-dark text-end '>TERMS, PRIVACY POLICY</span>
          </div>
        </PaddingX>
      </div>
    </footer>
  )
}


export function CustomDot() {
  return (
    <div className='w-4 h-4 bg-custom-light rounded-full'></div>
  )
}