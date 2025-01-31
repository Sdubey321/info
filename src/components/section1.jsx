import React from 'react'
import Empowering  from '../assests/Images/JICHSr45JQxM0o8bXYKIY.avif'
import Justice  from '../assests/Images/IMG1.png'
import Hammer from '../assests/Images/IMG2.png'
import { motion } from 'framer-motion';
import animatedStlFile from '../assests/Images/stl--Lady_justice.stl'
import ModelViewer from './modalViewer';

export default function section1() {
  return (
    <>
    {/* <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-16 mt-10 font-[Prata]'>
        <div className='w-[40%]'>
            <img src={Empowering} alt='image' className=' h-[412px] w-full' />
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-medium text-5xl text-left text-[#2C484B;] inline-block bg-clip-text'>Empowering the Indian Legal Landscape</p>
        </div>
    </div> */}

<div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
      <div className="w-10/12 mx-auto text-center">
      <motion.h2
            className="text-[48px] font-bold text-white mb-4 uppercase"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 10,
            }}
          >
            Empowering the Indian <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-yellow-400"
            >
              Legal
            </motion.span> Landscape
          </motion.h2>
        <p className="text-[23px] text-white pt-2">
          Simplifying legal complexities with innovative solutions and compliance tools.
        </p>
      </div>

      <div>
        <motion.img src={Justice} alt=""  className='my-0 mx-auto'
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 10,
        }}/>
        {/* <ModelViewer modelPath={animatedStlFile} */}
       {/* /> */}
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-10/12 mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Real-time Legal Updates</h3>
          <p className="text-gray-600">
            Stay informed with up-to-the-minute changes in legal frameworks and regulations.
          </p>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Compliance Automation Made Simple
          </h3>
          <p className="text-gray-600">
            Streamline compliance processes with advanced automation tools tailored to your needs.
          </p>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-xl text-center hover:scale-105 transform transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Proactive Risk Management Tools
          </h3>
          <p className="text-gray-600">
            Minimize risks with tools that anticipate and mitigate potential legal challenges.
          </p>
        </div>
      </div>
      <div className='text-center'>
      <motion.button class="mt-6 px-6 py-3 bg-yellow-500 rounded-md text-gray-800 font-bold"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}>
       Get Started
      </motion.button>
      </div>
    </div>
    </>
  )
}
