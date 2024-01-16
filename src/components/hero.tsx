'use client'
import Image from 'next/image'
import HeroCarousel from './hero-carousel'
import { Button } from './ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="w-screen overflow-clip relative h-full">
      <div className="bg-gradient-to-r from-[#ee3237] via-[#ff984e] to-[#ffcb62] blur-md w-screen h-full absolute opacity-20 top-0 -z-10"></div>
      <div className="px-2 md:px-20 py-8 lg:px-56 grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full">
        <div className="space-y-12">
          <h1 className="text-5xl lg:text-7xl text-[#ee3237] font-bold">
            Do you say...
          </h1>
          <div className="w-full ">
            <HeroCarousel />
          </div>
          <div className="w-full">
            <Link
              href="#"
              className="block text-center text-2xl lg:text-3xl px-4 lg:px-12 w-full md:w-fit py-5 bg-[#ee3237] hover:bg-[#ee3237]/80 duration-200 text-white rounded-md"
            >
              Then you are at rigth place
            </Link>
          </div>
        </div>
        <Image
          src="/banner-homepage.png"
          alt="Banner"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}
