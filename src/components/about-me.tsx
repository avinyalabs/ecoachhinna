import Image from 'next/image'
import { MoveRight, ChevronsRight } from 'lucide-react'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <div className="px-2 md:px-20 lg:px-56 py-8 space-y-8">
      <h5 className="font-bold text-accent">About me</h5>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full pr-4">
          <h3 className="text-6xl font-semibold">
            I’m Lisa Martin. I Help Entrepreneurs Build Their Dreams.
          </h3>
        </div>
        <div>
          <p className="min-w-0 text-2xl font-extralight ">
            Hinna K Mendiratta is an Educator Mentor /Speaker having 10 years of
            experience in the field of structured communication trainings and
            teaching.
          </p>
          <div className="py-4 my-4 w-full">
            <Link
              href="#"
              className="flex justify-center items-center space-x-4 w-fit px-8 rounded-md text-accent hover:bg-accent  hover:text-white duration-200 py-3 text-base border-accent  border-2"
            >
              <p>Read more</p>
              <span>
                <MoveRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-semibold text-2xl ">
        <div>
          <Image
            src="/about-me.png"
            alt="photo"
            width={500}
            height={600}
            className="w-full h-full"
          />
        </div>
        <div className="space-y-4 my-auto">
          <div className="text-gray-500 min-w-0 p-4 ">
            <h5>
              400 hrs International Programs in TEFL TESOL Accreditation from
              TESOL Canada Board Examination (HEM 0330 088)
            </h5>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div>
              <ChevronsRight size={80} className="text-accent" />
              <h6>200+</h6>
              <p className="text-gray-500 text-base">
                Individuals coached so Far
              </p>
            </div>
            <div>
              <ChevronsRight size={80} className="text-accent" />
              <h6>10000+</h6>
              <p className="text-gray-500 text-base">Sessions Delivered</p>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div>
              <ChevronsRight size={80} className="text-accent" />
              <h6>1000+</h6>
              <p className="text-gray-500 text-base">Hours of Course Content</p>
            </div>
            <div>
              <ChevronsRight size={80} className="text-accent" />
              <h6>98%</h6>
              <p className="text-gray-500 text-base">Customer Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
