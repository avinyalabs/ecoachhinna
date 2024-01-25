import Image from 'next/image'
import { Navbar2 } from './navbar2'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import HeroCarousel from './hero-carousel'

export default function HeroSection2() {
  return (
    <div className="w-full h-[80vh] lg:h-screen py-16 relative flex justify-center items-center bg-black/40">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={'/hero-bg.jpg'}
          alt={'Hero'}
          width={3840}
          height={2160}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6 w-full md:w-3/5 text-white mx-5 md:mx-0 py-5 mt-10 md:mt-0">
        <p className="font-semibold">Hinna</p>
        <h1 className="text-3xl lg:text-5xl w-full md:w-3/4 font-bold">
          Transformative Coaching for Personal Growth Success
        </h1>
        <div className="w-[90%] md:w-[60%] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam
          eum nihil, dolorum praesentium dolorem vitae expedita provident
          quaerat delectus.
        </div>
        <div className="w-full space-y-2">
          <p className=" font-medium opacity-95">Want to Start?</p>
          <Link
            href="#"
            className="flex justify-center items-center text-center text-xl w-full md:w-[24rem] py-2 border-[1px] border-accent bg-accent hover:bg-accent/0 hover:border-white duration-200 rounded-md space-x-4 px-2"
          >
            <p className="text-lg">Then you are at rigth place</p>
            <div className="hover:translate-x-2 duration-300">
              <MoveRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
