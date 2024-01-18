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

export const Navbar = () => {
  return (
    <nav className="px-2 md:px-20 lg:px-56 bg-transparent z-10 flex justify-between items-center py-6">
      <h1 className="text-3xl font-bold">Ecoachhinna</h1>
      <div className="flex justify-center items-center">
        <Button variant="ghost" className="hidden md:flex">
          Home
        </Button>
        <Button variant="ghost" className="hidden md:flex">
          About
        </Button>
        <Button variant="ghost" className="hidden md:flex">
          <Select>
            <SelectTrigger className="outline-none px-0 bg-transparent ">
              <SelectValue className="font-normal" placeholder="Services " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </Button>
        <Button>Contact Me</Button>
        <Link
          href="#"
          className="w-fit p-2 bg-[#ee3237] text-[#ee3237] rounded-full ml-2 hidden md:flex"
        >
          <div className="w-fit p-0.5 bg-white rounded-md">
            <LinkedinIcon size={20} />
          </div>
        </Link>
      </div>
    </nav>
  )
}
