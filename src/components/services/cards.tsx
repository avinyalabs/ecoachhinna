import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Circle } from 'lucide-react'

export const CoursePoint = ({ title }: { title: string }) => {
  return (
    <div className="rounded flex justify-start items-center  hover:shadow-lg px-6 transition hover:scale-105 py-2 space-x-4 font-normal">
      <div className="min-w-fit">
        <Circle size={24} className="text-accent" />
      </div>
      <h5 className="text-xl  min-w-0">{title}</h5>
    </div>
  )
}

export const OfferingCard = ({
  title,
  from,
  to,
  info,
}: {
  title: string
  from: string
  to: string
  info: string
}) => {
  return (
    <Card
      className={` w-full h-full  bg-gradient-to-tl from-[#ed3237] to-[#fb666b]  text-white rounded transition `}
    >
      <CardHeader>
        <UserFilled />
      </CardHeader>
      <CardContent className="">
        <h5 className="text-2xl font-bold min-w-0">{title}</h5>
      </CardContent>
      <CardFooter>
        <p className="min-w-0 font-light text-zinc-200 text-lg">{info}</p>
      </CardFooter>
    </Card>
  )
}

const UserFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16"
  >
    <path
      fill-rule="evenodd"
      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
      clip-rule="evenodd"
    />
  </svg>
)
