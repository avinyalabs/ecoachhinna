import ExpertiseCarousel from './expertise-carousel'

export default function Expertise() {
  return (
    <div className="px-2 md:px-20 lg:px-56 relative text-center md:text-left py-8 space-y-8 w-screen overflow-clip">
      <div className="bg-gradient-to-t from-[#ee3237]  to-[#ffcb62] blur-xl w-screen h-full absolute opacity-20 top-10 right-0 -z-10"></div>

      <h1 className="text-5xl font-semibold">What I help you with</h1>
      <p className="text-2xl text-gray-500 font-medium">
        As a communications coach, these are some aspects that I can help you
        with.
      </p>
      <div>
        <ExpertiseCarousel />
      </div>
    </div>
  )
}
