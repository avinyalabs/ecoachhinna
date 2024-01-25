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
import { getKidsService } from '../../../../../sanity/lib/queries'

const SchoolKidsPage = () => {
  const [skills, setSkills] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getKidsService()
      console.log(data)
      setSkills(data)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/school-kids.jpg"
        courseName="E CLIMB"
        info=" English Communication Learning, Improvement & Methodological Boost"
        brief="A Comprehensive Program Designed for Students for enhancing Interpersonal & Communication Skills"
      />
      <div className=" py-8">
        <PageRouter currPage="/for-school-kids" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What ECLIMB offers</h5>
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
            {/* {communication_skills_topics.map((skill, i) => (
              <CoursePoint title={skill} key={i} />
            ))} */}
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

export default SchoolKidsPage

const offerings = [
  {
    title: 'Confidence Building ',
    icon: <SmileFilled className="text-[4rem] w-fit" />,
    info: 'I understand that some kids may feel a bit shy or hesitant when it comes to speaking up in class or expressing themselves. My friendly and patient approach helps boost their self-esteem and encourages them to share their thoughts and ideas confidently.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Speech Clarity',
    icon: <SoundFilled className="text-[4rem] w-fit" />,
    info: 'Is your child having trouble with pronunciation? I can help! I use interactive games and exercises to improve speech clarity, making it easier for your child to be understood by peers and teachers.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Listening Skills',
    icon: <CustomerServiceFilled className="text-[4rem] w-fit" />,
    info: 'Effective communication goes beyond talking; it also involves listening actively. I teach kids how to be attentive listeners, which is a crucial skill for better understanding in the classroom and building positive relationships with others.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Creative Expression',
    icon: <EditFilled className="text-[4rem] w-fit" />,
    info: 'I believe that communication is not just about words. I encourage creativity through storytelling, drama, and other creative activities that help children express themselves in imaginative ways.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Social Interaction',
    icon: <RedditSquareFilled className="text-[4rem] w-fit" />,
    info: 'Communication is at the heart of building friendships. I teach kids how to engage in conversations, ask questions, and share their thoughts in a friendly and polite manner, making social interactions more enjoyable.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Communication Coaching for Kids',
    icon: <BulbFilled className="text-[4rem] w-fit" />,
    info: 'If your child is in school, it is a crucial time for developing effective communication skills. I offer personalized coaching sessions that are engaging, fun, and tailored to your child’s unique needs.',
    from: '#9580ff',
    to: '#aea0f3',
  },
]

const communication_skills_topics = [
  'Body Language',
  'Non-Verbal Language',
  'Powerful Listening Skills',
  'Meeting People for the First Time',
  'Introduction',
  'Small Talk Conversations',
  'Mistakes to Avoid',
  'Frames for Cross-Cultural Communication',
  'Structure for Building Communication Bridge',
  'Express Happiness in English',
  'Sound Interesting in English',
  'How to Discuss Pros & Cons',
  'Brainstorming in English',
  'English Contractions',
  'Linking Words',
  'Signposts',
  'Practice Speaking Challenges',
  'Diverse Vocabulary / Idioms / Collocations / Phrases',
  'Make Suggestions',
  'Make a Complaint and Get Results',
  "Better Ways to Say I'm Busy",
  'Power Words for Leadership',
  'Express Empathy in English',
  'Presentations in English and Public Speaking Skills',
  'Leadership Qualities',
]
