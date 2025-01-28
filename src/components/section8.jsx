import React from 'react'

export default function section8() {
  return (
    // <div className='shadow-lg bg-[#1B1C1D] justify-normal w-[70%] mx-auto mt-10'>
    //   <div className='ml-[7%] py-10'>
    //     <p className='font-medium text-5xl text-left bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] inline-block text-transparent bg-clip-text  font-[Prata] leading-[1.25]'>Seamless Integration of Innovative Technology</p>

    //     <div class="box-container">
    //       <div className='flex'>
    //         <div class="box small">
    //           <div class="box-number">1</div>
    //         </div>
    //         <div class="box-text bottomLine">
    //           <h3 className='font-medium font-[Prata] text-2xl'>Seamless Integration</h3>
    //           <p className='font-[Raleway] text-lg'>Works seamlessly with existing systems</p>
    //         </div>
    //       </div>
    //       <div className='flex'>
    //         <div class="box medium ">
    //           <div class="box-number">2</div>
    //         </div>
    //         <div class="box-text bottomLine">
    //           <h3 className='font-medium font-[Prata] text-2xl'>Secure & Reliable</h3>
    //           <p className='font-[Raleway] text-lg'>Robust security measures for data protection</p>
    //         </div>
    //       </div>
    //       <div className='flex'>
    //         <div class="box large">
    //           <div class="box-number">3</div>
    //         </div>
    //         <div class="box-text">
    //           <h3 className='font-medium font-[Prata] text-2xl'>Scalable Solutions</h3>
    //           <p className='font-[Raleway] text-lg'>Grow with your needs</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gradient-to-br from-[#1B1C1D] to-[#2D2F30] text-white py-12 px-6 md:px-12 lg:px-24 rounded-2xl shadow-lg w-[90%] md:w-[70%] mx-auto mt-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent">
          Seamless Integration of Innovative Technology
        </h2>
        <p className="text-gray-400 mt-4 font-[Raleway] text-lg md:text-lg">
          Transform your legal operations with cutting-edge solutions that adapt to your systems effortlessly.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-[#252627] rounded-xl p-6 hover:scale-105 transform transition-all duration-300 shadow-md">
          <div className="w-12 h-12 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold text-[#D2AC47] mb-2">Custom Integration</h3>
          <p className="text-gray-300 font-[Raleway] text-base">
            Tailored to your existing systems to ensure a seamless transition.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-[#252627] rounded-xl p-6 hover:scale-105 transform transition-all duration-300 shadow-md">
          <div className="w-12 h-12 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold text-[#D2AC47] mb-2">Advanced Scalability</h3>
          <p className="text-gray-300 font-[Raleway] text-base">
            Flexible solutions that grow with your organization's needs.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-[#252627] rounded-xl p-6 hover:scale-105 transform transition-all duration-300 shadow-md">
          <div className="w-12 h-12 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold text-[#D2AC47] mb-2">Streamlined Operations</h3>
          <p className="text-gray-300 font-[Raleway] text-base">
            Optimize workflows and reduce redundancies for maximum efficiency.
          </p>
        </div>
      </div>
    </div>
  )
}
