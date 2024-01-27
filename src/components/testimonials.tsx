import TestimonialsCarousel from './testimonialcorousel'

export default function Testimonials() {
  return (
    <div className="px-0 py-20 space-y-4 text-center ">
      <h5 className="text-6xl font-bold">What Clients Are Saying</h5>
      <div className=" mt-8">
        <TestimonialsCarousel />
      </div>
    </div>
  )
}

const testimonialsArray = [
  {
    name: 'Manish Verma',
    text: 'I strongly recommend her service as a communication coach - not only for our staff but also to refer her within the network we are connected to.',
    profession: 'digiDZN',
    image: '/manish_varma.png',
  },
  {
    name: 'Shalini',
    text: "You taught me how failure can be my best milestone to success.Earlier I was afraid to speak, whereas now, I'm unstoppable. I love my new self.",
    profession: 'Home maker',
    image: '/user.png',
  },
  {
    name: 'Vidushi',
    text: 'I consider myself fortunate to be able to learn from you and your experience. Your trainings have helped me to make it beyond myabilities. I am thankful for your gift of time!',
    profession: 'Post graduate studen in Jaipur',
    image: '/vidushi.png',
  },
  {
    name: 'Shilky Khanna',
    text: 'Every kid needs a coach like you in their life. Thank you, Hinna',
    profession: '',
    image: '/user.png',
  },
  {
    name: 'Kriti Chabra',
    text: 'You pushed me beyond my limits and I had no choice but to step out of my comfort zone.',
    profession: 'Makeup Artist',
    image: '/kriti_chabra.png',
  },
  {
    name: 'Rita Chabra',
    text: 'I am so lucky to have you as a coach who inspires me every day to be better than the day before.',
    profession: '',
    image: '/user.png',
  },
]
