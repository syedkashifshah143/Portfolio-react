import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-gradient-to-r from-[#2C3E50] to-[#1ABC9C] text-white px-4 md:px-8 lg:px-16 font-bold fixed top-0 w-full z-10 shadow-lg'>
      <div className='py-2 flex justify-between items-center'>
        <div className='text-2xl hidden md:inline'>SKS</div>

        {/* Mobile Hamburger Menu Button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className='hidden md:flex md:space-x-6'>
          <Link to='/' className='hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-3 py-2'>
            Home
          </Link>
          <Link to='/about' className='hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-3 py-2'>
            About Me
          </Link>
          <Link to='/service' className='hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-3 py-2'>
            Services
          </Link>
          <Link to='/project' className='hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-3 py-2'>
            Projects
          </Link>
          <Link to='/contact' className='hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-3 py-2'>
            Contact
          </Link>
        </div>

        {/* Connect Me Button for Desktop */}
        <Link to='/contact'>
          <button className='bg-gradient-to-r from-[#1ABC9C] to-[#3498DB] text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Connect Me
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#2C3E50]`}>
        <Link to='/' onClick={closeMenu} className='block hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-4 py-2'>
          Home
        </Link>
        <Link to='/about' onClick={closeMenu} className='block hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-4 py-2'>
          About Me
        </Link>
        <Link to='/service' onClick={closeMenu} className='block hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-4 py-2'>
          Services
        </Link>
        <Link to='/project' onClick={closeMenu} className='block hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-4 py-2'>
          Projects
        </Link>
        <Link to='/contact' onClick={closeMenu} className='block hover:bg-[#1ABC9C] rounded-3xl hover:text-white transition duration-300 px-4 py-2'>
          Contact
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
