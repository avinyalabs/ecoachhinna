'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  getHowItWorksHeader,
  getHowItWorksWithItems,
} from '../../../sanity/lib/queries'

type WorkFlowType = {
  title: string
  description: string
  image: string
}
type WorkFlowItemsType = {
  items: WorkFlowType[]
}

type HowItWorksHeaderType = {
  title: string
  content: string
}

const HowItWorks = () => {
  const [workflow, setWorkFlow] = useState<WorkFlowItemsType[]>([])
  const [header, setHeader] = useState<HowItWorksHeaderType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const [data, headerData] = await Promise.all([
        getHowItWorksWithItems(),
        getHowItWorksHeader(),
      ])
      setWorkFlow(data)
      setHeader(headerData)
      console.log(data, 'how it works')
    }
    fetchData()
  }, [])
  return (
    <div className="px-2 md:px-16 lg:px-36 text-center py-20 space-y-8 w-full">
      <h1 className="text-5xl font-semibold ">{header[0]?.title}</h1>
      <p className="text-xl text-accent font-medium">{header[0]?.content}</p>

      {/* {workflow[0]?.items?.map((item, index) => {
        return (
          <div
            className={`flex justify-around items-center ${index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'}`}
            key={index}
          >
            <div className="flex ml-5">
              <h1 className="text-3xl md:text-4xl text-accent">{index + 1}</h1>
              <div className="text-left w-80 md:w-96 space-y-5 px-4 ">
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-justify">{item.description}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={item.image} alt="Image" width={350} height={350} />
            </div>
          </div>
        )
      })} */}
      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 md:absolute border-opacity-20 border-gray-700 h-full md:border"
            style={{ left: '50%' }}
          ></div>

          <div className="mb-12 flex justify-between items-center w-full right-timeline ">
            <div className="order-1 w-5/12 hidden md:flex">
              <Image
                src={workflow[0]?.items[0]?.image}
                width={400}
                height={300}
                alt="Image"
                className="w-96 h-40 rounded-md ml-10"
              />
            </div>
            <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {workflow[0]?.items[0]?.title}
              </h3>
              <p className="text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
                {workflow[0]?.items[0]?.description}
              </p>
            </div>
          </div>

          <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden md:flex">
              <Image
                src={workflow[0]?.items[1]?.image}
                width={400}
                height={300}
                alt="Image"
                className="w-96 h-40 rounded-md ml-10"
              />
            </div>
            <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full md:w-5/12  px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                {workflow[0]?.items[1]?.title}
              </h3>
              <p className="text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
                {workflow[0]?.items[1]?.description}
              </p>
            </div>
          </div>

          <div className="mb-12 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden md:flex">
              <Image
                src={workflow[0]?.items[2]?.image}
                width={400}
                height={300}
                alt="Image"
                className="w-96 h-40 rounded-md ml-10"
              />
            </div>
            <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {workflow[0]?.items[2]?.title}
              </h3>
              <p className="text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
                {workflow[0]?.items[2]?.description}
              </p>
            </div>
          </div>

          <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden md:flex">
              <Image
                src={workflow[0]?.items[3]?.image}
                width={400}
                height={300}
                alt="Image"
                className="w-96 h-40 rounded-md ml-10"
              />
            </div>
            <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">
                {workflow[0]?.items[3]?.title}
              </h3>
              <p className="text-base font-medium leading-snug tracking-wide text-white text-opacity-100">
                {workflow[0]?.items[3]?.description}
              </p>
            </div>
          </div>

          <div className="mb-12 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden md:flex">
              <Image
                src={workflow[0]?.items[4]?.image}
                width={400}
                height={300}
                alt="Image"
                className="w-96 h-40 rounded-md ml-10"
              />
            </div>
            <div className="z-20 hidden md:flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {workflow[0]?.items[4]?.title}
              </h3>
              <p className="text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
                {workflow[0]?.items[4]?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
