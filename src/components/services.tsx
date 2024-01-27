'use client'
import { Carousel } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getServices } from '../../sanity/lib/queries'
import { usePathname } from 'next/navigation'

type ServiceType = {
  title: string
  category: string
  link: string
  image: string
}

export default function Services() {
  const path = usePathname()
  const [services, setServices] = useState<ServiceType[]>([])
  const [slidesToShow, setSlidesToShow] = useState<number>(3)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServices()
      setServices(data)
    }
    fetchData()

    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth < 600) {
        setSlidesToShow(1)
      } else if (screenWidth < 1024) {
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
    <div className="px-2 md:px-16 lg:px-40 py-12 space-y-4 text-center md:text-left bg-accent/10">
      <h5 className="text-accent font-semibold text-2xl">Services</h5>
      <div>
        <h5 className="text-6xl font-bold">Explore How can I Help You</h5>
        <div className="mt-10">
          <Carousel autoplay slidesToShow={slidesToShow}>
            {services.map((service: ServiceType, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                link={service.link}
                title={service.title}
                category={service.category}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({
  image,
  link,
  title,
  category,
}: {
  image: string
  link: string
  title: string
  category: string
}) => {
  return (
    <Link
      href={link}
      className="w-80 md:w-96 mx-auto flex flex-col justify-between items-center text-xl md:text-2xl font-semibold  space-x-4 py-3 text-center hover:text-black my-2 mb-5"
    >
      <Image src={image} width={300} height={300} alt={category} />
      <p className="text-sm mt-5">{category}</p>
      <p className="text-sm md:text-lg">{title}</p>
      <p className="border-[1px] mt-3 text-base px-2 py-1 border-accent bg-accent text-white hover:bg-accent/90">
        Know More
      </p>
    </Link>
  )
}
