import React from 'react'
import Automation from '../assests/Images/ogqPmyWvqDgAR0-mMNq8o.jpg'

export default function section6() {
    return (
        <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10 rounded-2xl'>
            <img src={Automation} alt="" className='w-full h-[300px]' />
            <div className='ml-[7%] py-10'>
                <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text  font-[Prata] leading-[1.25]'>Natural Language Processing (NLP) Capabilities</p>
                <div className='p-5 mt-8'>
                    <div className='flex gap-10
                    '>
                        <div>
                            <div className='tabBox'>1</div>
                            <p className='description font-medium font-[Prata] text-2xl text-[#D2AC47]'> Document Analysis</p>
                            <p className='naturalParagraph font-[Raleway] text-lg'>Extract key information from legal documents</p>
                        </div>
                        <div>
                            <div className='tabBox'>2</div>
                            <p className='description font-medium font-[Prata] text-2xl text-[#D2AC47]'>Predictive Analysis</p>
                            <p className='naturalParagraph font-[Raleway] text-lg'>Forecast legal outcomes and identify potential risks</p>
                        </div>
                        <div>
                            <div className='tabBox'>3</div>
                            <p className='description font-medium font-[Prata] text-2xl text-[#D2AC47]'>Smart Analysis</p>
                            <p className='naturalParagraph font-[Raleway] text-lg'>Automated contract execution with AI-driven logic</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
