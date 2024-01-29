'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import HeroCarousel from './hero-carousel'
import { useEffect, useState } from 'react'
import { getHeroSectionData } from '../../sanity/lib/queries'

type HeroSectionDataType = {
  title: string
  carouselItems: { title: string }[]
  content: string
}

export default function HeroSection2() {
  const [heroData, setHeroData] = useState<HeroSectionDataType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeroSectionData()
      console.log(data, 'hero data')
      setHeroData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="w-full h-[75vh] py-16 relative flex justify-center items-center bg-black/40">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src={'/hero-bg.jpg'}
          alt={'Hero'}
          width={3840}
          height={2160}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6 w-full md:w-1/2 text-white mx-5 md:mx-0 py-5 mt-10 md:mt-0">
        <h1 className="text-3xl lg:text-5xl w-full md:w-3/4 font-bold">
          {heroData[0]?.title}
        </h1>
        <div className="w-[90%] md:w-[75%]">
          <Carousel
            className="w-full p-2 pl-0"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {heroData[0]?.carouselItems.map((painPoints, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="">
                    <p className="min-w-0 text-lg text-white opacity-90 ">
                      &ldquo;{painPoints.title}&rdquo;
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="w-full space-y-2">
          <p className=" font-medium opacity-95">{heroData[0]?.content}</p>
          <Link
            href="/booking"
            className="flex justify-center items-center text-center text-xl w-full md:w-[24rem] py-2 border-[1px] border-accent bg-accent hover:bg-accent/0 hover:border-white duration-200 rounded-md space-x-4 px-2"
          >
            <p className="text-lg">Book a Demo Session</p>
            <div className="hover:translate-x-2 duration-300">
              <MoveRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
