import React, { useState } from 'react';
import { Menu, X, MonitorPlay } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Pro</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Imkoniyatlar</a>
            <a href="#stats" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Natijalar</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Bog'lanish</a>
            <a 
              href="https://xpro-kassa.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition-all flex items-center gap-2"
            >
              <MonitorPlay size={18} />
              Tizimga kirish
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Imkoniyatlar</a>
            <a href="#stats" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Natijalar</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Bog'lanish</a>
            <a 
              href="https://xpro-kassa.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Tizimga kirish
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;