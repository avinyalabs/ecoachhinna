'use client'

import { PageRouter } from '@/components/navigate-page'
import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'
import {
  BulbFilled,
  CustomerServiceFilled,
  EditFilled,
  RedditSquareFilled,
  SmileFilled,
  SoundFilled,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import {
  getKidsHeader,
  getKidsOfferings,
  getKidsService,
} from '../../../../../sanity/lib/queries'
import { HeaderType } from '../for-better-dating/page'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const SchoolKidsPage = () => {
  const [skills, setSkills] = useState([])
  const [header, setHeader] = useState<HeaderType[]>([])
  const [offerings, setOfferings] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const [data, headerData, offeringsData] = await Promise.all([
        getKidsService(),
        getKidsHeader(),
        getKidsOfferings(),
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
        image="/school-kids.jpg"
        courseName={header[0]?.heading}
        info={header[0]?.subheading}
        brief={header[0]?.content}
      />
      <div className=" py-8">
        <PageRouter currPage="/for-school-kids" />
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
            Topics that I&lsquo;ll Cover
          </h5>

          <div
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start',
              skills.length === 1 && 'md:grid-cols-2 ',
              skills.length === 2 && 'md:grid-cols-2 ',
              skills.length === 3 && 'lg:grid-cols-3 ',
              skills.length >= 4 && 'lg:grid-cols-4 '
            )}
          >
            {skills.map((skill: any, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col bg-gray-100 p-3 rounded-md h-fit"
                >
                  <div className="mb-5">
                    <h1 className="text-2xl py-4 font-semibold">
                      {skill.subcategory}
                    </h1>
                    <h2 className="text-xl font-medium">{skill.subheading}</h2>
                  </div>
                  <div>
                    {skill.tags.map((tag: any, index: number) => {
                      return <CoursePoint title={tag.tag} key={index} />
                    })}
                  </div>
                  <h2 className="text-3xl font-semibold my-4">
                    Pricing :{' '}
                    <span className="text-accent">{skill.pricing}</span>
                  </h2>
                  <Link
                    className="px-8 py-3 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 w-fit "
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

export default SchoolKidsPage
