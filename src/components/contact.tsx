'use client'
import { InstagramIcon, Linkedin, MoveRight, Youtube } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getFooterData, getFooterInfo } from '../../sanity/lib/queries'

type FooterType = {
  title: string
  content: string
}

type FooterInfoType = {
  content: string
  email: string
  phone: string
}

export default function Contact() {
  const [footerData, setFooterData] = useState<FooterType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFooterData()
      console.log(data)
      setFooterData(data)
    }
    fetchData()
  }, [])
  return (
    <div className="px-2 md:px-16 lg:px-40 py-5 space-y-5 text-white bg-black">
      <div className="text-center flex justify-center items-center flex-col py-10 mb-5">
        <h3 className="text-3xl md:text-4xl font-semibold min-w-0 md:w-[80%]">
          {footerData[0]?.title}
        </h3>
        <div className="w-full md:w-1/2 text-xl py-8 font-light">
          <p className="">{footerData[0]?.content}</p>
        </div>
        <Link
          href="/booking"
          className="flex justify-center items-center space-x-4 bg-accent text-white hover:bg-zinc-900 rounded-sm text-base px-8 py-3 w-fit duration-200 font-semibold"
        >
          <p>Let&apos;s work Together</p>
          <MoveRight />
        </Link>
      </div>
      <Footer />
      <div className="flex justify-between items-center py-4 font-extralight">
        <p>&#169;2024 Ecoachinna</p>
        <p>Powered by Ecoachinna</p>
      </div>
    </div>
  )
}

const Footer = () => {
  const [footerInfo, setFooterInfo] = useState<FooterInfoType[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFooterInfo()
      console.log(data, 'footer info')
      setFooterInfo(data)
    }
    fetchData()
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 font-light gap-8 text-lg ">
      <div className="text-center md:text-left space-y-8">
        <div className="text-center md:text-left space-y-8">
          <h5 className=" text-2xl font-normal">Quick Links</h5>
          <div className="flex flex-col">
            <Link className="hover:text-accent duration-200" href="/">
              Home
            </Link>
            <Link
              className="hover:text-accent duration-200"
              href="/for-school-kids"
            >
              Services
            </Link>
            <Link className="hover:text-accent duration-200" href="/#about">
              About
            </Link>
            <Link className="hover:text-accent duration-200" href="/contact-us">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 items-center">
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <Linkedin className="" />
          </span>
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <Youtube />
          </span>
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <InstagramIcon />
          </span>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Services</h5>
        <div className="flex flex-col">
          <Link
            className="hover:text-accent duration-200"
            href="/for-speaking-partner"
          >
            Speaking Partnership
          </Link>
          <Link
            className="hover:text-accent duration-200"
            href="/for-working-professionals"
          >
            Working Professionals
          </Link>

          <Link
            className="hover:text-accent duration-200"
            href="/for-business-owners"
          >
            Business Owners
          </Link>
          <Link
            className="hover:text-accent duration-200"
            href="/for-school-kids"
          >
            School Kids
          </Link>
          <Link
            className="hover:text-accent
           duration-200"
            href="/other-services"
          >
            Other Services
          </Link>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Others</h5>
        <div className="flex flex-col">
          <Link
            className="hover:text-accent duration-200"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link className="hover:text-accent duration-200" href="/faq">
            FAQ&apos;s
          </Link>
          <Link className="hover:text-accent duration-200" href="/tnc">
            Terms and Conditions
          </Link>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Contact Info</h5>
        <div className="flex flex-col">
          <Link
            className="hover:text-accent duration-200"
            href={`mailto:${footerInfo[0]?.email}`}
          >
            {footerInfo[0]?.email}
          </Link>
          <Link
            className="hover:text-accent duration-200"
            href={`tel:+${footerInfo[0]?.phone}`}
          >
            {footerInfo[0]?.phone}
          </Link>
        </div>
      </div>
    </div>
  )
}
