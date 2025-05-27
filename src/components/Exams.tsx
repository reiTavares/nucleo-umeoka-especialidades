import React from 'react';

interface ExamCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ExamCard: React.FC<ExamCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Exams: React.FC = () => {
  const exams = [
    {
      title: "Audiometria Infantil",
      description: "Avaliação da capacidade auditiva em crianças utilizando técnicas lúdicas adaptadas à idade",
      imageSrc: "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Treinamento Auditivo",
      description: "Terapia em cabine acústica para desenvolvimento de habilidades auditivas em crianças",
      imageSrc: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Teste da Orelhinha",
      description: "Exame para detecção precoce de problemas auditivos em recém-nascidos",
      imageSrc: "https://images.pexels.com/photos/4473654/pexels-photo-4473654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "BERA/PEATE Noturno",
      description: "Avaliação dos potenciais evocados auditivos para detecção de alterações nas vias auditivas",
      imageSrc: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Processamento Auditivo Central",
      description: "Avaliação das habilidades auditivas centrais para identificar problemas de processamento",
      imageSrc: "https://images.pexels.com/photos/5853492/pexels-photo-5853492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Terapia de Processamento",
      description: "Intervenção terapêutica para melhorar as habilidades de processamento auditivo",
      imageSrc: "https://images.pexels.com/photos/8436564/pexels-photo-8436564.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "P300",
      description: "Avaliação dos potenciais cognitivos relacionados a eventos auditivos",
      imageSrc: "https://images.pexels.com/photos/5487367/pexels-photo-5487367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Audiometria de Estado Estável",
      description: "Exame objetivo para avaliação dos limiares auditivos em diferentes frequências",
      imageSrc: "https://images.pexels.com/photos/3845609/pexels-photo-3845609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ];

  return (
    <section id="exames" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Exames Realizados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Diagnósticos precisos com tecnologia de ponta e abordagem humanizada para todas as idades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <ExamCard 
              key={index}
              title={exam.title}
              description={exam.description}
              imageSrc={exam.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exams;