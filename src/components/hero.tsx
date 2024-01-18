'use client'
import Image from 'next/image'
import HeroCarousel from './hero-carousel'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="w-full overflow-x-clip  relative h-screen py-8 flex justify-start items-center">
      <div className=" w-[110vw] h-[110vh] absolute  -top-20 -z-20 ">
        <Image
          src="/about-me.png"
          alt="Banner"
          fill
          className="object-fill h-full"
        />
      </div>
      <div className="px-2 md:px-20 py-4 lg:px-56 flex justify-start items-center w-full text-center md:text-left my-auto">
        <div className="space-y-12 w-full md:w-2/3">
          <h1 className="text-5xl lg:text-7xl text-white font-bold">
            Do you say...
          </h1>
          <div className="w-full ">
            <HeroCarousel />
          </div>
          <div className="w-full">
            <Link
              href="#"
              className="flex justify-center items-center text-center text-xl  w-full md:w-[28rem] py-4 bg-white hover:bg-white/10 border-white hover:text-white border-2 duration-200 text-zinc-900 rounded-md space-x-4"
            >
              <p>Then you are at rigth place</p>
              <div className="hover:translate-x-2 duration-300">
                <MoveRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
