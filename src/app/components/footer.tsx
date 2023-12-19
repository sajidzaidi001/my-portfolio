import React from 'react'
import Image from 'next/image'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-200'> 
        <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src = {require("../../../public/assets/my logo/360_F_555026179_L08M3AsMS0s3i8uganMQe2r2lbwco0rn-removebg-preview.png")}
       alt="My Portfolio" 
       width={100} 
       height={100}
       className="w.[50]" />

        <span className="ml-2 text-xl">My Portfolio</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 My Profile 
        
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500" />
        <Link target = "blank" href = {"https://www.linkedin.com/in/syed-sajid-hussain-zaidi-23871623b/"}className="ml-2 text-gray-500">
        <BsLinkedin className = "text-3xl hover: text-red-800" />
        </Link>
        <a className="ml-2 text-gray-500" />

        <Link target = "blank" href = {"https://www.facebook.com/sajid.zaidi.73"}className="ml-2 text-gray-500">
        <AiOutlineFacebook className = "text-3xl hover: text-blue-800"  />
        </Link>
        <a className="ml-2 text-gray-500" />

        <Link target = "blank" href = {"https://twitter.com/sajid1960995649"}className="ml-2 text-gray-500">
        <AiFillTwitterSquare className = "text-3xl hover: text-blue-800"  />
        </Link>
        <a className="ml-2 text-gray-500" />
       
         
      
       
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer