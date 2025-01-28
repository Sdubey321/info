import React from 'react'
import Empowering from '../assests/Images/JICHSr45JQxM0o8bXYKIY.avif'
import { ChevronRight } from 'lucide-react';


export default function section1() {
  return (
    <>
      <div className='shadow-lg bg-[#1B1C1D] flex items-center justify-normal w-[70%] mx-auto gap-16 mt-10 rounded-2xl'>
        {/* <div className='w-[40%]'>
            <img src={Empowering} alt='image' className=' h-[412px] w-full' />
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text'>Empowering the Indian Legal Landscape</p>
        </div> */}
        {/* <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-[#AE8625] via-transparent to-[#D2AC47]"></div> */}
          
          {/* Image Content */}
        <div className="flex-1">
          <div className="relative">
            <img
              src={Empowering}
              alt="Empowering Indian Legal Landscape"
              className="rounded-2xl shadow-xl border-[6px] border-[#AE8625]"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
          </div>
        </div>

        <div className="flex-1 text-center  lg:text-left space-y-6 ">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-transparent bg-clip-text font-[Prata] leading-[1.25]">
            Empowering the Indian Legal Landscape
          </h2>
          <p className="text-lg text-white">
            Simplifying legal complexities with innovative solutions and compliance tools.
          </p>
          <ul className="space-y-4 text-white text-base">
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5" />
              Real-time legal updates.
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5" />
              Compliance automation made simple.
            </li>
            <li className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5" />
              Proactive risk management tools.
            </li>
          </ul>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
