import React from 'react'
import customITSolutions from '../assests/Images/8-um8V0Hg-_pJjMheEhOK.avif'
import { motion } from 'framer-motion';



export default function section4() {
    return (
        <>
            {/* <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-16 mt-10'>
                <div className='w-[40%]'>
                    <img src={customITSolutions} alt='image' className=' h-full w-full' />
                </div>
                <div className='ml-[2%] pt-10'>
                    <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata] leading-[1.25]'>Custom IT Solutions to Navigate Complexity</p>
                    <div className='flex flex-wrap justify-between mt-10'>
                        <div className='feature-item'>
                            <svg class="colorable-icon w-16 h-auto pb-5" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="flask-gear" data-prefix="fal" aria-hidden="true">
                                <path d="M288 196.8V32H160V196.8c0 17.8-4.9 35.2-14.2 50.3L100.9 320H304.6c2.2 13.3 10.3 25 21.2 32H81.2L37.5 423c-3.6 5.9-5.5 12.7-5.5 19.6C32 463.3 48.7 480 69.4 480H351c15.6 13.1 36.9 13.7 53 4.8v.9c0 6.7 1.5 13.5 4.2 19.7c-9 4.3-19 6.6-29.7 6.6H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V32H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h48H288h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V196.8c0 11.8 3.3 23.5 9.5 33.5L336 241c-4.9 6.4-9.5 13.1-13.6 20.3c-1.9 3.3-3.7 6.6-5.4 10l-14.8-24.1C292.9 232 288 214.6 288 196.8zm175.3 43c-3.1 16.6-14 29.5-26.6 36.7c-13 7.4-30 9.9-46 3.7l-17.2 30.5c12.8 11.4 18.5 27.7 18.5 42.4s-5.7 31-18.5 42.4L390.7 426c15.9-6.3 33-3.7 46 3.7c12.6 7.2 23.6 20.1 26.6 36.7H497c3-16.6 13.9-29.5 26.5-36.7c12.9-7.4 30-9.9 45.9-3.6l17.2-30.5c-12.8-11.4-18.5-27.7-18.5-42.4s5.7-31 18.5-42.4l-17.2-30.5c-15.9 6.3-32.9 3.7-45.9-3.6c-12.6-7.2-23.5-20.2-26.5-36.7H463.3zm43.5-32c11.8 0 21.4 9.6 21.4 21.4v1.6c0 7.5 4.6 14.2 11.1 18c6.5 3.7 14.5 4.2 21 .3l1.8-1c10.7-6.3 24.4-2.6 30.5 8.2L619 303.1c5.7 10.2 2.3 23.1-7.8 29c-7.3 4.3-11.2 12.6-11.2 21s3.9 16.7 11.2 21c10 5.9 13.5 18.8 7.8 29L592.5 450c-6.1 10.8-19.9 14.5-30.5 8.2l-1.8-1c-6.5-3.8-14.5-3.4-21 .3c-6.5 3.7-11.1 10.4-11.1 18V477c0 11.8-9.6 21.4-21.4 21.4H453.4c-11.7 0-21.3-9.5-21.3-21.3v-1.4c0-7.6-4.6-14.4-11.3-18.2c-6.6-3.7-14.7-4.2-21.2-.3l-1.6 1c-10.7 6.3-24.4 2.6-30.5-8.2L341 403.1c-5.7-10.2-2.3-23.1 7.8-29c7.3-4.3 11.2-12.5 11.2-21s-3.9-16.7-11.2-21c-10-5.9-13.5-18.8-7.8-29l26.4-46.9c6.1-10.8 19.9-14.5 30.5-8.2l1.6 1c6.5 3.9 14.6 3.4 21.2-.3c6.6-3.8 11.3-10.6 11.3-18.2v-1.4c0-11.7 9.5-21.3 21.3-21.3h53.4zM424.1 353.1a56 56 0 1 1 112.1 0 56 56 0 1 1 -112.1 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" fill="#AE8625"></path></svg>

                            <h3 className=' feature text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Tailored Solutions</h3>
                            <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Customized for your specific legal needs</p>
                        </div>
                        <div className='feature-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-14 h-auto pb-3' viewBox="0 0 24 24">
                                <path fill="#AE8625" stroke="#231F20" stroke-width="2" d="M5,21 L23,21 L23,9 L5,9 M19,15 L1,15 L1,3 L19,3" />
                            </svg>
                            <h3 className='feature text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Seamless Integration</h3>
                            <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Works seamlessly with existing systems</p>
                        </div>
                        <div className='mt-10 mb-10'>
                            <svg class="colorable-icon w-16 h-auto pb-5" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" data-icon="tickets-simple" data-prefix="fal" aria-hidden="true"><path d="M128 96c0-17.7 14.3-32 32-32H576c17.7 0 32 14.3 32 32v47.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.8 40 64.5V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V272.5c23.7-11.8 40-36.2 40-64.5s-16.3-52.8-40-64.5V96zm484.7 46.2a.4 .4 0 1 1 -.5-.6 .4 .4 0 1 1 .5 .6zm-.5 132.3s0 0-.1 0l.1 0zm-488.4 0a0 0 0 1 0 0-.1 0 0 0 1 0 0 .1zm0-132.9a0 0 0 1 0 0 .1 0 0 0 1 0 0-.1zM96 96v56c0 8.8 7.4 15.7 15.6 19.1c14.4 6.1 24.4 20.3 24.4 36.9s-10.1 30.8-24.4 36.9C103.4 248.3 96 255.2 96 264v56c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V264c0-8.8-7.4-15.7-15.6-19.1C610.1 238.8 600 224.6 600 208s10.1-30.8 24.4-36.9c8.1-3.4 15.6-10.3 15.6-19.1V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 61.9 50.1 112 112 112H528c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-44.2 0-80-35.8-80-80V112z" fill="#AE8625"></path></svg>

                            <h3 className='text-2xl text-[#cfcbbf] font-medium font-[Prata]'>Dedicated Support</h3>
                            <p className='pt-3 text-lg text-[#cfcbbf] font-[Raleway]'>Expert assistance every step of the way</p>
                        </div>
                    </div>
                </div>
            </div> */}

<div className="bg-gray-50 py-20">
      <div className="w-10/12 mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
        >
          Custom IT Solutions to Navigate Complexity
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Designed to simplify and optimize your legal operations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-10/12 mx-auto">
        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tailored Solutions</h3>
          <p className="text-gray-600">
            Customized for your specific legal needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Seamless Integration</h3>
          <p className="text-gray-600">
            Works seamlessly with existing systems.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Dedicated Support</h3>
          <p className="text-gray-600">
            Expert assistance every step of the way.
          </p>
        </motion.div>
      </div>
    </div>
        </>
    )
}
