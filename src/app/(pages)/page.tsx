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
import { useLoaded } from '@/store/loading'
import HowItWorks from '@/components/how-does-it-work'

export default function Home() {
  // const [loading, setLoading] = useState(true)
  const { loaded, setLoaded } = useLoaded()

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
  }, [])
  if (!loaded) {
    return (
      <div className="h-[100dvh] fixed w-[100dvw] top-0 left-0 overflow-hidden !bg-black">
        <div className="flex justify-center w-full h-full items-center">
          <LoadingAnimation />
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="w-full overflow-x-clip ">
        <div>
          <HeroSection />
          {/* <HeroSection2 /> */}
        </div>
        <Events />
        <AboutMe />
        <Expertise />
        <Services />
        <HowItWorks />
        <Testimonials />
      </div>
    </div>
  )
}
