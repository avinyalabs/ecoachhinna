import { CoursePoint, OfferingCard } from '@/components/services/cards'
import Header from '@/components/services/header'

const SchoolKidsPage = () => {
  return (
    <>
      <Header
        courseName="I GATE"
        info="I Grow Adopt, Transform & Evolve"
        brief="A 360 degree program to boost the growth of professionals in corporates"
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
            {iGate_skills_topics.map((skill, i) => (
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
    title: 'Communication Skills Development',
    icon: '/services/for-kids/art-1.svg',
    info: 'I understand that effective communication is essential in the workplace. My coaching services are designed to help you communicate with confidence and clarity, whether you’re giving presentations, leading meetings, or engaging in day-to-day interactions with colleagues and clients.',
    from: '#51c5e6',
    to: '#c4effb',
  },
  {
    title: 'Public Speaking Coaching',
    icon: '/services/for-kids/information.svg',
    info: 'Do you want to conquer your fear of public speaking? My coaching will provide you with the tools and techniques to become a confident and persuasive speaker, whether you’re presenting in front of a small team or a large audience.',
    from: '#9580ff',
    to: '#aea0f3',
  },
  {
    title: 'Interpersonal Communication',
    icon: '/services/for-kids/art-1.svg',
    info: 'Building strong professional relationships is crucial. I will teach you how to navigate complex workplace dynamics, resolve conflicts, and communicate effectively with colleagues and superiors.',
    from: '#e5487d',
    to: '#ef739c',
  },
  {
    title: 'Business Writing',
    icon: '/services/for-kids/art-1.svg',
    info: 'Clear and concise written communication is a must in the business world. I will help you improve your email correspondence, reports, and other written materials, ensuring your messages are professional and impactful.',
    from: '#e99e45',
    to: '#fbb764',
  },
  {
    title: 'Interview and Networking Skills',
    icon: '/services/for-kids/art-1.svg',
    info: 'Whether you’re seeking a new job or trying to expand your professional network, my coaching will equip you with the skills to excel in interviews and confidently network with potential employers or business partners.',
    from: '#ed3237',
    to: '#fb666b',
  },
  //   {
  //     title: 'Communication Coaching for Kids',
  //     icon: '/services/for-kids/art-1.svg',
  //     info: 'If your child is in school, it is a crucial time for developing effective communication skills. I offer personalized coaching sessions that are engaging, fun, and tailored to your child’s unique needs.',
  //     from: '#9580ff',
  //     to: '#aea0f3',
  //   },
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
