import React from 'react'
import Automation from '../assests/Images/ogqPmyWvqDgAR0-mMNq8o.jpg'
import { motion } from 'framer-motion';


export default function section5() {
  return (
    // <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
    //   <img src={Automation} alt="" className='w-full h-[300px]' />
    //   <div className='ml-[7%] py-10'>
    //     <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata] leading-[1.25]'>Compliance Automation for Efficiency
    //     </p>

    //     <div class="timeline-container">
    //       <div class="horizontal-line"></div>
    //       <div class="milestones">
    //         <div class="milestone" onclick="location.href='#section1'">
    //           <span class="number">1</span>
    //           <div class="vertical-line"></div>
    //           <p class="description font-medium font-[Prata] text-2xl ">Regularly Updates</p>
    //           <p className='paragraph font-[Raleway] text-lg'>Stay informed of the latest legal changes</p>
    //         </div>
    //         <div class="milestone" onclick="location.href='#section2'">
    //           <span class="number">2</span>
    //           <div class="vertical-line"></div>
    //           <p class="description font-medium font-[Prata] text-2xl">Automation Process</p>
    //           <p className='paragraph  font-[Raleway] text-lg'>Streamline compliance procedures</p>
    //         </div>
    //         <div class="milestone" onclick="location.href='#section3'">
    //           <span class="number">3</span>
    //           <div class="vertical-line"></div>
    //           <p class="description font-medium font-[Prata] text-2xl">Risk Mitigation</p>
    //           <p className='paragraph  font-[Raleway] text-lg'>Reduce the risk of legal violations</p>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    <div className="bg-gray-100 py-20">
      <div className="w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          Compliance Automation for Efficiency
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Streamlining processes to keep you compliant and minimize risks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto">
        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Regularly Updates</h3>
          <p className="text-gray-600">
            Stay informed of the latest legal changes.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automation Process</h3>
          <p className="text-gray-600">
            Streamline compliance procedures efficiently.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Risk Mitigation</h3>
          <p className="text-gray-600">
            Reduce the risk of legal violations.
          </p>
        </motion.div>
      </div>
    </div>

  )
}
