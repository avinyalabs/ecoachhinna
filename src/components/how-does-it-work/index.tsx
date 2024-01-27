'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getHowItWorksWithItems } from '../../../sanity/lib/queries'

type WorkFlowType = {
  title: string
  description: string
  image: string
}
type WorkFlowItemsType = {
  items: WorkFlowType[]
}
const HowItWorks = () => {
  const [workflow, setWorkFlow] = useState<WorkFlowItemsType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHowItWorksWithItems()
      console.log(data, 'work items')
      setWorkFlow(data)
    }
    fetchData()
  }, [])
  return (
    <div className="px-2 md:px-16 lg:px-36 text-center py-20 space-y-8 w-full">
      <h1 className="text-5xl font-semibold ">How does it works</h1>
      <p className="text-xl text-accent">Fun, secure and awesome learning</p>

      {workflow[0]?.items?.map((item, index) => {
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
      })}
    </div>
  )
}

export default HowItWorks
