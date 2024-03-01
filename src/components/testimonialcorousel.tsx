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
import { Modal } from 'antd'

export type TestimonialsType = {
  author: string
  description: string
  image: string
  designation: string
  video: string
  key: number
}
const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState<TestimonialsType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials()
      console.log(data, 'testimonials')
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
                  <div className="w-fit p-1.5 bg-white shadow-md rounded-full absolute left-[19.5rem] z-10 text-red-500">
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
            video={test.video}
          />
        )
      })}
    </Carousel>
  )
}
export default TestimonialsCarousel

const TestimonialSCard = ({
  key,
  author,
  description,
  designation,
  image,
  video,
}: TestimonialsType) => {
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
  return (
    <div className="w-full md:w-[70vw] lg:w-[60vw] rounded-lg px-6 py-12 bg-accent/80 text-white mx-4 h-80 flex flex-col justify-center text-xl shadow">
      <p className="text-white min-w-0 text-left">
        &ldquo;{description}&rdquo;
      </p>
      <div className="flex flex-col items-start space-y-5">
        <div className="mt-4 flex justify-start items-center space-x-4">
          <Avatar>
            <AvatarImage
              alt="User Testimonial"
              src={`${image}?width=40&height=40`}
              className="w-full object-cover"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="text-left">
            <p className="font-bold mt-2">{author}</p>
            <p className="text-sm text-gray-100">{designation}</p>
          </span>
        </div>
        <div>
          {video && (
            <button
              className="px-8 py-3 text-base font-medium rounded bg-accent text-white  hover:bg-accent/90 duration-200 space-x-2 mx-auto w-fit h-12 border-white border-[1px]"
              onClick={() => showModal(key)}
            >
              Know More
            </button>
          )}
        </div>
      </div>
      <Modal
        open={visibleModal === key}
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
        <iframe
          src={video || ''}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="w-full h-[20rem] md:h-[28rem]"
        ></iframe>
      </Modal>
    </div>
  )
}
