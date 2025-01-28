import React from 'react'
import { Lightbulb, Code, Activity } from 'lucide-react';
import InnovationImage from '../assests/Images/8-um8V0Hg-_pJjMheEhOK.avif'


export default function section2() {
    return (
        <>
            <div className='shadow-lg bg-[#1B1C1D] w-[70%] mx-auto mt-16 rounded-2xl'>
                {/* <div className='ml-[7%] pt-10'>
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
                </div> */}
                <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left space-y-6 ml-[7%]">
                        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] text-transparent bg-clip-text font-[Prata] leading-[1.25]">
                            Blending Technology <br /> and Innovation
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                            Revolutionizing workflows with cutting-edge solutions.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                            <div className="flex items-center gap-4">
                                <Lightbulb className="w-8 h-8 text-[#AE8625]" />
                                <h4 className="font-bold text-lg text-white font-[Raleway]">Innovative Solutions</h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <Code className="w-8 h-8 text-[#AE8625]" />
                                <h4 className="font-bold text-lg text-white  font-[Raleway]">Advanced Automation</h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <Activity className="w-8 h-8 text-[#AE8625]" />
                                <h4 className="font-bold text-lg text-white  font-[Raleway]">Data Insights</h4>
                            </div>
                            <div className="flex items-center gap-4">
                                <Lightbulb className="w-8 h-8 text-[#AE8625]" />
                                <h4 className="font-bold text-lg text-white font-[Raleway]">Seamless Integration</h4>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img
                                src={InnovationImage}
                                alt="Blending Technology and Innovation"
                                className="rounded-2xl shadow-xl border-[6px] border-[#AE8625]"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
