import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'

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
    <div className="px-2 md:px-20 lg:px-36 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="font-black my-auto space-y-8 order-2 md:order-1 text-center md:text-left ">
          <h5 className="text-[#ED3237] text-6xl">{courseName}</h5>
          <h6 className="text-3xl md:text-4xl lg:text-6xl">{info}</h6>
          <p className="font-normal text-zinc-700 text-xl">{brief}</p>
          <button className="px-8 py-3 text-base font-medium rounded-sm bg-[#ED3237] text-white flex justify-center items-center hover:bg-[#ED3237]/90 duration-200 space-x-2 mx-auto md:mx-0">
            <p>Contact Me</p>
            <MoveRightIcon />
          </button>
        </div>
        <div className="flex justify-end items-center order-1 md:order-2">
          <Image
            src="/banner-homepage.png"
            alt={courseName}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
