import React from 'react';

const Insurance: React.FC = () => {
  const insurancePartners = [
    "AFEB BRASAL", "AFFEGO", "ANAF SAÚDE", "ASETE (ASTE)", "BACEN", "CAESAN", 
    "CARE PLUS", "CASEC (CODEVASF)", "CASEMBRAPA", "CNTI", "CONAB", "EMBRATEL", 
    "FAPES (BNDES)", "FASCAL", "GDF SAÚDE", "LIFE EMPRESARIAL", "LUMINAR SAÚDE (EVIDA)", 
    "OMINT SAÚDE", "PF SAÚDE (POLÍCIA FEDERAL)", "PLAN ASSISTE (MPU)", "PLAS/JMU (STM)", 
    "PMDF", "POSTAL SAÚDE (ECT)", "PROASA", "PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)", 
    "PRÓ-SAÚDE (TJDFT)", "PRÓ-SER (STJ)", "PRÓ-SOCIAL (TRF)", 
    "REAL GRANDEZA (DEMAIS PLANOS)", "REAL GRANDEZA (SALVUS E SALUTEM)", "SAÚDE CAIXA", 
    "SERPRO", "SIS SENADO", "STF-MED (STF)", "TRE SAÚDE", "TRT SAÚDE", "TST SAÚDE", "UNAFISCO"
  ].sort();

  // Group insurances by first letter
  const groupedInsurances = insurancePartners.reduce((acc, insurance) => {
    const firstLetter = insurance[0];
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(insurance);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section id="convênios" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Convênios Atendidos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais planos de saúde do DF na modalidade reembolso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedInsurances).map(([letter, insurances]) => (
            <div key={letter} className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">{letter}</h3>
              <ul className="space-y-2">
                {insurances.map((insurance, index) => (
                  <li key={index} className="text-gray-700">{insurance}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;