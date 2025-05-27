import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Centro Auditivo Infantil</h3>
            <p className="mb-4 text-blue-200">
              Especialistas em diagnóstico auditivo infantil com abordagem humanizada e tecnologia de ponta.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>SGAS 915, Edifício Advance, Sala 260<br />Brasília - DF</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(61) 3772-0825</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Exames</h3>
            <ul className="space-y-2">
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">Audiometria Infantil</a></li>
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">Teste da Orelhinha</a></li>
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">BERA/PEATE</a></li>
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">Processamento Auditivo</a></li>
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">P300</a></li>
              <li><a href="#exames" className="text-blue-200 hover:text-white transition-colors">Ver todos os exames</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Centro Auditivo Infantil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;