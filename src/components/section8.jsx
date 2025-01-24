import React from 'react'

export default function section8() {
  return (
    <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
      <div className='ml-[7%] py-10'>
        <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text  font-[Prata] leading-[1.25]'>Seamless Integration of Innovative Technology</p>

        <div class="box-container">
          <div className='flex'>
            <div class="box small">
              <div class="box-number">1</div>
            </div>
            <div class="box-text bottomLine">
              <h3 className='font-medium font-[Prata] text-2xl'>Seamless Integration</h3>
              <p className='font-[Raleway] text-lg'>Works seamlessly with existing systems</p>
            </div>
          </div>
          <div className='flex'>
            <div class="box medium ">
              <div class="box-number">2</div>
            </div>
            <div class="box-text bottomLine">
              <h3 className='font-medium font-[Prata] text-2xl'>Secure & Reliable</h3>
              <p className='font-[Raleway] text-lg'>Robust security measures for data protection</p>
            </div>
          </div>
          <div className='flex'>
            <div class="box large">
              <div class="box-number">3</div>
            </div>
            <div class="box-text">
              <h3 className='font-medium font-[Prata] text-2xl'>Scalable Solutions</h3>
              <p className='font-[Raleway] text-lg'>Grow with your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
