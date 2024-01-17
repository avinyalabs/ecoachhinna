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
              <Image
                src={painPoints.image as string}
                alt={painPoints.text}
                width={150}
                height={150}
              />

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
    image: '/group-meeting.png',
  },
  {
    text: 'Tell Stories & snd share memories',
    image: '/emotion.png',
  },
  {
    text: 'Organise your thoughts in English',
    image: '/mind_man.png',
  },
  {
    text: 'Share Ideas and offer Suggestions',
    image: '/idea.png',
  },
  {
    text: 'Present information clearly',
    image: '/information.png',
  },
  {
    text: 'Have conversation with anyone easily',
    image: '/talking.png',
  },
]
