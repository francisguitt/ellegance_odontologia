// "use client";
// import { Link } from 'react-scroll';
// import Image from 'next/image';
// import logo from "@/images/logo_odonto.jpg";
// const Header = () => {
//   return (
//     <header className="fixed w-full bg-white shadow-md z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="logo">
//           <Image
//           src={logo}
//             alt="Ellegance Dental" 
//             className=" w-36 h-36" />
//         </div> 

//         <nav className="hidden md:flex space-x-6">
//           <Link to="home" smooth={true} className="cursor-pointer">Home</Link>
//           <Link to="about" smooth={true} className="cursor-pointer">Quem Somos</Link>
//           <Link to="services" smooth={true} className="cursor-pointer">Serviços</Link>
//           <Link to="team" smooth={true} className="cursor-pointer">Equipe</Link>
//           <Link to="contact" smooth={true} className="cursor-pointer">Contato</Link>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded">
//             Agente Online
//           </button>
//         </nav>

//         <button className="md:hidden">
//           {/* Mobile menu button */}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";
import { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import logo from "@/images/logo_odonto.jpg";
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
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="logo"> H
          <Image
            src={logo}
            alt="Ellegance Dental"
            className="w-36 h-36"
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
