'use client'
import { PageRouter } from '@/components/navigate-page'
import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'
import {
  CheckSquareFilled,
  CoffeeOutlined,
  CompassFilled,
  GlobalOutlined,
  TeamOutlined,
  VideoCameraFilled,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { getBusinessService } from '../../../../../sanity/lib/queries'

const BusinessOwners = () => {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBusinessService()
      console.log(data)
      setSkills(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/business-owners.jpg"
        courseName="I LEAP"
        info="I Learn , Enhance , Act & Perform"
        brief="A Comprehensive Program Designed for Business Owners and Entrepreneurs to accelerate Self Growth"
      />
      <div className=" py-8">
        <PageRouter currPage="/for-business-owners" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What I LEAP offers</h5>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((off, i) => {
              return (
                <OfferingCard
                  key={i}
                  title={off.title}
                  info={off.info}
                  Icon={off.icon}
                />
              )
            })}
          </div>
          P
        </div>
        <div className="py-16 space-y-12 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold ">
            Topics that I&lsquo;ll Cover
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {skills.map((skill: any, i) => {
              return (
                <div key={i}>
                  <h1 className="text-2xl py-4 font-semibold">
                    {skill.subcategory}
                  </h1>
                  <div>
                    {skill.tags.map((tag: any, index: number) => {
                      return <CoursePoint title={tag.tag} key={index} />
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default BusinessOwners

const offerings = [
  {
    title: 'Cross-Cultural Communication',
    icon: <GlobalOutlined className="text-[4rem] w-fit" />,
    info: 'Navigating the nuances of cross-cultural communication can be challenging. I can provide you with insights and strategies to bridge cultural gaps and build stronger connections with your overseas clients.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Effective Business Presentations',
    icon: <VideoCameraFilled className="text-[4rem] w-fit" />,
    info: 'Deliver compelling and impactful presentations to your international clients by learning how to structure your message, engage your audience, and convey your ideas with confidence.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Professional Email Etiquette',
    icon: <TeamOutlined className="text-[4rem] w-fit" />,
    info: 'Master the art of writing professional and culturally sensitive emails that leave a positive impression on your overseas clients, helping you maintain strong business relationships.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Conference Calls and Virtual Meetings',
    icon: <CompassFilled className="text-[4rem] w-fit" />,
    info: 'Communicate effectively during virtual meetings and conference calls with clients from around the world. I’ll teach you how to navigate different time zones, manage technical challenges, and engage your audience.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Negotiation Skills',
    icon: <CheckSquareFilled className="text-[4rem] w-fit" />,
    info: 'Enhance your negotiation skills to secure successful business deals with international clients, while also ensuring mutual respect and understanding.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Cultural Sensitivity Training',
    icon: <CoffeeOutlined className="text-[4rem] w-fit" />,
    info: 'Develop cultural sensitivity to navigate diverse business environments. Gain insights into different cultural practices and norms, fostering better collaboration and understanding.',
    from: '#6ac99c',
    to: '#9ddbb2',
  },
]

const communication_skills_topics = [
  'Body Language',
  'Non-Verbal language',
  'Powerful Listening Skills',
  'Meeting people for the First Time',
  'Introduction',
  'Small Talk Conversations – Mistakes to avoid',
  'Frames for cross cultural communication',
  'Structure for Building',
  'Communication bridge',
  'Express happiness in English',
  'Sound interesting in English',
  'Pros & Cons',
  'Brainstorming in English',
  'English Contractions',
  'Linking Words',
  'Signposts',
  'Practice speaking Challenges',
  'Diverse Vocabulary /Idioms /Collocations / Phrases',
  'Make suggestions',
  'Make a complain and get Results',
  'Better ways to say I’m Busy',
  'Power words for leadership',
  'Express Empathy in English',
  'Presentations in English and Public Speaking Skills',
  'Leadership Qualities at work',
]
