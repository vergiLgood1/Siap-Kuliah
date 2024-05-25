import React from 'react'
import { Hero } from './_components/hero'
import { Features } from './_components/features'
import { Counselor } from './_components/counselor'
import { Testimonial } from './_components/testimonial'
import { Pricing } from './_components/pricing'
import Footer from './_components/footer'
import Faq from './_components/faq'
import Cta from './_components/cta'


const MarketingPage = () => {
  return (
    <div className='dark:bg-[#1F1F1F]'>
      <Hero/>
      <Features/>
      <Counselor/>
      <Testimonial/>
      <Pricing/>
      <Faq/>
      <Cta/>
      <Footer/>

    </div>
  )
}

export default MarketingPage
