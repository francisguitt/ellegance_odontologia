

"use client";
import { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from "@/images/logo_odonto.png";
import { IconMenu2, IconX } from '@tabler/icons-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "Quem Somos" },
    { to: "services", label: "Serviços" },
    { to: "team", label: "Equipe" },
    { to: "contact", label: "Contato" },
  ];

  return (
    <header className="fixed w-full  shadow-md z-50 bg-[var(--primary-color)]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-center">
        <div className="logo"> 
          <Image
            src={logo}
            alt="Ellegance Dental"
            className="w-32 h-32 text-co"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Agente Online
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-500 transition-colors"
        >
          {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`
        md:hidden bg-white 
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        overflow-hidden
      `}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              className="cursor-pointer hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
            Agente Online
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;