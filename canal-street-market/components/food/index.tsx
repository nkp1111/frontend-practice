import React from 'react'
import Image from 'next/image'
import mainImage from "@/public/about-section/pexels-w-w-2793729.jpg"
import Footer from '../general/footer'
import FrontSection from './front-section'


export default function index() {
  return (
    <section className='bg-custom_blue'>
      <FrontSection />

      <Footer />
    </section>
  )
}

