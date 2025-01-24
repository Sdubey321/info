import React from 'react'
import Automation from '../assests/Images/ogqPmyWvqDgAR0-mMNq8o.jpg'

export default function section5() {
  return (
    <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
      <img src={Automation} alt="" className='w-full h-[300px]' />
      <div className='ml-[7%] py-10'>
        <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text font-[Prata] leading-[1.25]'>Compliance Automation for Efficiency
        </p>

        <div class="timeline-container">
          <div class="horizontal-line"></div>
          <div class="milestones">
            <div class="milestone" onclick="location.href='#section1'">
              <span class="number">1</span>
              <div class="vertical-line"></div>
              <p class="description font-medium font-[Prata] text-2xl ">Regularly Updates</p>
              <p className='paragraph font-[Raleway] text-lg'>Stay informed of the latest legal changes</p>
            </div>
            <div class="milestone" onclick="location.href='#section2'">
              <span class="number">2</span>
              <div class="vertical-line"></div>
              <p class="description font-medium font-[Prata] text-2xl">Automation Process</p>
              <p className='paragraph  font-[Raleway] text-lg'>Streamline compliance procedures</p>
            </div>
            <div class="milestone" onclick="location.href='#section3'">
              <span class="number">3</span>
              <div class="vertical-line"></div>
              <p class="description font-medium font-[Prata] text-2xl">Risk Mitigation</p>
              <p className='paragraph  font-[Raleway] text-lg'>Reduce the risk of legal violations</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
