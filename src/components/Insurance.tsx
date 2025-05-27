import React from 'react';

const Insurance: React.FC = () => {
  const insurancePartners = [
    { name: "ASTE", logo: "https://via.placeholder.com/150x80?text=ASTE" },
    { name: "AFFEGO", logo: "https://via.placeholder.com/150x80?text=AFFEGO" },
    { name: "FASCAL", logo: "https://via.placeholder.com/150x80?text=FASCAL" },
    { name: "PROASA", logo: "https://via.placeholder.com/150x80?text=PROASA" },
    { name: "TST Saúde", logo: "https://via.placeholder.com/150x80?text=TST+Saúde" }
  ];

  return (
    <section id="convênios" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Convênios Atendidos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais planos de saúde para facilitar seu atendimento
          </p>
          <div className="inline-block mt-3 px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
            Somente para exames
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {insurancePartners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={partner.logo} 
                alt={`Logo ${partner.name}`} 
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;