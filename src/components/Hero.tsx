import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="início" className="relative pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Mãe com criança em consulta auditiva" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-pink-600/60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Especializado em Diagnóstico Auditivo Infantil Precoce
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Ambiente lúdico, acolhedor e com acessibilidade total para o conforto do seu filho
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#agendar" 
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Agendar Agora
            </a>
            
            <a 
              href="https://wa.me/556139991616" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              <MessageCircle size={20} className="mr-2" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
