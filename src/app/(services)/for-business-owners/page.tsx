import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'

const SchoolKidsPage = () => {
  return (
    <>
      <Header
        courseName="I LEAP"
        info="I Learn , Enhance , Act & Perform"
        brief="A Comprehensive Program Designed for Business Owners and Entrepreneurs to accelerate Self Growth"
      />
      <div className=" py-8">
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">What ECLIMB offers</h5>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((off, i) => {
              return (
                <OfferingCard
                  key={i}
                  title={off.title}
                  from={off.from}
                  to={off.to}
                  info={off.info}
                  // icon={off.icon}
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
            {communication_skills_topics.map((skill, i) => (
              <CoursePoint title={skill} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolKidsPage

const offerings = [
  {
    title: 'Cross-Cultural Communication',
    icon: '/services/for-kids/art-1.svg',
    info: 'Navigating the nuances of cross-cultural communication can be challenging. I can provide you with insights and strategies to bridge cultural gaps and build stronger connections with your overseas clients.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Effective Business Presentations',
    icon: '/services/for-kids/information.svg',
    info: 'Deliver compelling and impactful presentations to your international clients by learning how to structure your message, engage your audience, and convey your ideas with confidence.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Professional Email Etiquette',
    icon: '/services/for-kids/art-1.svg',
    info: 'Master the art of writing professional and culturally sensitive emails that leave a positive impression on your overseas clients, helping you maintain strong business relationships.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Conference Calls and Virtual Meetings',
    icon: '/services/for-kids/art-1.svg',
    info: 'Communicate effectively during virtual meetings and conference calls with clients from around the world. I’ll teach you how to navigate different time zones, manage technical challenges, and engage your audience.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Negotiation Skills',
    icon: '/services/for-kids/art-1.svg',
    info: 'Enhance your negotiation skills to secure successful business deals with international clients, while also ensuring mutual respect and understanding.',
    from: '#ed3237',
    to: '#fb666b',
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
