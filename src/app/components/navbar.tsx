import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineCloudDownload  } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src = {require("../../../public/assets/my logo/360_F_555026179_L08M3AsMS0s3i8uganMQe2r2lbwco0rn-removebg-preview.png")}
       alt="My Portfolio" 
       width={100} 
       height={100}
       className="w.[50]" />

      <span className="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href ={"/"} className="mr-5 hover:text-blue-800">Home</Link>
      <Link href ={"#aboutme"} className="mr-5 hover:text-blue-800">About Me</Link>
      <Link href ={"#project"} className="mr-5 hover:text-blue-800">Projects</Link>
      <Link href ={"#skills"} className="mr-5 hover:text-blue-800">Skills</Link>
      <Link href ={"#Contact"} className="mr-5 hover:text-blue-800">Contact Me</Link>
    </nav>
    <a href  = "./assets/myCv/cv.pdf">
    <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0 text-white">Download CV
      <AiOutlineCloudDownload className = "text-2xl  ml-2" />
    </button>
     </a >
  </div>
</header>

    </div>
  )
}

export default Navbar;