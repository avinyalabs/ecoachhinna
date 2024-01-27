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
  ServiceDetails,
  getProfessionalService,
} from '../../../../../sanity/lib/queries'
import { cn } from '@/lib/utils'

const WorkingProfessionals = () => {
  const [skills, setSkills] = useState<ServiceDetails[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProfessionalService()
      console.log(data)
      setSkills(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/office.jpg"
        courseName="I GATE"
        info="I Grow Adopt, Transform & Evolve"
        brief="A 360 degree program to boost the growth of professionals in corporates"
      />
      <div className=" py-8">
        <PageRouter currPage="/for-working-professionals" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What I GATE offers</h5>
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
                  className="mx-auto text-left flex flex-col justify-start space-y-4 border-2 rounded min-h-[40vh] px-2"
                >
                  <h1 className="text-xl py-4 font-semibold text-accent h-24 text-clip px-4">
                    {skill.subcategory}
                  </h1>
                  <div className="border-t-2 ">
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
