import React, { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

const Facility: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Recepção acolhedora da clínica"
    },
    {
      src: "https://images.pexels.com/photos/3662847/pexels-photo-3662847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Espaço kids para entretenimento das crianças"
    },
    {
      src: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Consultório especializado para exames auditivos"
    },
    {
      src: "https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Sala de audiometria infantil"
    }
  ];

  return (
    <section id="estrutura" className="py-16 bg-green-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Estrutura Física e Ambiente Humanizado
            </h2>
            
            <p className="text-gray-600 mb-6">
              Nossa clínica foi cuidadosamente projetada para proporcionar o máximo conforto e segurança 
              para as crianças e seus acompanhantes. Contamos com salas acusticamente tratadas, equipamentos 
              de última geração e um ambiente lúdico que ajuda a reduzir a ansiedade dos pequenos pacientes.
            </p>
            
            <p className="text-gray-600 mb-8">
              Desde a recepção até as salas de exame, cada detalhe foi pensado para tornar a experiência 
              o mais acolhedora possível, transformando o momento do diagnóstico em uma experiência positiva.
            </p>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Vídeo institucional da clínica" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <GalleryImage 
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Imagem ampliada" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Facility;