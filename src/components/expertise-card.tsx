import Image from 'next/image'

export default function ExpertiseCard() {
  return (
    <div className="grid grid-col-2 md:grid-cols-3 gap-4 md:text-left">
      {content.map((expertise, i) => {
        return (
          <div
            key={i}
            className="flex justify-center items-center md:items-start space-y-4 flex-col line-above p-2 md:p-4 mt-2 border-[#fff2d7]  hover:scale-105 transition border-t hover:border-[#ED3237] mx-2"
          >
            <Image
              src={expertise.image}
              alt={expertise.title}
              width={75}
              height={75}
            />
            <h5 className="font-semibold">{expertise.title}</h5>
            <p className="min-w-0 text-[15px]">{expertise.text}</p>
          </div>
        )
      })}
    </div>
  )
}

const content = [
  {
    title: 'Participate in Discussion',
    image: '/group-meeting.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
  {
    title: 'Tell Stories & and share memories',
    image: '/emotion.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
  {
    title: 'Organise your thoughts in English',
    image: '/mind_man.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
  {
    title: 'Share Ideas and offer Suggestions',
    image: '/idea.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
  {
    title: 'Present information clearly',
    image: '/information.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
  {
    title: 'Have conversation with anyone easily',
    image: '/talking.png',
    text: 'Incididunt ullamco sint Lorem consequat et eiusmod non. Minim et magna veniam laboris non in exercitation magna. Proident consequat proident voluptate fugiat ullamco.',
  },
]
