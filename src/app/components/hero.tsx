"use client"
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    <div><section className="text-gray-500 body-font bg-gray-100">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
           S.Sajid Hussain Zaidi... 
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ['Web Developer', 'Amazon Virtual Assistant','Python Programmer',"TypeScript Developer","NextJs Developer"],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <div className='w-[200px] h-[3px] bg-blue-600'></div>
        <p className="mb-8 leading-relaxed">
          
         I am a dedicated web developer with a passion for crafting digital experiences that seamlessly blend creativity and functionality. Proficient in a variety of programming languages such as HTML, CSS, JavaScript, and more, I specialize in creating responsive and user-friendly websites. My journey in web development has equipped me with a strong understanding of front-end and back-end technologies, enabling me to bring designs to life and ensure smooth functionality behind the scenes. I thrive on staying up-to-date with the latest industry trends and technologies, allowing me to deliver cutting-edge solutions. Collaborative by nature, I enjoy working in dynamic teams, exchanging ideas, and solving challenges to create innovative web solutions. Whether it's building an e-commerce platform, designing intuitive user interfaces, or optimizing website performance, I am driven by a commitment to deliver high-quality, engaging, and accessible web experiences.
        </p>
        <div className="flex justify-center">
          <Link href = {"#Contact"}>
         
          <button className="ml-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
            Contact Me
          </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded mx-auto w-[15rem]" 
          alt="hero"
          width = {300}
          height = {300}
          src={require("../../../public/assets/myPicture/IMG_20230129_023358840.jpg")}
        />
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero