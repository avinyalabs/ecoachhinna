'use client'
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
import { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'
import { getNavbarLinks } from '../../sanity/lib/queries'

export const Navbar = () => {
  const [navbarLinks, setNavbarLinks] = useState<
    {
      signup: string
      booking: string
    }[]
  >([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getNavbarLinks()
      if (data) {
        setNavbarLinks(data)
      }
    }
    fetchData()
  }, [])
  const items: MenuProps['items'] = [
    {
      label: (
        <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200 text-base">
          <Link href="/for-school-kids">School Kids</Link>
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200 text-base">
          <Link href="/for-business-owners">Business Owners</Link>
        </div>
      ),
      key: '1',
    },
    // {
    //   label: (
    //     <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200 text-base">
    //       <Link href="for-speaking-partner">Speaking Partnership</Link>
    //     </div>
    //   ),
    //   key: '3',
    // },

    {
      label: (
        <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200 text-base">
          <Link href="/for-working-professionals">Working Professionals</Link>
        </div>
      ),
      key: '2',
    },
    {
      label: (
        <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200 text-base">
          <Link href="/other-services">Other Services</Link>
        </div>
      ),
      key: '3',
    },
  ]
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
      <nav className="px-4 md:px-20 lg:px-36 bg-transparent flex justify-between items-center py-4 md:py-2 ">
        <Link href={'/'}>
          <Image src={'/logo.svg'} width={120} height={120} alt="Logo" />
        </Link>
        <div className="hidden md:flex justify-center items-center !text-[16px] space-x-4">
          <Link href={'/'}>
            <Button variant="ghost" className=" hover:text-accent !text-[16px]">
              Home
            </Button>
          </Link>
          <Button variant="ghost" className="hover:text-accent !text-[16px]">
            <Link href={'/#about'}>About</Link>
          </Button>
          <Button variant="ghost" className="hover:text-accent !text-[16px]">
            <Link href={navbarLinks[0]?.booking || '/booking'} target="_blank">
              Booking
            </Link>
          </Button>

          <div className="flex justify-center items-center !text-[16px] hover:text-accent hover:underline duration-200 cursor-pointer">
            <HoverCard>
              <HoverCardTrigger className="outline-none flex justify-center items-center space-x-1">
                <p>Services for</p>
                <ChevronDown size={16} />
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                  <Link href="/for-school-kids">School Kids</Link>
                </div>

                <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                  <Link href="/for-business-owners">Business Owners</Link>
                </div>

                {/* <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                  <Link href="for-speaking-partner">Speaking Partnership</Link>
                </div> */}

                <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                  <Link href="/for-working-professionals">
                    Working Professionals
                  </Link>
                </div>

                <div className="border-zinc-700 hover:border-accent border-b py-2 hover:text-accent duration-200">
                  <Link href="/other-services">Other Services</Link>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <button className="px-3 py-1 rounded-sm bg-accent text-white">
            <Link
              href={navbarLinks[0]?.signup || '/contact-us'}
              className="w-full h-full"
              target="_blank"
            >
              Sign Up
            </Link>
          </button>
          <button className="px-3 py-1 rounded-sm bg-accent text-white">
            <Link href={'/contact-us'} className="w-full h-full">
              Contact Me
            </Link>
          </button>
          <Link
            href="https://www.linkedin.com/in/hinna-k-mendiratta-4b60796b/"
            className="w-fit p-2 text-accent rounded-full ml-2"
            target="_blank"
          >
            <div className="w-fit p-0.5 bg-white rounded-md">
              <LinkedinOutlined className="text-accent text-3xl mb-1" />
            </div>
          </Link>
        </div>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className={`cursor-pointer HAMBURGER-ICON space-y-2 ${isNavOpen ? 'cross' : ''}`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span
              className={`transition-all duration-200 block h-0.5 w-8  bg-gray-600 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            ></span>
            <span
              className={` transition-all duration-200 block h-0.5 w-8  bg-gray-600 ${isNavOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={` transition-all duration-200 block h-0.5 w-8 bg-gray-600 ${isNavOpen ? '-rotate-45 -translate-y-3.5 ' : ''}`}
            ></span>
          </div>
        </section>
      </nav>
      {isNavOpen && (
        <div className="bg-white h-72 w-full flex md:hidden flex-col justify-center ">
          <Button variant="ghost" className=" hover:text-accent !text-[20px]">
            <Link href={'/'}>Home</Link>
          </Button>
          <Button variant="ghost" className="hover:text-accent !text-[20px]">
            <Link href={'/#about'}>About</Link>
          </Button>
          <Button variant="ghost" className="hover:text-accent !text-[20px]">
            <Link href={navbarLinks[0]?.booking || '/booking'} target="_blank">
              Booking
            </Link>
          </Button>
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            className="w-[80%] mx-auto cursor-pointer"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="outline-none flex justify-center items-center space-x-1 my-2 text-xl"
            >
              <Space>Services for</Space>
            </a>
          </Dropdown>
          <button className=" text-white mt-2">
            <Link
              href={navbarLinks[0]?.signup || '/contact-us'}
              className="bg-accent px-3 py-1 w-full h-full  rounded-sm text-xl"
              target="_blank"
            >
              Sign Up
            </Link>
          </button>
          <button className=" text-white mt-4">
            <Link
              href={'/contact-us'}
              className="bg-accent px-3 py-1 w-full h-full  rounded-sm text-xl"
            >
              Contact Me
            </Link>
          </button>
        </div>
      )}
    </>
  )
}
