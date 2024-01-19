'use client'
import Image from 'next/image'
import HeroCarousel from './hero-carousel'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="w-full overflow-x-clip relative h-[80%] md:h-[80%] py-8 flex justify-start items-center">
      <div className="px-4 md:px-20 py-4 lg:px-36 flex justify-between items-center flex-col md:flex-row w-full md:text-left my-auto">
        <div className="space-y-6 w-full md:w-3/5">
          <h1 className="text-3xl lg:text-5xl text-black w-3/4 font-bold">
            Transformative Coaching for Personal Growth Success
          </h1>
          <div className="w-[80%]">
            <HeroCarousel />
          </div>
          <div className="w-full space-y-2">
            <p className="text-gray-500 font-medium opacity-95">
              Want to Start?
            </p>
            <Link
              href="#"
              className="flex justify-center items-center text-center text-xl  w-full md:w-[24rem] py-2 border-[1px] text-white bg-[#ED3237] duration-200 rounded-md space-x-4 "
            >
              <p className="text-lg">Then you are at rigth place</p>
              <div className="hover:translate-x-2 duration-300">
                <MoveRight />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={'/banner-homepage.png'}
            width={600}
            height={600}
            alt="Header Image"
            className="w-96 md:w-[32rem]"
          />
        </div>
      </div>
    </div>
  )
}
