import React from 'react'
import specialished from '../assests/Images/LTMZqfYax4UACQT44kbCa.avif'
import { motion } from 'framer-motion';



export default function section3() {
    return (
        <>
            {/* <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-4 mt-10'>

                <div className='ml-[7%] pt-10'>
                    <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata] leading-[1.25]'>Specialized AI-Driven Solutions for Legal Systems</p>
                    <div className='flex flex-wrap  mt-10'>
                        <div className='feature-items'>
                            <div>
                                <div className='specilishedBox'></div>
                            </div>
                            <div>
                                <h3 className='text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Case Management</h3>
                                <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Streamlined case organization and analysis</p>
                            </div>
                        </div>
                        <div className='feature-items'>
                            <div>
                                <div className='specilishedBox'></div>
                            </div>
                            <div>
                                <h3 className='text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Legal Research</h3>
                                <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Efficiently finding relevant laws and precedents</p>
                            </div>
                        </div>
                        <div className='mt-10 flex mb-10'>
                            <div>
                                <div className='specilishedBox'></div>
                            </div>
                            <div>
                                <h3 className='text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Contract Review</h3>
                                <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Automated contract analysis and risk assessment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[40%]'>
                    <img src={specialished} alt='image' className=' h-full w-full' />
                </div>
            </div> */}

<div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
      <div className="w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          Specialized AI-Driven Solutions for Legal Systems
        </motion.h2>
        <motion.p
          className="text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transforming legal operations with cutting-edge artificial intelligence tailored for efficiency and precision.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto">
        <motion.div
          className="bg-white text-gray-900 p-8 shadow-lg rounded-xl text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold mb-4">Streamlined Legal Research</h3>
          <p className="text-gray-600">
            Efficient tools to simplify legal research and documentation processes.
          </p>
        </motion.div>

        <motion.div
          className="bg-white text-gray-900 p-8 shadow-lg rounded-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
          <p className="text-gray-600">
            Gain insights into case outcomes with AI-driven predictive tools.
          </p>
        </motion.div>

        <motion.div
          className="bg-white text-gray-900 p-8 shadow-lg rounded-xl text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold mb-4">Automated Compliance</h3>
          <p className="text-gray-600">
            Ensure regulatory compliance with AI-powered risk management tools.
          </p>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <motion.button
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-md mr-4 hover:bg-yellow-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Solutions
        </motion.button>
        <motion.button
          className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold rounded-md hover:bg-yellow-500 hover:text-gray-900"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </div>


        </>
    )
}
