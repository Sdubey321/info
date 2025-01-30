import React from 'react'
import { motion } from 'framer-motion';


export default function section2() {
    return (
        <>
            {/* <div className='shadow-lg bg-[#1B1C1D] w-[70%] mx-auto mt-16 '>
                <div className='ml-[7%] pt-10'>
                    <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text leading-[2] font-[Prata]'>Blending Technology and Innovation</p>
                    <div className='flex justify-between w-[80%] pt-10 pb-16'>
                        <div>
                            <h3 className='font-normal text-3xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata]'>Mission</h3>
                            <p className='text-white text-2xl pt-6 font-light font-[Raleway]'>Empowering the Indian Legal Landscape</p>
                        </div>
                        <div>
                            <h3 className='font-normal text-3xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata]'>Vision</h3>
                            <p className='text-white text-2xl pt-6 font-light font-[Raleway]'>To be a leader in AI-driven legal solutions</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-gray-100 py-16">
      <div className="w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          Blending Technology and Innovation
        </motion.h2>
        <p className="text-xl text-gray-500 pt-2 mb-8">
        Revolutionizing workflows with cutting-edge solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white p-8 shadow-lg rounded-xl text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-600">
              Empowering the Indian Legal Landscape.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 shadow-lg rounded-xl text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600">
              To be a leader in AI-driven legal solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>

        </>
    )
}
