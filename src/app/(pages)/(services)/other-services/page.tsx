'use client'
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
import React, { useEffect, useState } from 'react'
import {
  getHomeMakerService,
  getMakersHeader,
  getMakersOfferings,
  getOtherServices,
} from '../../../../../sanity/lib/queries'
import { HeaderType } from '../for-speaking-partner/page'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button, Modal } from 'antd'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

type OtherServicesProps = {
  heading: string
  content: string
  description: string
  image: string
  bullets: [{ bullet: string }]
}

const HomeMakers = () => {
  const [header, setHeader] = useState<HeaderType[]>([])
  const [otherServices, setOtherServices] = useState<OtherServicesProps[]>([])
  const [visibleModal, setVisibleModal] = useState(null)

  const showModal = (index: any) => {
    setVisibleModal(index)
  }

  const handleOk = () => {
    setVisibleModal(null)
  }

  const handleCancel = () => {
    setVisibleModal(null)
  }
  useEffect(() => {
    const fetchData = async () => {
      const [headerData, servicesData] = await Promise.all([
        getMakersHeader(),
        getOtherServices(),
      ])
      setHeader(headerData)
      setOtherServices(servicesData)
    }
    fetchData()
  }, [])
  return (
    <>
      <Header
        image="/home-makers.jpg"
        courseName={header[0]?.heading}
        info={header[0]?.subheading}
        brief={header[0]?.content}
      />
      <div className=" py-8">
        <PageRouter currPage="/other-services" />
        <div className="space-y-8 py-16 px-2 md:px-20 lg:px-36">
          <h5 className="text-4xl text-center font-bold">
            What {header[0]?.heading} offers
          </h5>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((service, index) => (
              <Card
                className={` w-full h-full  bg-gradient-to-tl from-[#ed3237] to-[#fb666b]  text-white rounded transition `}
                key={index}
              >
                <CardHeader>
                  <Image
                    src={service.image}
                    width={60}
                    height={60}
                    alt={service.heading}
                    className="filter-white"
                  />
                </CardHeader>
                <CardContent>
                  <h5 className="text-2xl font-bold min-w-0">
                    {service.heading}
                  </h5>
                </CardContent>
                <CardFooter>
                  <p className="min-w-0 font-light text-zinc-200 text-lg text-justify">
                    {service.content}
                  </p>
                </CardFooter>
                <div className="mx-5 space-x-5 my-4">
                  <button
                    className="px-8 py-3 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 mx-auto w-fit h-12 border-white border-[1px]"
                    onClick={() => showModal(index)}
                  >
                    Know More
                  </button>
                  <Link
                    className="px-8 py-3 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 w-fit text-center mx-auto h-12 border-white border-[1px]"
                    href={'/contact-us'}
                  >
                    Register
                  </Link>
                </div>
                <Modal
                  open={visibleModal === index}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                    <button
                      key="back"
                      onClick={handleCancel}
                      className="flex space-x-4 w-fit px-8 rounded-md text-white bg-accent  hover:text-white duration-200 py-2 text-base border-accent border-2 mt-5"
                    >
                      Close
                    </button>,
                  ]}
                >
                  <h1 className="text-3xl my-2">{service.heading}</h1>
                  <p className="text-lg mt-5">{service.description}</p>
                  <h2 className="text-lg font-semibold my-4">Key Points</h2>
                  <ul className="list-disc ml-5 text-base mt-3">
                    {service.bullets?.map((bullet, index) => (
                      <li key={index}>{bullet.bullet}</li>
                    ))}
                  </ul>
                </Modal>
              </Card>
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
