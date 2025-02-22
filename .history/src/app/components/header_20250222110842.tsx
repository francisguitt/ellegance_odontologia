"use client";
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from "@/images/logo_odonto.jpg";
const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo">
          <Image
          src={logo}
        
            alt="Ellegance Dental" 
            className=" w-36 h-36" />
        </div> 

        <nav className="hidden md:flex space-x-6">
          <Link to="home" smooth={true} className="cursor-pointer">Home</Link>
          <Link to="about" smooth={true} className="cursor-pointer">Quem Somos</Link>
          <Link to="services" smooth={true} className="cursor-pointer">Serviços</Link>
          <Link to="team" smooth={true} className="cursor-pointer">Equipe</Link>
          <Link to="contact" smooth={true} className="cursor-pointer">Contato</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Agente Online
          </button>
        </nav>

        <button className="md:hidden">
          {/* Mobile menu button */}
        </button>
      </div>
    </header>
  );
};

export default Header;
