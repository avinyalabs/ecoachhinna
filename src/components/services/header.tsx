import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import { PageRouter, PageRoutes } from '../navigate-page'
import Link from 'next/link'
// import { CalButton } from '../cal-button'

export default function Header({
  courseName,
  info,
  brief,
  image,
  link,
}: {
  courseName: string
  info: string
  brief: string
  image: string
  link: string
}) {
  return (
    <div className="w-full h-[70vh] py-16 relative bg-zinc-700/50 flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80">
        <Image
          src={image}
          alt={courseName}
          width={3840}
          height={2160}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center md:w-[60%] mt-40">
        <div className="font-black my-auto space-y-5 md:space-y-8 order-2 md:order-1 text-center w-full">
          <h5 className="text-accent text-6xl ">{courseName}</h5>
          <h6 className="text-2xl md:text-3xl lg:text-5xl text-white ">
            {info}
          </h6>
          <p className="font-normal text-zinc-100 text-lg md:text-xl md:w-[600px] mx-auto">
            {brief}
          </p>
          <Link
            className="px-8 py-3 text-base font-medium rounded bg-accent text-white flex justify-center items-center hover:bg-accent/90 duration-200 space-x-2 mx-auto w-fit"
            href={link || '/booking'}
            target="_blank"
          >
            <p>Book an Evaluation Session</p>
            <MoveRightIcon />
          </Link>
          <iframe>h</iframe>
        </div>
        <div className="flex justify-end items-center order-1 md:order-2"></div>
      </div>
    </div>
  )
}
