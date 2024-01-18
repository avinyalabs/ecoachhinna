import Expertise from '@/components/Expertise'
import Services from '@/components/services'
import HeroSection from '@/components/hero'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import AboutMe from '@/components/about-me'

export default function Home() {
  return (
    <div className="w-full overflow-x-clip space-y-8">
      <div className="">
        <Navbar />
        <HeroSection />
      </div>

      <Expertise />
      <Services />
      <AboutMe />
    </div>
  )
}
