import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

import { Button } from './ui/button'

import Link from 'next/link'
import Image from 'next/image'
import { LinkedinOutlined } from '@ant-design/icons'
import { ChevronDown } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="px-4 md:px-20 lg:px-36 bg-transparent flex justify-between items-center py-4 md:py-2 ">
      <Link href={'/'}>
        <Image src={'/logo.svg'} width={100} height={100} alt="Logo" />
      </Link>
      <div className="flex justify-center items-center !text-[16px] space-x-4">
        <Link href={'/'}>
          <Button
            variant="ghost"
            className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
          >
            Home
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
        >
          <Link href={'/#about'}>About</Link>
        </Button>
        <Button
          variant="ghost"
          className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
        >
          <Link href={'/booking'}>Booking</Link>
        </Button>

        <div className="hidden md:flex justify-center items-center !text-[16px] hover:text-accent hover:underline duration-200">
          <HoverCard>
            <HoverCardTrigger className="outline-none flex justify-center items-center space-x-1">
              <p>Services</p>
              <ChevronDown size={16} />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-school-kids">For School Kids</Link>
              </div>

              <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-business-owners">
                  For Business Owners with overseas clients
                </Link>
              </div>

              <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="for-better-dating">For Better Dating</Link>
              </div>

              <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-working-professionals">
                  For Working Professionals
                </Link>
              </div>

              <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-home-makers">For Home Makers</Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <button className="px-3 py-1 rounded-sm bg-[#ED3237] text-white">
          <Link href={'/contact-us'} className="w-full h-full">
            Contact Me
          </Link>
        </button>
        <Link
          href="#"
          className="w-fit p-2 text-accent rounded-full ml-2 hidden md:flex"
        >
          <div className="w-fit p-0.5 bg-white rounded-md">
            <LinkedinOutlined className="text-[#ED3237] text-3xl mb-1" />
          </div>
        </Link>
      </div>
    </nav>
  )
}
