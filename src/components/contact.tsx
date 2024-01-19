import {
  FacebookIcon,
  InstagramIcon,
  MoveRight,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className="px-2 md:px-16 lg:px-56 py-8 space-y-8">
      <div className="text-center flex justify-center items-center flex-col">
        <h3 className="text-6xl font-semibold min-w-0">
          If You Have Any Question,
        </h3>
        <h3 className="text-6xl font-semibold min-w-0">
          Feel Free to Call 123-456-7890
        </h3>
        <div className="w-full md:w-1/2 text-xl py-8 font-light">
          <p className="">
            Ac cum nunc vitae ut turpis praesent nunc odio lorem dictumst
            vestibulum sem pharetra urna pretium.
          </p>
        </div>
        <Link
          href="#"
          className="flex justify-center items-center space-x-4 bg-accent text-white hover:bg-zinc-900 rounded-md text-base px-8 py-3 w-fit duration-200 "
        >
          <p>LET&apos;S WORK TOGETHER</p>
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 font-light gap-8 text-lg">
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Hina</h5>
        <p className="min-w-0">
          Amet suscipit urna turpis in malesuada et sapien semper porttitor
          netus turpis molestie sit molestie quis vitae.
        </p>
        <div className="flex justify-start space-x-4  items-center">
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <FacebookIcon className="" />
          </span>
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <TwitterIcon />
          </span>
          <span className=" flex justify-center items-center p-1.5 text-accent">
            <InstagramIcon />
          </span>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Services</h5>
        <div className="flex flex-col">
          <Link className="hover:text-accent duration-200" href="#">
            For Better Dating
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            For Working Professionals
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            For Home Makers
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            For Business Owners
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            For Schoold Kids
          </Link>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Quick Links</h5>
        <div className="flex flex-col">
          <Link className="hover:text-accent duration-200" href="#">
            Home
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            Services
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            About
          </Link>
          <Link className="hover:text-accent duration-200" href="#">
            Contact
          </Link>
        </div>
      </div>
      <div className="text-center md:text-left space-y-8">
        <h5 className=" text-2xl font-normal">Contact Info</h5>
        <div className="flex flex-col">
          <Link
            className="hover:text-accent duration-200"
            href="mailto:seek@ecoachhinna.com"
          >
            seek@ecoachhinna.com
          </Link>
          <Link
            className="hover:text-accent duration-200"
            href="tel:+919811525733"
          >
            +91 98115 25733
          </Link>
        </div>
      </div>
    </div>
  )
}
