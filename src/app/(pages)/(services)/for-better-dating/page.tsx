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
        image="/dating.jpg"
        courseName={header[0]?.heading}
        info={header[0]?.subheading}
        brief={header[0]?.content}
      />
      <div className=" py-8">
        <PageRouter currPage="/for-better-dating" />
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
                    skill.tags.length > 5 && 'md:h-[90vh]'
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
                  <h2 className="text-3xl font-semibold mt-8 mb-4 text-center">
                    Fee : <span className="text-accent">{skill.pricing}</span>
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

// const offerings = [
//   {
//     title: 'Confidence Building ',
//     icon: <HeartFilled className="text-[4rem] w-fit" />,
//     info: 'Dating can be nerve-wracking, but I’ll work with you to boost your self-confidence, so you can approach potential partners with poise and authenticity.',
//     from: '#51c5e6',
//     to: '#c4effb',
//   },
//   {
//     title: 'Effective Communication',
//     icon: <MessageFilled className="text-[4rem] w-fit" />,
//     info: 'Successful dating starts with great communication. I’ll teach you how to express yourself, listen actively, and build connections through meaningful conversations.',
//     from: '#9580ff',
//     to: '#aea0f3',
//   },
//   {
//     title: 'Online Dating Guidance',
//     icon: <ScheduleFilled className="text-[4rem] w-fit" />,
//     info: 'In today’s digital age, online dating is common. I’ll help you navigate dating apps, create an appealing profile, and engage in safe and enjoyable online interactions.',
//     from: '#e5487d',
//     to: '#ef739c',
//   },
//   {
//     title: 'First Date Strategies',
//     icon: <CheckSquareFilled className="text-[4rem] w-fit" />,
//     info: 'Feeling jittery about first dates? I’ll provide you with strategies to plan, execute, and enjoy first dates, making a lasting impression.',
//     from: '#e99e45',
//     to: '#fbb764',
//   },
//   {
//     title: 'Healthy Relationship Dynamics',
//     icon: <SafetyCertificateFilled className="text-[4rem] w-fit" />,
//     info: 'Understanding what makes a healthy relationship is essential. I’ll guide you on recognizing red flags, setting boundaries, and nurturing positive connections.',
//     from: '#ed3237',
//     to: '#fb666b',
//   },
//   {
//     title: 'Communication Coaching for Kids',
//     icon: <TeamOutlined className="text-[4rem] w-fit" />,
//     info: 'If your child is in school, it is a crucial time for developing effective communication skills. I offer personalized coaching sessions that are engaging, fun, and tailored to your child’s unique needs.',
//     from: '#9580ff',
//     to: '#aea0f3',
//   },
// ]
