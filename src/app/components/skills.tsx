import {ImHtmlFive} from 'react-icons/im'
import {BiLogoCss3} from 'react-icons/bi'
import {DiJavascript} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {SiOracle} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {AiOutlineAmazon} from 'react-icons/ai'
import {SiCanva} from 'react-icons/si'

import React from 'react'

const Skills = () => {
  return (
    <div id="skills"><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        {/* <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
          SKILLS
        </h2> */}
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
         My Skills:
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        {/* skills 1*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <ImHtmlFive className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                HTML
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 2*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <BiLogoCss3 className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                CSS
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 3*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <DiJavascript className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                JavaScript
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 4*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <SiTypescript className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                TypeScript
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 5*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <TbBrandNextjs className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                NextJs-13
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 6*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaPython className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                Python-12
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 7*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <SiOracle className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                Oracle-12g
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 8*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <FaReact className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                React
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 9*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <AiOutlineAmazon className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                Amazon Virtual Assistant
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-wrap -m-5">
        {/* skills 10*/}
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-white p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              <SiCanva className = "text-xl font-bold" />
              </div>
              <h2 className="text-red-700 text-lg title-font font-medium" />
                Canva
            </div>
            <div className="flex-grow">
                <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                    <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>

                </div>
             <p className='font-bold text-blue-600 text-right'>80%</p>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  </section>
  </div>
  )
}

export default Skills