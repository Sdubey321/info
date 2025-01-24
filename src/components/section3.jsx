import React from 'react'
import specialished from '../assests/Images/LTMZqfYax4UACQT44kbCa.avif'


export default function section3() {
    return (
        <>
            <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-4 mt-10'>

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
            </div>


        </>
    )
}
