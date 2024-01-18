import ExpertiseCard from './expertise-card'

export default function Expertise() {
  return (
    <div className="px-2 md:px-20 lg:px-56 relative text-center  py-8 space-y-8 w-full bg-white ">
      <h1 className="text-5xl font-semibold ">What I help you with</h1>
      <p className="text-2xl text-gray-500 font-medium">
        As a communications coach, these are some aspects that I can help you
        with.
      </p>
      <div>
        <ExpertiseCard />
      </div>
    </div>
  )
}
