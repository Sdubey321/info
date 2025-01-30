import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-gray-800 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-500 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 197 155"
              className="w-6 h-6 text-gray-900"
              fill="currentColor"
            >
              <circle r="3" transform="matrix(7.7226 0 0 7.6213 110.084 24.15)" />
              <path d="M179.587 92.743h-15.445V77.5a23.168 22.864 0 0 0-23.168-22.864h-7.722l-15.446 30.485-5.174-20.349 5.174-10.136h-15.445l5.174 10.136-5.174 20.35-15.445-30.486h-61.78a7.723 7.621 0 1 0 0 15.243h54.057v60.97h46.336v7.621a7.723 7.621 0 0 0 7.722 7.622h46.336a7.723 7.621 0 0 0 7.723-7.622v-38.106a7.723 7.621 0 0 0-7.723-7.621M140.974 81.31a3.861 3.81 0 0 1 7.723 0v11.432h-7.723zm38.613 57.16h-46.335v-38.107h15.445v22.864a7.723 7.621 0 1 0 15.445 0v-22.864h15.445z" />
              <path  d="M67.61 107.985H52.163l3.861-15.242-7.722 15.242a7.723 7.621 0 0 0 7.723 7.622h7.722a7.723 7.621 0 0 0 7.723-7.622l-7.723-15.242z"></path>
              <path d="M63.748 88.932a3.861 3.81 0 0 0-7.722 0l-15.446-3.81V81.31a3.861 3.81 0 0 0-7.722 0v3.81l-15.445 3.811a3.861 3.81 0 0 0-7.723 0v3.81h23.168v30.486h-7.723a7.723 7.621 0 0 0-7.722 7.621h38.613a7.723 7.621 0 0 0-7.723-7.621H40.58V92.743h23.168z"></path>
              <path  d="m5.829 107.985 3.86-15.242-7.722 15.242a7.723 7.621 0 0 0 7.723 7.622h7.723a7.723 7.621 0 0 0 7.722-7.622l-7.722-15.242 3.86 15.242z"></path>
            </svg>
          </div>
          <span className="text-xl font-semibold">Quantanerve</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-base">
          {["Home", "Features", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-gray-900 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="px-5 py-2 bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 hover:text-gray-900 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block mt-4 px-5 py-2 text-center bg-yellow-500 text-black font-medium rounded-lg shadow-md hover:bg-yellow-600 transition"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
