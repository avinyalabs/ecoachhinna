import { LinkedinIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import Link from 'next/link'
import Image from 'next/image'
import { LinkedinOutlined } from '@ant-design/icons'

export const Navbar = () => {
  return (
    <nav className="px-4 md:px-20 lg:px-36 bg-transparent flex justify-between items-center py-4 md:py-2 ">
      <Image src={'/logo.svg'} width={100} height={100} alt="Logo" />
      <div className="flex justify-center items-center !text-[16px]">
        <Button
          variant="ghost"
          className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
        >
          About
        </Button>
        <Button
          variant="ghost"
          className="hidden md:flex hover:text-[#ED3237] !text-[16px]"
        >
          <Select>
            <SelectTrigger className="outline-none px-0 bg-transparent ">
              <SelectValue className="font-normal" placeholder="Services " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light" className="hover:!text-white">
                Light
              </SelectItem>
              <SelectItem value="dark" className="hover:!text-white">
                Dark
              </SelectItem>
              <SelectItem value="system" className="hover:!text-white">
                System
              </SelectItem>
            </SelectContent>
          </Select>
        </Button>
        <Link href={'/contact-us'}>
          <button className="px-3 py-1 rounded-sm bg-[#ED3237] text-white">
            Contact Me
          </button>
        </Link>
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
