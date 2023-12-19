import React from 'react'
import Image from 'next/image'
import {BsWhatsapp} from 'react-icons/bs'
import {FaMobile} from 'react-icons/fa'
import {MdEmail} from 'react-icons/Md'
import {FaAddressBook} from 'react-icons/fa'
import {AiFillFlag} from 'react-icons/ai'
import Link from 'next/link'
const About = () => {
  return (
    <div id="aboutme"><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto"
          alt="hero"
          src= {require("public/assets/myPicture/IMG_20230129_023358840.jpg")}
          width={300}
          height={500}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
         About Me
          </h1>
          <p className="mb-5 leading-relaxed">
            <FaMobile /> Mobile No: +92-307-2206992, +92-310-2111487
            <BsWhatsapp /> Whatsapp: +92-307-2206992, +92-310-2111487
            <MdEmail />Email: sajidhussainzaidi1@gmail.com 
            <FaAddressBook />Address: F-98/2 P.N.A.D Maripur Hub River Road Karachi West Sindh.
            <AiFillFlag /> Country: Pakistan
        </p>
        <p className="mb-5 leading-relaxed">
        Hello there! My name is Syed Sajid Hussain Zaidi, and I'm thrilled to share a bit about myself with you.
        I am a 44-year-old and Student in PIAIC Karachi Campus, currently residing in Karachi. My journey has been a tapestry of diverse experiences and passions that have shaped who I am today.
        Professionally, I am a ERP Operator, where i manage database and financially querries. I am particularly enthusiastic about copmputer field like Programming, Graphic Designing, constantly seeking ways to grow and contribute.
        When I'm not immersed in work or study. I find joy in Programming, Searching new articles related to coding basis. They bring balance to my life and allow me to recharge my creative energies.
        As a person, I am known for common man. Friends and colleagues often describe me as creative person.
        I believe in Allah and second my best teachers who give me best way to achiieve my desired goals, and I am passionate about my dreams. Making a positive impact on IT community, Professionals is something that drives me.
        This "About Me" is just a glimpse into who I am. I am always open to new experiences, connections, and conversations, so feel free to reach out and let's explore this journey called life together!
        Thank you for taking the time to get to know me a little better.<br></br>

        Best,<br></br>
        Syed Sajid Hussain Zaidi.
        </p>
        <div className="flex justify-center">
        <a href  = "./assets/myCv/cv.pdf">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <p className="leading-relaxed text-white hover:bg-blue-700">
              View Cv
              </p>
            
          </button>
              </a>
          
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About