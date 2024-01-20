import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
// import { CalButton } from '../cal-button'

export default function Header({
  courseName,
  info,
  brief,
}: {
  courseName: string
  info: string
  brief: string
}) {
  return (
    <div className="w-full lg:h-screen py-16 relative bg-zinc-700/50 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80">
        <Image
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={courseName}
          width={4821}
          height={2712}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center md:w-[60%]">
        <div className="font-black my-auto space-y-8 order-2 md:order-1 text-center  w-full">
          <h5 className="text-[#ED3237] text-6xl ">{courseName}</h5>
          <h6 className="text-3xl md:text-4xl lg:text-6xl text-white ">
            {info}
          </h6>
          <p className="font-normal text-zinc-100 text-xl md:w-[600px] mx-auto">
            {brief}
          </p>
          <button className="px-8 py-3 text-base font-medium rounded bg-[#ED3237] text-white flex justify-center items-center hover:bg-[#ED3237]/90 duration-200 space-x-2 mx-auto ">
            <p>Get in Touch</p>
            <MoveRightIcon />
          </button>
          {/* <CalButton className="mx-auto px-8 py-3 text-base font-medium rounded bg-[#ED3237] text-white flex justify-center items-center hover:bg-[#ED3237]/90 duration-200 space-x-2" /> */}
        </div>
        <div className="flex justify-end items-center order-1 md:order-2"></div>
      </div>
    </div>
  )
}
