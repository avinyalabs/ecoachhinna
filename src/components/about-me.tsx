'use client'
import Image from 'next/image'
import { MoveRight, TrendingUpIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { getAboutMe, getStatsData } from '../../sanity/lib/queries'
import { Statistic } from 'antd'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

type AboutTypes = {
  title: string
  description: string
  content: string
  description2: string
}

type StatsCard = {
  title: string
  value: string
}

export default function AboutMe() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  })

  const [startCounting, setStartCounting] = useState(false)
  const [about, setAbout] = useState<AboutTypes[]>([])
  const [stats, setStats] = useState<StatsCard[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [aboutData, statsData] = await Promise.all([
        getAboutMe(),
        getStatsData(),
      ])
      setAbout(aboutData)
      setStats(statsData)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (inView && !startCounting) {
      setStartCounting(true)
    }
  }, [inView, startCounting])
  const formatter: any = (value: number) => (
    <CountUp end={startCounting ? value : 0} separator="," />
  )
  return (
    <div
      className="px-4 md:px-16 lg:px-40 py-8 md:py-14 space-y-8 bg-accent/10"
      id="about"
    >
      <h5 className="font-bold text-accent text-center md:text-start">
        About me
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 ">
        <div className="w-full pr-4 md:pr-10">
          <h3 className="min-w-0 text-5xl lg:text-5xl font-semibold text-justify mx-4">
            {about[0]?.title}
          </h3>
        </div>
        <div>
          <p className="mx-4 min-w-0 text-base md:text-xl font-extralight md:w-[90%] text-justify">
            {about[0]?.description}
          </p>
          <p className="mx-4 min-w-0 text-base md:text-xl font-extralight md:w-[90%] text-justify">
            {about[0]?.description2}
          </p>
          <div className="py-4 m-4 w-full">
            <Link
              href="#"
              className="flex justify-center items-center space-x-4 w-fit px-8 rounded-md text-white bg-accent  hover:text-white duration-200 py-3 text-base border-accent border-2"
            >
              <p>Know more</p>
              <span>
                <MoveRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-bold">
        {stats.map((stat, index) => {
          return (
            <div
              className="hover:shadow-xl duration-200 rounded-lg p-6 flex justify-center items-center flex-col text-center border-[1px] border-accent/20"
              key={index}
            >
              <TrendingUpIcon size={80} className="text-accent" />
              <p className="text-2xl">{stat.value}</p>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-semibold text-2xl ">
        <div>
          <Image
            src="/about-me.png"
            alt="photo"
            width={300}
            height={400}
            className="w-full h-full md:w-[90%] md:h-[100%]"
          />
        </div>
        <div className="space-y-4 my-auto">
          <div className="min-w-0 p-4 text-4xl mr-5 text-justify">
            <h5>{about[0]?.content}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
