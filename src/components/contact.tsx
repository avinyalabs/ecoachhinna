import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className="px-2 md:px-20 lg:px-56 py-8 space-y-8">
      <div className="text-center flex justify-center items-center flex-col">
        <h3 className="text-6xl font-semibold min-w-0">
          If You Have Any Question,
        </h3>
        <h3 className="text-6xl font-semibold min-w-0">
          Feel Free to Call 123-456-7890
        </h3>
        <div className="w-full md:w-1/2 text-xl py-8 font-light">
          <p className="">
            Ac cum nunc vitae ut turpis praesent nunc odio lorem dictumst
            vestibulum sem pharetra urna pretium.
          </p>
        </div>
        <Link
          href="#"
          className="flex justify-center items-center space-x-4 bg-accent text-white hover:bg-zinc-900 rounded-md text-xl px-8 py-3 w-fit duration-200 "
        >
          <p>Let&apos;s work together</p>
          <MoveRight />
        </Link>
      </div>
    </div>
  )
}
