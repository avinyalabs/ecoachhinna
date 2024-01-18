import Expertise from '@/components/expertise'
import Services from '@/components/services'
import HeroSection from '@/components/hero'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import AboutMe from '@/components/about-me'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <div className="w-full overflow-x-clip space-y-8">
      <div className="bg-gray-600/10">
        <Navbar />
        <HeroSection />
      </div>

      <Expertise />
      <Services />
      <AboutMe />
      <Testimonials />
    </div>
  )
}
