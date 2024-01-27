'use client'
import Expertise from '@/components/expertise'
import Services from '@/components/services'
import AboutMe from '@/components/about-me'
import Testimonials from '@/components/testimonials'
import HeroSection2 from '@/components/hero2'
import { useEffect, useState } from 'react'
import LoadingAnimation from '@/components/loading-animation'
import Events from '@/components/events'
import HeroSection from '@/components/hero'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {loading ? (
        <div className="h-[100dvh] fixed w-[100dvw] top-0 left-0 overflow-hidden !bg-white">
          <div className="flex justify-center w-full h-full items-center">
            <LoadingAnimation />
          </div>
        </div>
      ) : (
        <div className="w-full overflow-x-clip ">
          <div className="">
            <HeroSection />
            {/* <HeroSection2 /> */}
          </div>
          <Events />
          <AboutMe />
          <Expertise />
          <Services />
          {/* How does it work */}
          <Testimonials />
        </div>
      )}
    </div>
  )
}
