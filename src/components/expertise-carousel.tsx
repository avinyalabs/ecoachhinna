'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { User2Icon } from 'lucide-react'

export default function ExpertiseCarousel() {
  return (
    <Carousel
      className="w-full p-2 pl-0"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {content.map((painPoints, index) => (
          <CarouselItem
            key={index}
            className="w-full md:basis-1/2 lg:basis-1/3 "
          >
            <div className="w-full p-4 flex flex-col justify-center items-center space-y-6">
              <User2Icon size={200} />
              <p className="min-w-0 text-2xl font-semibold text-center">
                {painPoints.text}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const content = [
  {
    text: 'Participate in Discussion',
  },
  {
    text: 'Tell Stories & snd share memories',
  },
  {
    text: 'Organise your thoughts in English',
  },
  {
    text: 'Share Ideas and offer Suggestions',
  },
  {
    text: 'Present information clearly',
  },
  {
    text: 'Have conversation with anyone easily',
  },
]
