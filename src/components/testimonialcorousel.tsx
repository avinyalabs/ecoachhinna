import React, { useEffect, useState } from 'react'
import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
  slidesToShowPlugin,
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { AvatarFallback, Avatar, AvatarImage } from './ui/avatar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getTestimonials } from '../../sanity/lib/queries'

export type TestimonialsType = {
  author: string
  description: string
  image: string
  designation: string
}
const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials()
      console.log(data)
      setTestimonials(data)
    }
    fetchData()
  }, [])
  return (
    <Carousel
      className="relative py-16"
      plugins={[
        'infinite',
        'centered',
        'fastSwipe',
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute left-[23.5rem] top-1/2 z-10">
                <ChevronLeft size={32} className="font-thin" />
              </div>
            ),
            arrowRight: (
              <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute right-[23.5rem] top-1/2 z-10">
                <ChevronRight size={32} className="font-thin" />
              </div>
            ),

            addArrowClickHandler: true,
          },
        },

        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          },
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
            'infinite',
            'centered',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute  z-10">
                    <ChevronLeft size={32} className="font-thin" />
                  </div>
                ),
                arrowRight: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute right-0 z-10">
                    <ChevronRight size={32} className="font-thin" />
                  </div>
                ),

                addArrowClickHandler: true,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ],
        },
        1000: {
          plugins: [
            'infinite',
            'centered',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute left-[12.5rem] z-10">
                    <ChevronLeft size={32} className="font-thin" />
                  </div>
                ),
                arrowRight: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute right-[12.5rem] z-10">
                    <ChevronRight size={32} className="font-thin" />
                  </div>
                ),

                addArrowClickHandler: true,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ],
        },
        1380: {
          plugins: [
            'infinite',
            'centered',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute left-[19.5rem] z-10">
                    <ChevronLeft size={32} className="font-thin" />
                  </div>
                ),
                arrowRight: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute right-[19.5rem] z-10">
                    <ChevronRight size={32} className="font-thin" />
                  </div>
                ),

                addArrowClickHandler: true,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ],
        },
        1024: {
          plugins: [
            'infinite',
            'centered',
            'fastSwipe',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute left-[16rem] z-10">
                    <ChevronLeft size={32} className="font-thin" />
                  </div>
                ),
                arrowRight: (
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute right-[16rem] z-10">
                    <ChevronRight size={32} className="font-thin" />
                  </div>
                ),

                addArrowClickHandler: true,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              },
            },
          ],
        },
      }}
      draggable
    >
      {testimonials.map((test: TestimonialsType, i) => {
        return (
          <TestimonialSCard
            key={i}
            author={test.author}
            image={test.image}
            description={test.description}
            designation={test.designation}
          />
        )
      })}
    </Carousel>
  )
}
export default TestimonialsCarousel

const TestimonialSCard = ({
  author,
  description,
  designation,
  image,
}: TestimonialsType) => {
  return (
    <div className="w-full md:w-[75vw] lg:w-[60vw] rounded-lg px-6 py-12 bg-[#fdeaeb] mx-4 h-96 flex flex-col justify-center text-xl">
      <p className="text-gray-600 min-w-0">&ldquo;{description}&rdquo;</p>
      <div className="mt-4 flex justify-start items-center space-x-4">
        <Avatar>
          <AvatarImage
            alt="User Testimonial"
            src={`${image}?width=40&height=40`}
            className="w-full object-cover"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span>
          <p className="font-bold mt-2">{author}</p>
          <p className="text-sm text-gray-500">{designation}</p>
        </span>
      </div>
    </div>
  )
}
