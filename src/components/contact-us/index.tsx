'use client'

import Toast from '@/utils/common/toast'
import { useEffect, useState } from 'react'
import { Navbar } from '../navbar'
import Image from 'next/image'

const Contact = () => {
  const [values, setValues] = useState<{
    firstname: string
    lastname: string
    email: string
    contact: string
    message: string
  }>({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    contact: '',
  })

  const submitHandler = async (event: any) => {
    event.preventDefault()
    const { firstname, lastname, email, message, contact } = values
    console.log(values)
    try {
      const toast = new Toast('Sending Form data')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          message,
          contact,
        }),
      })
      if (res.ok) {
        setValues({
          firstname: '',
          lastname: '',
          email: '',
          contact: '',
          message: '',
        })
        toast.success('Thanks for contacting!')
      } else {
        toast.error('Error in creating request')
      }
    } catch (err) {
      console.log('Error during contact submit', err)
    }
  }
  const inputStyle =
    'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer !w-60'

  const labelStyle =
    'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
  return (
    <>
      <div className="flex px-4 md:px-30 py-20 justify-around">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center ">
            Fill the form to <span className="text-accent">contact us.</span>
          </h1>
          <form
            action=""
            className="py-4 md:py-10 space-y-10 flex flex-col items-center md:items-start"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mb-5 space-y-10 md:space-y-0">
              <div className="relative z-0">
                <input
                  type="text"
                  id="firstname"
                  className={inputStyle}
                  placeholder=" "
                  onChange={(e) => {
                    setValues({ ...values, firstname: e.target.value })
                  }}
                  required={true}
                />
                <label htmlFor="firstname" className={labelStyle}>
                  First Name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  id="lastname"
                  className={inputStyle}
                  placeholder=" "
                  required={true}
                  onChange={(e) => {
                    setValues({ ...values, lastname: e.target.value })
                  }}
                />
                <label htmlFor="lastname" className={labelStyle}>
                  Last Name
                </label>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mb-5 space-y-10 md:space-y-0">
              <div className="relative z-0">
                <input
                  type="text"
                  id="Email"
                  className={inputStyle}
                  placeholder=" "
                  required={true}
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value })
                  }}
                />
                <label htmlFor="Email" className={labelStyle}>
                  E-mail
                </label>
              </div>
              <div className="relative z-0">
                <input
                  type="text"
                  id="contact"
                  className={inputStyle}
                  placeholder=" "
                  required={true}
                  onChange={(e) => {
                    setValues({ ...values, contact: e.target.value })
                  }}
                />
                <label htmlFor="contact" className={labelStyle}>
                  Phone Number
                </label>
              </div>
            </div>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={5}
              placeholder="Enter your message..."
              className="w-60 md:w-72 border-b border-black placeholder:text-gray-500 placeholder:text-sm py-3 focus:outline-none"
              onChange={(e) => {
                setValues({ ...values, message: e.target.value })
              }}
              required={true}
            ></textarea>
            <div>
              <button
                type="submit"
                className="text-white bg-accent px-2 py-1 rounded-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block">
          <Image
            src="/contactusimage.webp"
            width={400}
            height={500}
            alt="Contact"
            className="min-w-80 h-[30rem] mt-5 mx-2 rounded-sm"
          />
        </div>
      </div>
    </>
  )
}

export default Contact
