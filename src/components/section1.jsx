import React from 'react'
import Empowering  from '../assests/Images/JICHSr45JQxM0o8bXYKIY.avif'

export default function section1() {
  return (
    <>
    <div className='shadow-lg bg-[#1B1C1D] flex justify-normal w-[70%] mx-auto gap-16 mt-10 font-[Prata]'>
        <div className='w-[40%]'>
            <img src={Empowering} alt='image' className=' h-[412px] w-full' />
        </div>
        <div className='flex items-center justify-center'>
            <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text'>Empowering the Indian Legal Landscape</p>
        </div>
    </div>
    </>
  )
}
