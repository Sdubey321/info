import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
        <svg xmlns="http://www.w3.org/2000/svg" data-version="2" data-id="lg_LaSvLHHVTSsZ3iHCnn" viewBox="0 0 197 155" x="0" y="0" class="w-24 h-auto">
        <rect width="100%" height="100%" fill="transparent"></rect>
        <circle r="3" fill="#d8a311" transform="matrix(7.7226 0 0 7.6213 110.084 24.15)"></circle>
        <path fill="#d8a311" d="M179.587 92.743h-15.445V77.5a23.168 22.864 0 0 0-23.168-22.864h-7.722l-15.446 30.485-5.174-20.349 5.174-10.136h-15.445l5.174 10.136-5.174 20.35-15.445-30.486h-61.78a7.723 7.621 0 1 0 0 15.243h54.057v60.97h46.336v7.621a7.723 7.621 0 0 0 7.722 7.622h46.336a7.723 7.621 0 0 0 7.723-7.622v-38.106a7.723 7.621 0 0 0-7.723-7.621M140.974 81.31a3.861 3.81 0 0 1 7.723 0v11.432h-7.723zm38.613 57.16h-46.335v-38.107h15.445v22.864a7.723 7.621 0 1 0 15.445 0v-22.864h15.445z"></path>
        <path fill="#d8a311" d="M67.61 107.985H52.163l3.861-15.242-7.722 15.242a7.723 7.621 0 0 0 7.723 7.622h7.722a7.723 7.621 0 0 0 7.723-7.622l-7.723-15.242z"></path>
        <path fill="#d8a311" d="M63.748 88.932a3.861 3.81 0 0 0-7.722 0l-15.446-3.81V81.31a3.861 3.81 0 0 0-7.722 0v3.81l-15.445 3.811a3.861 3.81 0 0 0-7.723 0v3.81h23.168v30.486h-7.723a7.723 7.621 0 0 0-7.722 7.621h38.613a7.723 7.621 0 0 0-7.723-7.621H40.58V92.743h23.168z"></path>
        <path fill="#d8a311" d="m5.829 107.985 3.86-15.242-7.722 15.242a7.723 7.621 0 0 0 7.723 7.622h7.723a7.723 7.621 0 0 0 7.722-7.622l-7.722-15.242 3.86 15.242z"></path>
        </svg>
          <p className="text-sm text-gray-400 mt-2">
            Empowering legal systems with seamless technology integration.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-3 bg-gray-700 hover:bg-[#4267B2] rounded-full transition-all"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-700 hover:bg-[#1DA1F2] rounded-full transition-all"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-700 hover:bg-[#0077B5] rounded-full transition-all"
          >
            <FaLinkedinIn className="text-white" />
          </a>
          <a
            href="#"
            className="p-3 bg-gray-700 hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full transition-all"
          >
            <FaInstagram className="text-white" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-500 transition-all">Home</a></li>
            <li><a href="#" className="hover:text-gray-500 transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-gray-500 transition-all">Services</a></li>
            <li><a href="#" className="hover:text-gray-500 transition-all">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-500 transition-all">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-500 transition-all">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-500 transition-all">Compliance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
          <p className="text-sm">
            Address: 123 Legal Tech Lane, Suite 100
            <br />
            Email: <a href="mailto:info@quantanerve.com" className="hover:text-gray-500 transition-all">info@quantanerve.com</a>
          </p>
          <p className="text-sm mt-4">
            Phone: <a href="tel:+1234567890" className="hover:text-gray-500 transition-all">+1 234 567 890</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} QuantaNerve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
