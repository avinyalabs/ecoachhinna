import Expertise from '@/components/expertise'
import Services from '@/components/services'
import AboutMe from '@/components/about-me'
import Testimonials from '@/components/testimonials'
import HeroSection2 from '@/components/hero2'

export default function Home() {
  return (
    <div className="w-full overflow-x-clip ">
      <div className="">
        {/* <HeroSection /> */}
        <HeroSection2 />
      </div>

      <Expertise />
      <Services />
      <AboutMe />
      <Testimonials />
    </div>
  )
}
