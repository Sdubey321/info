import React from "react";
import Automation from "../assests/Images/ogqPmyWvqDgAR0-mMNq8o.jpg";

export default function Section5() {
  return (
    <div className="bg-[#1B1C1D] shadow-lg w-[90%] md:w-[70%] mx-auto mt-10 rounded-2xl overflow-hidden ">
      {/* Image Section */}
      <div className="relative">
        <img
          src={Automation}
          alt="Automation"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-6 ml-[7%]">
          <p className="text-xl md:text-3xl font-bold text-white bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent">
            Compliance Automation for Efficiency
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="px-6 py-10 md:px-12 ml-[7%]">
        <div className="space-y-8">
          {/* Timeline Item 1 */}
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full">
              1
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D2AC47]">Regular Updates</p>
              <p className="text-gray-300 text-sm md:text-base">
                Stay informed of the latest legal changes.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full">
              2
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D2AC47]">Automation Process</p>
              <p className="text-gray-300 text-sm md:text-base">
                Streamline compliance procedures effortlessly.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#D2AC47] text-black font-bold rounded-full">
              3
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D2AC47]">Risk Mitigation</p>
              <p className="text-gray-300 text-sm md:text-base">
                Reduce the risk of legal violations proactively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
