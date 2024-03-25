import React from 'react'
import Footer from '../general/footer'
import FrontSection from './front-section'
import AdSection from './ad-section'


export default function index() {
  return (
    <section className='bg-custom_blue'>
      <FrontSection />
      <AdSection />
      <Footer />
    </section>
  )
}

