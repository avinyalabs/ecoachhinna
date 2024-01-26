'use client'

import Toast from '@/utils/common/toast'
import { useEffect, useState } from 'react'
import { Navbar } from '../navbar'

const RegisterEvent = () => {
  const inputStyle =
    'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent focus:outline-none focus:ring-0 focus:border-accent peer !w-60'

  const labelStyle =
    'absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent peer-focus:dark:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
  return (
    <>
      <div className="flex px-4 md:px-40 py-20 ">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center ">
            Fill the form to{' '}
            <span className="text-accent">register for event.</span>
          </h1>
          <form
            action=""
            className="py-4 md:py-10 space-y-10 flex flex-col items-center md:items-start"
          >
            <div className="flex flex-col md:flex-row justify-between md:space-x-10 mb-5 space-y-10 md:space-y-0">
              <div className="relative z-0">
                <input
                  type="text"
                  id="firstname"
                  className={inputStyle}
                  placeholder=" "
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
                />
                <label htmlFor="contact" className={labelStyle}>
                  Phone Number
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-accent px-2 py-1 rounded-sm"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </>
  )
}

export default RegisterEvent
