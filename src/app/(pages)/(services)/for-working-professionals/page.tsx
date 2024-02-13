'use client'
import { PageRouter } from '@/components/navigate-page'
import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'
import {
  BulbFilled,
  CommentOutlined,
  CrownFilled,
  FileTextFilled,
  TeamOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import {
  getProfessionalHeader,
  getProfessionalOfferings,
  getProfessionalService,
} from '../../../../../sanity/lib/queries'
import { HeaderType } from '../for-speaking-partner/page'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const WorkingProfessionals = () => {
  const [skills, setSkills] = useState([])
  const [header, setHeader] = useState<HeaderType[]>([])
  const [offerings, setOfferings] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const [data, headerData, offeringsData] = await Promise.all([
        getProfessionalService(),
        getProfessionalHeader(),
        getProfessionalOfferings(),
      ])
      setSkills(data)
      setHeader(headerData)
      setOfferings(offeringsData)
      console.log(offeringsData)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/office.jpg"
        courseName={header[0]?.heading}
        info={header[0]?.subheading}
        brief={header[0]?.content}
      />
      <div className=" py-8">
        <PageRouter currPage="/for-working-professionals" />
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
                    'flex flex-col bg-gray-100 p-3 rounded-md h-[70vh] !w-[350px] my-5'
                  )}
                >
                  <div className="mb-5 text-center">
                    <h1 className="text-2xl py-4 font-semibold">
                      {skill.subcategory}
                    </h1>
                    <h2 className="text-xl font-medium">{skill.subheading}</h2>
                  </div>
                  <div className="h-[100%] overflow-y-auto no-scrollbar">
                    {skill.tags.map((tag: any, index: number) => {
                      return <CoursePoint title={tag.tag} key={index} />
                    })}
                  </div>
                  <h2 className="text-[1.40rem] font-semibold mt-8 mb-4 text-center">
                    Price : <span className="text-accent">{skill.pricing}</span>
                  </h2>
                  <Link
                    className="  px-8 py-2 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 w-fit text-center mx-auto"
                    href={`${skill.link}`}
                    target="_blank"
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

export default WorkingProfessionals

const offerings = [
  {
    title: 'Communication Skills Development',
    icon: <CommentOutlined className="text-[4rem] w-fit" />,
    info: 'I understand that effective communication is essential in the workplace. My coaching services are designed to help you communicate with confidence and clarity, whether you’re giving presentations, leading meetings, or engaging in day-to-day interactions with colleagues and clients.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Public Speaking Coaching',
    icon: <BulbFilled className="text-[4rem] w-fit" />,
    info: 'Do you want to conquer your fear of public speaking? My coaching will provide you with the tools and techniques to become a confident and persuasive speaker, whether you’re presenting in front of a small team or a large audience.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Interpersonal Communication',
    icon: <TeamOutlined className="text-[4rem] w-fit" />,
    info: 'Building strong professional relationships is crucial. I will teach you how to navigate complex workplace dynamics, resolve conflicts, and communicate effectively with colleagues and superiors.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Business Writing',
    icon: <FileTextFilled className="text-[4rem] w-fit" />,
    info: 'Clear and concise written communication is a must in the business world. I will help you improve your email correspondence, reports, and other written materials, ensuring your messages are professional and impactful.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Interview and Networking Skills',
    icon: <UsergroupAddOutlined className="text-[4rem] w-fit" />,
    info: 'Whether you’re seeking a new job or trying to expand your professional network, my coaching will equip you with the skills to excel in interviews and confidently network with potential employers or business partners.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Leadership Communication',
    icon: <CrownFilled className="text-[4rem] w-fit" />,
    info: 'Effective leadership requires strong communication. I will help you develop leadership communication skills, enabling you to inspire and motivate your team, convey a compelling vision, and lead with authenticity.',
    from: '#6ac99c',
    to: '#9ddbb2',
  },
]

const iGate_skills_topics = [
  'Active Listening Skills',
  'Structuring Communications',
  'Different Introductions at work',
  'Dealing with difficult conversations',
  'Augment the positive influence you have on both people inside and outside the organization',
  'Ask vs Tell styles',
  'Effective & Diverse Communication',
  'Develop Effective Probing skills',
  'Time Management',
  'Stress Management',
  'Emotional Intelligence',
  'Self Reflection',
  'Non-verbal Communication',
  'The Art of Assertiveness',
  'Role Play Simulations',
  'Giving & Receiving Feedbacks',
  'Strategies for deeper discussions',
  'Leadership qualities at work',
  'How to interrupt politely',
  'Structuring e-mail’s',
  'English communication skills at work',
  'Presentation and public speaking skills',
]
