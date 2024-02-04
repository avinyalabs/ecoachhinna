'use client'
import Image from 'next/image'
import HeroCarousel from './hero-carousel'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'
import { getHeroSectionData } from '../../sanity/lib/queries'
import { TypewriterEffectSmooth } from './ui/typewrittereffect'

type HeroSectionDataType = {
  title: string
  carouselItems: { title: string }[]
  content: string
  buttonText: string
}
const words = [
  { text: 'Do' },
  { text: 'you' },
  { text: 'say' },
  { text: '.' },
  { text: '.' },
  { text: '.' },
]

export default function HeroSection() {
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
    <div className="w-full overflow-x-clip relative h-[80%] md:h-[80%] py-8 flex justify-start items-center bg-accent/10">
      <div className="px-4 md:px-20 py-4 lg:px-36 flex justify-between items-center flex-col md:flex-row w-full md:text-left my-auto">
        <div className="space-y-6 w-full md:w-3/5">
          <TypewriterEffectSmooth
            words={words}
            className="h-full text-center md:text-left w-full"
          />
          <div className="w-[80%]">
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
                      <p className="min-w-0 text-lg text-gray-500 opacity-90 ">
                        &ldquo;{painPoints.title}&rdquo;
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full space-y-2">
            <p className="text-gray-500 font-medium opacity-95">
              {heroData[0]?.content}
            </p>
            <Link
              href="/booking"
              className="flex justify-center items-center text-center text-xl  w-full md:w-[24rem] py-2 border-[1px] text-white bg-[#ED3237] duration-200 rounded-md space-x-4 "
            >
              <p className="text-lg">{heroData[0]?.buttonText}</p>
              <div className="hover:translate-x-2 duration-300">
                <MoveRight />
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={'/banner-homepage.png'}
            width={600}
            height={600}
            alt="Header Image"
            className="w-96 md:w-[32rem]"
          />
        </div>
      </div>
    </div>
  )
}
