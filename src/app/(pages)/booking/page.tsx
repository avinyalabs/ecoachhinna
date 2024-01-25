import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className="w-full lg:h-screen py-16 relative bg-zinc-700/50 flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-80">
          <Image
            src="/bookings.jpg"
            alt="Bookings"
            width={7730}
            height={5156}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center md:w-[60%]">
          <div className="font-black my-auto space-y-8 order-2 md:order-1 text-center  w-full">
            <h5 className="text-[#ED3237] text-6xl ">Lets Talk</h5>
            <h6 className="text-3xl md:text-4xl lg:text-6xl text-white ">
              Adipisicing veniam quis proident in exercitation ipsum sit.
            </h6>
          </div>
          <div className="flex justify-end items-center order-1 md:order-2"></div>
        </div>
      </div>
      <div className="h-screen w-full ">
        <iframe
          src="https://cal.com/ecoachhinna/meeting"
          className="w-full min-h-full  "
        />
      </div>
    </>
  )
}
