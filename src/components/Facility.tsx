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
      src: "/Prancheta 1site.webp",
      alt: "Recepção acolhedora da clínica"
    },
    {
      src: "/Prancheta 2site.webp",
      alt: "Espaço kids para entretenimento das crianças"
    },
    {
      src: "/Prancheta 3site.webp",
      alt: "Consultório especializado para exames auditivos"
    },
    {
      src: "/Prancheta 4site.webp",
      alt: "Sala de audiometria infantil"
    },
    {
      src: "/Prancheta 5site.webp",
      alt: "Ambiente lúdico e acolhedor"
    },
    {
      src: "/Prancheta 6site.webp",
      alt: "Espaço de atendimento"
    },
    {
      src: "/Prancheta 7site.webp",
      alt: "Área de espera"
    },
    {
      src: "/Prancheta 9site.webp",
      alt: "Sala de exames"
    },
    {
      src: "/Prancheta 10site.webp",
      alt: "Equipamentos modernos"
    },
    {
      src: "/Prancheta 11site.webp",
      alt: "Área de lazer infantil"
    },
    {
      src: "/Prancheta 12site.webp",
      alt: "Consultório principal"
    },
    {
      src: "/Prancheta 13site.webp",
      alt: "Recepção moderna"
    }
  ];

  return (
    <section id="estrutura" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Estrutura Física e Ambiente Humanizado
          </h2>
          
          <p className="text-gray-600 mb-8">
            Nossa clínica foi cuidadosamente projetada para proporcionar o máximo conforto e segurança 
            para as crianças e seus acompanhantes. Contamos com salas acusticamente tratadas, equipamentos 
            de última geração e um ambiente lúdico que ajuda a reduzir a ansiedade dos pequenos pacientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
