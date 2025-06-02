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
          <div className="flex items-center">
            <svg 
              className="w-12 h-12 mr-3"
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0  0 531.89 335.99"
              xmlns="http://www.w3.org/2000/svg" 
              aria-label="Logo Núcleo Umeoka Especialidades"
            >
              <g>
                <path fill="#d282a6" d="M207.23 96.97c19.94 0 38.52 5.83 54.13 15.87-15.61 10.04-34.19 15.87-54.13 15.87s-38.52-5.83-54.13-15.87c15.61-10.04 34.19-15.87 54.13-15.87" />
                <path fill="#d282a6" d="M270.53 112.84c15.61-10.04 34.19-15.87 54.13-15.87s38.52 5.83 54.13 15.87c-15.61 10.04-34.19 15.87-54.13 15.87s-38.52-5.83-54.13-15.87" />
                <path fill="#d282a6" d="M265.94 108.26c-10.04-15.61-15.87-34.19-15.87-54.13S255.9 15.61 265.94 0c10.04 15.61 15.87 34.19 15.87 54.13s-5.83 38.52-15.87 54.13" />
              </g>
            </svg>
            <h1 className={`text-xl font-bold ${isScrolled ? 'text-pink-600' : 'text-white'}`}>
              Núcleo Umeoka Especialidades
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {['Início', 'Exames', 'Estrutura', 'Convênios', 'Contato'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className={`font-medium transition-colors hover:text-pink-500 ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <a 
              href="tel:+556139991616" 
              className={`flex items-center font-medium ${
                isScrolled ? 'text-pink-600' : 'text-white'
              }`}
            >
              <Phone size={18} className="mr-2" />
              (61) 3999-1616
            </a>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Início', 'Exames', 'Estrutura', 'Convênios', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 text-gray-800 font-medium hover:text-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="tel:+556139991616" 
                  className="flex items-center py-2 text-pink-600 font-medium"
                >
                  <Phone size={18} className="mr-2" />
                  (61) 3999-1616
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;