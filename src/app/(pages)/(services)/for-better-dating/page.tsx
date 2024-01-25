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
import { getDatingService } from '../../../../../sanity/lib/queries'

const BetterDating = () => {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDatingService()
      console.log(data)
      setSkills(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/dating.jpg"
        courseName="I GLOW "
        info="I Grow, Learn, Overcome and Win"
        brief="An immersive program for youngsters to aim evolve into more desirable partners and employees"
      />
      <div className=" py-8">
        <PageRouter currPage="/for-better-dating" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What IGLOW offers</h5>
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

export default BetterDating

const offerings = [
  {
    title: 'Confidence Building ',
    icon: <HeartFilled className="text-[4rem] w-fit" />,
    info: 'Dating can be nerve-wracking, but I’ll work with you to boost your self-confidence, so you can approach potential partners with poise and authenticity.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Effective Communication',
    icon: <MessageFilled className="text-[4rem] w-fit" />,
    info: 'Successful dating starts with great communication. I’ll teach you how to express yourself, listen actively, and build connections through meaningful conversations.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Online Dating Guidance',
    icon: <ScheduleFilled className="text-[4rem] w-fit" />,
    info: 'In today’s digital age, online dating is common. I’ll help you navigate dating apps, create an appealing profile, and engage in safe and enjoyable online interactions.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'First Date Strategies',
    icon: <CheckSquareFilled className="text-[4rem] w-fit" />,
    info: 'Feeling jittery about first dates? I’ll provide you with strategies to plan, execute, and enjoy first dates, making a lasting impression.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Healthy Relationship Dynamics',
    icon: <SafetyCertificateFilled className="text-[4rem] w-fit" />,
    info: 'Understanding what makes a healthy relationship is essential. I’ll guide you on recognizing red flags, setting boundaries, and nurturing positive connections.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Communication Coaching for Kids',
    icon: <TeamOutlined className="text-[4rem] w-fit" />,
    info: 'If your child is in school, it is a crucial time for developing effective communication skills. I offer personalized coaching sessions that are engaging, fun, and tailored to your child’s unique needs.',
    from: '#9580ff',
    to: '#aea0f3',
  },
]

const iGlow_skills_topics = [
  'Body Language',
  'Non-Verbal language',
  'Powerful Listening Skills',
  'Meeting people for the First Time',
  'Introduction',
  'Small Talk Conversations',
  'Mistakes to avoid',
  'Frames for cross-cultural communication',
  'Structure for Building',
  'Communication bridge',
  'Express happiness in English',
  'Sound interesting in English',
  'How to discuss Pros & Cons',
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
  'Leadership Qualities',
]
