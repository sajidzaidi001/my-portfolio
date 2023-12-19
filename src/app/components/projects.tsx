import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div id="project"><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects:
        </h1>
        </div>
      <div className="flex flex-wrap -m-[5rem]">
        {/* PROJECTS */}

        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-med h-med object-cover object-center"
              src={require("public/assets/projects Pictures/cli calculator.jpg")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                CLI Claculator In TypeScript.
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Command Line Claculator with Simple TypeScript Codes
              </h1>
              <p className="leading-relaxed">
                In this project i have written simple codes which is eaasy to understand for new students in
                typeScript. 
              </p>
              <Link target = "blank" href={"https://github.com/sajidzaidi001/sajid_calculator"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
                View Project. 
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-med h-med object-cover object-center"
              src= {require("public/assets/projects Pictures/ATM.jpeg")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
               The ATM Machine 
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The Simple ATM machine with uses of NPM Liabrary, Inquirer, & Chalk
              </h1>
              <Link target = "blank" href={"https://github.com/sajidzaidi001/sajid_atm"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
                View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-med h-med object-cover object-center"
              src= {require("public/assets/projects Pictures/countdown timer.jpg")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                The Number Counting in TypeScript.
              </h2>

              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Simple TypeScript Coding in CountDown Timer
              </h1>
                In this Project i have normally used typeScript to create countDown Timer.
              <Link target = "blank" href={"https://github.com/sajidzaidi001/countdownTimer"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-med h-med object-cover object-center"
              src= {require("public/assets/projects Pictures/opp.png")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                Object Oriented Program OOP in TypeScript
              </h2>
              <h1 className="title-font text-lg-medium text-gray-900 mb-3">
                Define how to make more understandable of your code
              </h1>
                In this project i have made classes and Inherite parant class to child class.
                <Link target = "blank" href={"https://github.com/sajidzaidi001/Opp_Project"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
               View Project
              </p>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src= {require("public/assets/projects Pictures/assignment-1-image-300x211.png")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                My TypeScript Assignment
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Complete 45 Questions answers.
              </h1>
               In Quarter 01, what i have learnt finally i have submit my assignment. In this
               assignment i have solved all 45 questions related to typeScript and these 45 
               question's codes run perfectly.
               <Link target = "blank" href={"https://github.com/sajidzaidi001/Assignment-Batch46-Qtr-1"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
             </p>
             </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src= {require("public/assets/projects Pictures/school management system.jpeg")}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                The School Management System in OOP
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The complete SMS Programe in CLI Base
              </h1>
             
                In this project i have used Object Oriented Programming Inheritance class.
                <Link target = "blank" href={"https://github.com/sajidzaidi001/School_Management_System"}>
              <p className="leading-relaxed text-blue-500 hover:underline">
              View Project

              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Projects