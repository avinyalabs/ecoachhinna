'use client'
import { Carousel } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getEvents } from '../../sanity/lib/queries'
import toast from 'react-hot-toast'

type EventCardType = {
  title: string
  eventDate: string
  duration: string
  image: string
  Audience: string
  isActive: boolean
}

const Events = () => {
  const path = usePathname()
  const [slidesToShow, setSlidesToShow] = useState<number>(3)
  const [eventsData, setEventsData] = useState<EventCardType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents()
      console.log(data, '==>')
      setEventsData(data)
    }
    fetchData()
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 400) {
        setSlidesToShow(1)
      } else if (screenWidth < 756) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }
    window.addEventListener('resize', handleResize)
    if (path === '/') {
      window.addEventListener('resize', handleResize)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="px-2 md:px-16 lg:px-40 py-12 space-y-4 text-center md:text-left">
      <h5 className="text-accent font-semibold text-2xl">Events</h5>
      <div>
        <h5 className="text-5xl md:text-6xl font-bold">Our Events</h5>
        <div className="mt-10">
          <Carousel autoplay slidesToShow={slidesToShow}>
            {eventsData.map((event: EventCardType, index) => (
              <EventCard
                key={index}
                title={event.title}
                eventDate={event.eventDate}
                duration={event.duration}
                image={event.image}
                audience={event.Audience}
                isActive={event.isActive}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const EventCard = ({
  // topic ,date , duration , target audience ,
  //   image,
  title,
  eventDate,
  duration,
  audience,
  image,
  isActive,
}: {
  //   image: string
  title: string
  eventDate: string
  duration: string
  audience: string
  image: string
  isActive: boolean
}) => {
  const registerHandler = () => {
    toast.error('Event has already been occurred')
  }
  return (
    <div className="w-80 md:w-96 mx-auto flex flex-col justify-between font-semibold items-center space-x-4 py-3 hover:text-black my-2 shadow-md">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="rounded-sm w-full px-5 h-48"
        />
      </div>
      <div className="flex flex-col mx-2 mt-5 md:mt-0 space-y-5 text-left w-[90%]">
        <h2 className="text-lg font-semibold mt-5">{title}</h2>
        <div className="flex space-x-4 items-center">
          <p>
            <span className="font-bold">Duration :</span> {duration}
          </p>
          <p>
            <span className="font-bold">Date : </span>
            {eventDate}
          </p>
        </div>
        <p>
          <span className="font-bold">Target Audience :</span> {audience}
        </p>
        {isActive && (
          <Link
            href={'/register-for-event'}
            className="w-fit border-[1px] mt-3 text-base px-2 py-1 border-accent bg-accent text-white hover:bg-accent/90"
          >
            <p className="text-white hover:text-white">Register for event</p>
          </Link>
        )}
        {!isActive && (
          <button
            className="w-fit border-[1px] mt-3 text-base px-2 py-1 border-accent bg-accent text-white hover:bg-accent/90"
            onClick={registerHandler}
          >
            Register for event
          </button>
        )}
      </div>
    </div>
  )
}

export default Events
