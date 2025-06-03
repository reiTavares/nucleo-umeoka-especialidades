import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* ... (rest of the header content) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ... (navigation links) */}

            <a
              href="#agendamento"
              className={`flex items-center font-medium ${
                isScrolled ? 'text-pink-600' : 'text-white'
              }`}
            >
              <Phone size={18} className="mr-2" />
              (61) 3999-1616
            </a>
          </div>

          {/* ... (mobile menu button) */}
        </div>
      </div>
      
      {/* ... (mobile menu content) */}
        <li>
          <a
            href="#agendamento"
            className="flex items-center py-2 text-pink-600 font-medium"
          >
            <Phone size={18} className="mr-2" />
            (61) 3999-1616
          </a>
        </li>
      {/* ... (rest of the mobile menu content) */}
    </header>
  );
};

export default Header;
