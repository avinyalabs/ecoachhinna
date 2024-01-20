import { PageRouter } from '@/components/navigate-page'
import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'
import {
  MessageFilled,
  ExclamationCircleFilled,
  ClockCircleFilled,
  HeartFilled,
  MehFilled,
} from '@ant-design/icons'

const HomeMakers = () => {
  return (
    <>
      <Header
        image="/home-makers.jpg"
        courseName="I GAIN "
        info="I Grow, Adapt, Innovate & Nurture"
        brief="A Comprehensive Program Designed for Students for enhancing Interpersonal & Communication Skills"
      />
      <div className=" py-8">
        <PageRouter currPage="/for-home-makers" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What I GAIN offers</h5>
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
            {communication_skills_topics.map((skill, i) => (
              <CoursePoint title={skill} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const UserFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
      clipRule="evenodd"
    />
  </svg>
)

export default HomeMakers

const offerings = [
  {
    title: 'Effective Home Communication',
    icon: <MessageFilled className="text-[4rem] w-fit" />,
    info: 'Are you tired of misunderstandings or feeling unheard at home? I can guide you in developing clear and effective communication with your family members, creating a harmonious and loving environment.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Confidence in Social Settings',
    icon: <UserFilled />,
    info: 'If social gatherings make you anxious, don’t worry! I can help boost your confidence in various social situations, whether it’s chatting with neighbors, attending PTA meetings, or engaging with friends.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Conflict Resolution',
    icon: <ExclamationCircleFilled className="text-[4rem] w-fit" />,
    info: 'Every household faces conflicts from time to time. I’ll teach you strategies for resolving disagreements peacefully and constructively, helping to maintain a positive atmosphere within your home.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Time Management',
    icon: <ClockCircleFilled className="text-[4rem] w-fit" />,
    info: 'Balancing household tasks, family responsibilities, and personal time can be challenging. I can assist you in improving your time management skills to create more time for yourself and your loved ones.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Effective Parenting Communication',
    icon: <HeartFilled className="text-[4rem] w-fit" />,
    info: 'As a parent, communication with your children is vital. I can provide you with tools to connect with your kids, understand their needs, and foster a nurturing and supportive relationship.',
    from: '#ed3237',
    to: '#fb666b',
  },
  {
    title: 'Mindful Self-Care',
    icon: <MehFilled className="text-[4rem] w-fit" />,
    info: 'Prioritize your well-being with mindfulness and self-care practices. Learn how to manage stress, cultivate resilience, and create a positive mindset for a healthier and happier life.',
    from: '#6ac99c',
    to: '#9ddbb2',
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
