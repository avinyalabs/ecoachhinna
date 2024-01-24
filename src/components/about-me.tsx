'use client'
import Image from 'next/image'
import { MoveRight, TrendingUpIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { getAboutMe } from '../../sanity/lib/queries'
import { Statistic } from 'antd'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Formatter } from 'antd/lib/statistic/util'

type AboutTypes = {
  title: string
  description: string
  content: string
}

export default function AboutMe() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  })

  const [startCounting, setStartCounting] = useState(false)
  const valueRef = useRef(0)
  const [about, setAbout] = useState<AboutTypes[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAboutMe()
      setAbout(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (inView && !startCounting) {
      setStartCounting(true)
    }
  }, [inView, startCounting])
  const formatter: Formatter = (value: number) => (
    <CountUp end={startCounting ? value : 0} separator="," />
  )
  return (
    <div
      className="px-4 md:px-16 lg:px-40 py-8 md:py-20 space-y-8 bg-accent/10"
      id="about"
    >
      <h5 className="font-bold text-accent">About me</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 ">
        <div className="w-full pr-4 md:pr-10">
          <h3 className="min-w-0 text-4xl lg:text-5xl font-semibold ">
            {about[0]?.title}
          </h3>
        </div>
        <div>
          <p className="min-w-0 text-base md:text-xl font-extralight ">
            {about[0]?.description}
          </p>
          <div className="py-4 my-4 w-full">
            <Link
              href="#"
              className="flex justify-center items-center space-x-4 w-fit px-8 rounded-md text-white bg-accent  hover:text-white duration-200 py-3 text-base border-accent border-2"
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
          <div className="text-zinc-700 min-w-0 p-4 ">
            <h5>{about[0]?.content}</h5>
          </div>
          <div className="grid grid-cols-2 gap-8" ref={inViewRef}>
            <div className="hover:shadow-xl duration-200 rounded-lg p-6 flex justify-center items-center flex-col text-center">
              <TrendingUpIcon size={80} className="text-accent" />
              <Statistic
                title="Individuals coached so Far"
                value={200}
                formatter={formatter}
              />
            </div>
            <div className="hover:shadow-xl duration-200 rounded-lg p-6 flex justify-center items-center flex-col text-center">
              <TrendingUpIcon size={80} className="text-accent" />
              <Statistic
                title="Active Users"
                value={10000}
                formatter={formatter}
              />
            </div>
            <div className="hover:shadow-xl duration-200 rounded-lg p-6 flex justify-center items-center flex-col text-center">
              <TrendingUpIcon size={80} className="text-accent" />
              <Statistic
                title="Hours of Course Content"
                value={1000}
                formatter={formatter}
              />
            </div>
            <div className="hover:shadow-xl duration-200 rounded-lg p-6 flex justify-center items-center flex-col text-center">
              <TrendingUpIcon size={80} className="text-accent" />
              {/* <h6>98%</h6>
              <p className="text-gray-500 text-base">Customer Retention Rate</p> */}
              <Statistic
                title="Customer Retention Rate"
                value={98}
                formatter={formatter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
