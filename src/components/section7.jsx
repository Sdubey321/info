import React from 'react'

export default function section7() {
    return (
        <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
            <div className='ml-[7%] py-10'>
                <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text  font-[Prata] leading-[1.25]'>Why Choose QuantaNerver: Domain Expertise</p>
                {/* this is recommaded design from my side */}
                {/* <div class="pyramid-container">
                    <div class="pyramid-row top">
                        <div class="pyramid-item">Legal Profession</div>
                    </div>
                    <div class="pyramid-row middle">
                        <div class="pyramid-item">Technology Experts</div>
                        <div class="pyramid-item">Client-Centric Approach</div>
                    </div>
                    <div class="pyramid-row bottom">
                        <div class="pyramid-item">Collaboration</div>
                        <div class="pyramid-item">Innovation</div>
                        <div class="pyramid-item">Excellence</div>
                    </div>
                </div> */}

                <div className='tringle-container'>
                    <div className='flex'>
                        <div className='pl-[171px] pb-1'>
                            <svg contenteditable="false" data-testid="trapezoid-svg" class="css-11shz5c"><path d="
    M 85.3828125 0
    L 85.3828125 0
    L 170.765625 103.71875
    L 0 103.71875
    L 85.3828125 0 Z" class="themed-svg-shape-background css-0" fill='#3a3b3c'></path></svg>
                        </div>
                        <div className='tringleText bottomLine'>
                            <h3 className='font-medium font-[Prata] text-2xl'>Legal Professionals</h3>
                            <p className='font-[Raleway] text-lg'>Deep understanding of the Indian legal system</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='pl-[85px] pb-1'>
                            <svg contenteditable="false" data-testid="trapezoid-svg" class="css-si9yvt"><path d="
    M 84.52422664141413 0
    L 257.02264835858585 0
    L 341.546875 103.71875
    L 0 103.71875
    L 84.52422664141413 0 Z" class="themed-svg-shape-background css-0" fill='#3a3b3c'></path></svg>
                        </div>
                        <div className='tringleText bottomLine'>
                            <h3 className='font-medium font-[Prata] text-2xl'>Technology Experts</h3>
                            <p className='font-[Raleway] text-lg'>Cutting-edge AI and software development skills</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <svg contenteditable="false" data-testid="trapezoid-svg" class="css-1wovuj0"><path d="
    M 83.66045875420878 0
    L 428.6520412457912 0
    L 512.3125 103.71875
    L 0 103.71875
    L 83.66045875420878 0 Z" class="themed-svg-shape-background css-0" fill='#3a3b3c'></path></svg>
                        </div>
                        <div className='tringleText'>
                            <h3 className='font-medium font-[Prata] text-2xl'>Client-Centric Approach</h3>
                            <p className='font-[Raleway] text-lg'>Dedicated to meeting your specific needs</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
