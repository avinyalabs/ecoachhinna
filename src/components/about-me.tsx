import Image from 'next/image'
import { ChevronsRight } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-20 lg:px-56 py-8 font-semibold text-2xl bg-orange-200/90">
      <div>
        <Image
          src="/about-me.png"
          alt="photo"
          width={500}
          height={600}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-[#ee3237] text-xl">About me</h3>
        <h5 className="min-w-0">
          Hinna K Mendiratta is an Educator Mentor /Speaker having 10 years of
          experience in the field of structured communication trainings and
          teaching.
        </h5>
        <div className="text-gray-500 min-w-0 p-4 bg-orange-300/90">
          <h5>
            400 hrs International Programs in TEFL TESOL Accreditation from
            TESOL Canada Board Examination (HEM 0330 088)
          </h5>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <div>
            <ChevronsRight size={80} className="text-[#ee3237]" />
            <h6>200+</h6>
            <p className="text-gray-500 text-base">
              Individuals coached so Far
            </p>
          </div>
          <div>
            <ChevronsRight size={80} className="text-[#ee3237]" />
            <h6>10000+</h6>
            <p className="text-gray-500 text-base">Sessions Delivered</p>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <div>
            <ChevronsRight size={80} className="text-[#ee3237]" />
            <h6>1000+</h6>
            <p className="text-gray-500 text-base">Hours of Course Content</p>
          </div>
          <div>
            <ChevronsRight size={80} className="text-[#ee3237]" />
            <h6>98%</h6>
            <p className="text-gray-500 text-base">Customer Retention Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}
