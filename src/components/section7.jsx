import React from 'react';
import { Briefcase, Cpu, Users } from 'lucide-react'; // Using icons from lucide-react library


export default function section7() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6 uppercase">
          Why Choose QuantaNerve: Domain Expertise
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Bringing together legal expertise and cutting-edge technology for unparalleled solutions.
        </p>
      </div>

      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Legal Professionals */}
        <div className="flex items-center gap-6">
          <Briefcase className="text-yellow-500 w-12 h-12" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Legal Professionals</h3>
            <p className="text-gray-400">
              Deep understanding of the Indian legal system.
            </p>
          </div>
        </div>

        {/* Technology Experts */}
        <div className="flex items-center gap-6">
          <Cpu className="text-yellow-500 w-12 h-12" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Technology Experts</h3>
            <p className="text-gray-400">
              Cutting-edge AI and software development skills.
            </p>
          </div>
        </div>

        {/* Client-Centric Approach */}
        <div className="flex items-center gap-6">
          <Users className="text-yellow-500 w-12 h-12" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Client-Centric Approach</h3>
            <p className="text-gray-400">
              Dedicated to meeting your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
