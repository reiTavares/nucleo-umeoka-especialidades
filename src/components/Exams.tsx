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
      imageSrc: "https://static.wixstatic.com/media/f9803e_18576185b14c4e0b94b2b2489f35b230~mv2.jpg/v1/crop/x_736,y_0,w_1080,h_1080/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/audiometria-infantil-.jpg"
    },
    {
      title: "P300",
      description: "Avaliação dos potenciais cognitivos relacionados a eventos auditivos",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_49229a92f7414be18e0fb50810d5ed7a~mv2.jpg/v1/crop/x_100,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/audiometria-bogota.jpg"
    },
    {
      title: "Processamento Auditivo Central",
      description: "Avaliação das habilidades auditivas centrais para identificar problemas de processamento",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_fc54f89eb2464d5ba5b3a5b86fbdc30f~mv2.jpg/v1/crop/x_219,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/binaural-Transtorno-do-Processamento-Auditivo--1024x576.jpg"
    },
    {
      title: "Teste da Orelhinha",
      description: "Exame para detecção precoce de problemas auditivos em recém-nascidos",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_396ec05d746d480fabd9365f282c32a2~mv2.jpg/v1/crop/x_45,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/teste-da-orelhinha.jpg"
    },
    {
      title: "Terapia de Processamento Auditivo",
      description: "Intervenção terapêutica para melhorar as habilidades de processamento auditivo",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_9322d2f8e40646618add50614f13570d~mv2.jpg/v1/crop/x_364,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/teste-de-audicao-em-criancas.jpg"
    },
    {
      title: "Audiometria de Estado Estável",
      description: "Exame objetivo para avaliação dos limiares auditivos em diferentes frequências",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_61e08e35a4d149708eacecdc242aa16b~mv2.jpg/v1/crop/x_101,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bera-infantil-1.jpg"
    },
    {
      title: "Treinamento Auditivo",
      description: "Terapia em cabine acústica para desenvolvimento de habilidades auditivas em crianças",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_49229a92f7414be18e0fb50810d5ed7a~mv2.jpg/v1/crop/x_100,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/audiometria-bogota.jpg"
    },

    {
      title: "BERA/PEATE Normal e Noturno",
      description: "Avaliação dos potenciais evocados auditivos para detecção de alterações nas vias auditivas",
      imageSrc: "https://static.wixstatic.com/media/7c7e48_e2ee3234e4ed4d4aa3e085ca2c5c2fe2~mv2.jpg/v1/crop/x_100,y_0,w_400,h_400/fill/w_315,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/eclipse_screening_.jpg"
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
        <div className="text-center mt-12">
          <a href="#agendamento" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
            Agendar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Exams;
