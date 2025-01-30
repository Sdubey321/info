import React from 'react'
import Automation from '../assests/Images/ogqPmyWvqDgAR0-mMNq8o.jpg'
import { motion } from 'framer-motion';


export default function section6() {
    return (
        // <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
        //     <img src={Automation} alt="" className='w-full h-[300px]' />
        //     <div className='ml-[7%] py-10'>
        //         <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text  font-[Prata] leading-[1.25]'>Natural Language Processing (NLP) Capabilities</p>
        //         <div className='p-5 mt-8'>
        //             <div className='flex gap-10
        //             '>
        //                 <div>
        //                     <div className='tabBox'>1</div>
        //                     <p className='description font-medium font-[Prata] text-2xl'> Document Analysis</p>
        //                     <p className='naturalParagraph font-[Raleway] text-lg'>Extract key information from legal documents</p>
        //                 </div>
        //                 <div>
        //                     <div className='tabBox'>2</div>
        //                     <p className='description font-medium font-[Prata] text-2xl'>Predictive Analysis</p>
        //                     <p className='naturalParagraph font-[Raleway] text-lg'>Forecast legal outcomes and identify potential risks</p>
        //                 </div>
        //                 <div>
        //                     <div className='tabBox'>3</div>
        //                     <p className='description font-medium font-[Prata] text-2xl'>Smart Analysis</p>
        //                     <p className='naturalParagraph font-[Raleway] text-lg'>Automated contract execution with AI-driven logic</p>
        //                 </div>
        //             </div>
        //         </div>



        //     </div>
        // </div>

        <div className="bg-gray-900 py-20">
        <div className="w-10/12 mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 uppercase">
            Natural Language Processing (NLP) Capabilities
          </h2>
          <p className="text-lg text-gray-400">
            Revolutionizing legal workflows with cutting-edge NLP technology.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-10/12 mx-auto">
          <div className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Document Analysis</h3>
            <p className="text-gray-600">
              Extract key information from legal documents effortlessly.
            </p>
          </div>
  
          <div className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Predictive Analysis</h3>
            <p className="text-gray-600">
              Forecast legal outcomes and identify potential risks with AI precision.
            </p>
          </div>
  
          <div className="bg-gray-100 p-8 shadow-lg rounded-xl text-center hover:bg-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Analysis</h3>
            <p className="text-gray-600">
              Automate contract execution with AI-driven logic for smarter workflows.
            </p>
          </div>
        </div>
  
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 font-bold">
            Explore Solutions
          </button>
        </div>
      </div>
    )
}
