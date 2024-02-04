import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Circle } from 'lucide-react'
import Image from 'next/image'

export const CoursePoint = ({ title }: { title: string }) => {
  return (
    <div className="rounded flex justify-start items-center   px-6 transition ease-in delay-100 duration-300 hover:font-semibold  py-2 space-x-4 font-medium">
      <div className="min-w-fit">
        <Circle
          size={12}
          className="text-accent rounded-full border-2 hidden md:inline"
          strokeWidth={8}
        />
      </div>
      <h5 className="text-lg text-center md:text-left w-full min-w-0">
        {title}
      </h5>
    </div>
  )
}

export const OfferingCard = ({
  title,
  Icon,
  info,
}: {
  title: string
  Icon: string
  info: string
}) => {
  return (
    <Card
      className={` w-full h-full  bg-gradient-to-tl from-[#ed3237] to-[#fb666b]  text-white rounded transition `}
    >
      <CardHeader>
        <Image
          src={Icon}
          width={60}
          height={60}
          alt={title}
          className="text-white"
        />
      </CardHeader>
      <CardContent className="">
        <h5 className="text-2xl font-bold min-w-0">{title}</h5>
      </CardContent>
      <CardFooter>
        <p className="min-w-0 font-light text-zinc-200 text-lg text-justify">
          {info}
        </p>
      </CardFooter>
    </Card>
  )
}
