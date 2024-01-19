import ExpertiseCard from './expertise-card'

export default function Expertise() {
  return (
    <div className="px-2 md:px-16 lg:px-36 text-center py-20 space-y-8 w-full bg-[#fff2d7]">
      <h1 className="text-5xl font-semibold ">What I help you with</h1>
      <p className="text-xl text-gray-500 font-medium">
        As a communications coach, these are some aspects that I can help you
        with.
      </p>
      <div>
        <ExpertiseCard />
      </div>
    </div>
  )
}
