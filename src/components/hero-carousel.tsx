'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function HeroCarousel() {
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
          <CarouselItem key={index} className="w-full">
            <div className="">
              <p className="min-w-0 text-lg text-white opacity-90 ">
                &ldquo;{painPoints.text}&rdquo;
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

const content = [
  {
    text: 'If I could assure that my point of view would be perfectly understood, they will give value to the things that I say.',
  },
  {
    text: 'If I could start conversations without fear of failure, I would be more confident.',
  },
  {
    text: 'My greatest challenge is that I am always afraid to make mistakes when I want to speak.',
  },
]
