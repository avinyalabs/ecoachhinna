'use client'
import { PageRouter } from '@/components/navigate-page'
import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'
import {
  CheckSquareFilled,
  HeartFilled,
  MessageFilled,
  SafetyCertificateFilled,
  ScheduleFilled,
  TeamOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import {
  getDatingHeader,
  getDatingOfferings,
  getDatingService,
} from '../../../../../sanity/lib/queries'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { cache } from 'react'

export type HeaderType = {
  heading: string
  subheading: string
  content: string
  topicHeading: string
}

const BetterDating = () => {
  const [skills, setSkills] = useState([])
  const [header, setHeader] = useState<HeaderType[]>([])
  const [offerings, setOfferings] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const [data, headerData, offeringsData] = await Promise.all([
        getDatingService(),
        getDatingHeader(),
        getDatingOfferings(),
      ])
      setSkills(data)
      setHeader(headerData)
      setOfferings(offeringsData)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/partnership.webp"
        courseName={header[0]?.heading}
        info={header[0]?.subheading}
        brief={header[0]?.content}
      />
      <div className=" py-8">
        <PageRouter currPage="/for-speaking-partner" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">
            What {header[0]?.heading} offers
          </h5>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((off: any, i) => {
              return (
                <OfferingCard
                  key={i}
                  title={off.heading}
                  info={off.content}
                  Icon={off.image}
                />
              )
            })}
          </div>
        </div>
        <div className="py-16 space-y-12 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold ">
            {header[0]?.topicHeading}
          </h5>

          <div
            className={cn(
              'flex flex-wrap content-center justify-center lg:justify-around items-center md:items-start py-8'
            )}
          >
            {skills.map((skill: any, i) => {
              return (
                <div
                  key={i}
                  className={cn(
                    'flex flex-col bg-gray-100 p-3 rounded-md h-fit !w-[350px] my-5',
                    skill.tags.length <= 5 && 'h-[60vh] md:h-[55vh]',
                    skill.tags.length > 5 && 'md:h-[85vh]',
                    skill.tags.length > 10 && 'md:h-[95vh]'
                  )}
                >
                  <div className="mb-5 text-center">
                    <h1 className="text-2xl py-4 font-semibold">
                      {skill.subcategory}
                    </h1>
                    <h2 className="text-xl font-medium">{skill.subheading}</h2>
                  </div>
                  <div className="h-full ">
                    {skill.tags.map((tag: any, index: number) => {
                      return <CoursePoint title={tag.tag} key={index} />
                    })}
                  </div>
                  <h2 className="text-[1.40rem] font-semibold mt-8 mb-4 text-center">
                    Price : <span className="text-accent">{skill.pricing}</span>
                  </h2>
                  <Link
                    className="  px-8 py-2 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 w-fit text-center mx-auto"
                    href={'/contact-us'}
                  >
                    <p>Register</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BetterDating
