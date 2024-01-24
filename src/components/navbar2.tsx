import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { ChevronDown } from 'lucide-react'
import { LinkedinOutlined } from '@ant-design/icons'

export const Navbar2 = () => {
  return (
    <nav className="px-4 md:px-20 lg:px-56 flex justify-between items-center py-4 md:py-4 border-b-[2px] border-[rgba(255,255,255,0.16)]">
      <div className="flex text-white">
        <Link href={'/'}>
          <Image src={'/logo.png'} width={100} height={100} alt="Logo" />
        </Link>
        <div className="flex justify-center items-center !text-[16px] space-x-4 md:space-x-2 lg:space-x-4">
          <Link href={'/'}>
            <Button
              variant="ghost"
              className="hidden md:flex hover:text-accent text-[18px]"
            >
              Home
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="hidden md:flex hover:text-accent !text-[18px]"
          >
            <Link href={'/#about'}>About</Link>
          </Button>
          <Button
            variant="ghost"
            className="hidden md:flex hover:text-accent !text-[18px]"
          >
            <Link href={'/booking'}>Booking</Link>
          </Button>
        </div>
        <div className="hidden md:flex justify-center items-center !text-[18px] hover:text-accent hover:underline duration-200 ml-2">
          <HoverCard>
            <HoverCardTrigger className="outline-none flex justify-center items-center space-x-1 cursor-pointer">
              <p>Services</p>
              <ChevronDown size={16} />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="border-gray-500 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-school-kids">For School Kids</Link>
              </div>

              <div className="border-gray-500 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-business-owners">
                  For Business Owners with overseas clients
                </Link>
              </div>

              <div className="border-gray-500 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="for-better-dating">For Better Dating</Link>
              </div>

              <div className="border-gray-500 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-working-professionals">
                  For Working Professionals
                </Link>
              </div>

              <div className="border-gray-500 hover:border-accent border-b py-2 hover:text-accent duration-200">
                <Link href="/for-home-makers">For Home Makers</Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="#"
          className="w-fit p-2 text-white rounded-full ml-2 hidden md:flex"
        >
          <div className="w-fit p-0.5 rounded-md">
            <LinkedinOutlined className="text-white text-2xl mb-1" />
          </div>
        </Link>
        <button className="px-3 py-1 rounded-sm border-[1px] border-white text-white ml-2">
          <Link href={'/contact-us'} className="w-full h-full">
            Contact Me
          </Link>
        </button>
      </div>
    </nav>
  )
}
