import React from 'react'
import specialished from '../assests/Images/LTMZqfYax4UACQT44kbCa.avif'
import { CheckCircle } from "lucide-react";



export default function section3() {
    return (
        <>
            <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-4 mt-10 rounded-2xl'>

                {/* <div className='ml-[7%] pt-10'>
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
                </div> */}
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <img
                            src={specialished}
                            alt="AI-Driven Solutions for Legal Systems"
                            className="rounded-2xl shadow-xl border-[6px] border-[#AE8625]"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-transparent bg-clip-text font-[Prata] leading-[1.25]">
                            Specialized AI-Driven Solutions for Legal Systems
                        </h2>
                        <p className="text-lg text-gray-300">
                            Transforming legal operations with cutting-edge artificial intelligence tailored for efficiency and precision.
                        </p>
                        <ul className="space-y-4 text-yellow-400 text-base">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6" />
                                Streamlined legal research and documentation.
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6" />
                                Predictive analytics for case outcomes.
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle className="w-6 h-6" />
                                Automated compliance and risk management.
                            </li>
                        </ul>
                        <div className="flex gap-4 justify-center lg:justify-start mt-6">
                            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                                Explore Solutions
                            </button>
                            <button className="px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-400 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
