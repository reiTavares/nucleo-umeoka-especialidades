import React from 'react';
import { UserCheck, Volume2, ShieldCheck, Clock } from 'lucide-react';

interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DifferentialItem: React.FC<DifferentialProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: <UserCheck size={48} />,
      title: 'Profissionais especializados',
      description: 'Equipe com formação especializada em audiologia pediátrica e experiência comprovada'
    },
    {
      icon: <Volume2 size={48} />,
      title: 'Ambiente acusticamente tratado',
      description: 'Salas projetadas com isolamento acústico para garantir a precisão dos exames'
    },
    {
      icon: <ShieldCheck size={48} />,
      title: 'Exames auditivos em sala segura',
      description: 'Ambiente preparado para oferecer segurança e conforto durante todos os procedimentos'
    },
    {
      icon: <Clock size={48} />,
      title: 'Atendimento pontual',
      description: 'Respeitamos seu tempo com horários marcados e cumpridos rigorosamente'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Diferenciais da Nossa Clínica</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um ambiente especializado e acolhedor para o diagnóstico auditivo de bebês e crianças
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <DifferentialItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;