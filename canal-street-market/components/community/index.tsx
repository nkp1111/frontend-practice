import React from 'react'
import Footer from '../general/footer'
import FrontSection from './front-section'
import AdSection from './ad-section'
import EventSection from './event-section'
import FeatureSection from './feature-section'


export default function index() {
  return (
    <section className='bg-custom_yellow'>
      <FrontSection />
      <EventSection />
      <FeatureSection />
      <AdSection />
      <Footer />
    </section>
  )
}