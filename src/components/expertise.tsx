'use client'
import { useEffect, useState } from 'react'
import ExpertiseCard from './expertise-card'
import { getExpertiseHeader } from '../../sanity/lib/queries'

type ExpertiseHeaderType = {
  title: string
  content: string
}

export default function Expertise() {
  const [expertiseHeader, setExpertiseHeader] = useState<ExpertiseHeaderType[]>(
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      const data = await getExpertiseHeader()
      setExpertiseHeader(data)
      console.log(data, 'expertise header')
    }
    fetchData()
  }, [])
  return (
    <div className="px-2 md:px-16 lg:px-36 text-center py-20 space-y-8 w-full  ">
      <h1 className="text-5xl font-semibold ">{expertiseHeader[0]?.title}</h1>
      <p className="text-xl font-medium text-accent">
        {expertiseHeader[0]?.content}
      </p>
      <div>
        <ExpertiseCard />
      </div>
    </div>
  )
}
