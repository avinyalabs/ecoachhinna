import Expertise from '@/components/expertise'
import AboutMe from '@/components/about-me'
import HeroSection from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Expertise />
      <AboutMe />
    </div>
  )
}
