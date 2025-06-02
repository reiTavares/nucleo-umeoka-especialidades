import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  childAge: string;
  examType: string;
  insurance: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    childAge: '',
    examType: '',
    insurance: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const examTypes = [
    "Audiometria Infantil",
    "Treinamento Auditivo",
    "Teste da Orelhinha",
    "BERA/PEATE Noturno",
    "Processamento Auditivo Central",
    "Terapia de Processamento",
    "P300",
    "Audiometria de Estado Estável",
    "Outro"
  ];

  const insuranceOptions = [
    "AFEB BRASAL", "AFFEGO", "ANAF SAÚDE", "ASETE (ASTE)", "BACEN", "CAESAN", 
    "CARE PLUS", "CASEC (CODEVASF)", "CASEMBRAPA", "CNTI", "CONAB", "EMBRATEL", 
    "FAPES (BNDES)", "FASCAL", "GDF SAÚDE", "LIFE EMPRESARIAL", "LUMINAR SAÚDE (EVIDA)", 
    "OMINT SAÚDE", "PF SAÚDE (POLÍCIA FEDERAL)", "PLAN ASSISTE (MPU)", "PLAS/JMU (STM)", 
    "PMDF", "POSTAL SAÚDE (ECT)", "PROASA", "PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)", 
    "PRÓ-SAÚDE (TJDFT)", "PRÓ-SER (STJ)", "PRÓ-SOCIAL (TRF)", 
    "REAL GRANDEZA (DEMAIS PLANOS)", "REAL GRANDEZA (SALVUS E SALUTEM)", "SAÚDE CAIXA", 
    "SERPRO", "SIS SENADO", "STF-MED (STF)", "TRE SAÚDE", "TRT SAÚDE", "TST SAÚDE", "UNAFISCO",
    "Outro",
    "Sem convênio"
  ].sort();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || 'Site';
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      const utmContent = urlParams.get('utm_content');
      const utmTerm = urlParams.get('utm_term');

      // Prepare data for webhook
      const webhookData = {
        ...formData,
        pageUrl: window.location.href,
        pageOrigin: window.location.origin,
        userAgent: navigator.userAgent,
        utmParams: {
          source: utmSource,
          medium: utmMedium,
          campaign: utmCampaign,
          content: utmContent,
          term: utmTerm
        }
      };

      // Send data to webhook
      await fetch('https://hook.profusaodigital.com/webhook/nocleo-umeoka', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      // Prepare WhatsApp message
      const whatsappMessage = `Olá, me chamo ${formData.name}, meu filho(a) tem ${formData.childAge}.

Gostaria de agendar um exame de ${formData.examType}, meu convênio é ${formData.insurance}.

Eu vim do ${utmSource} (${window.location.origin}).

Pode me fornecer mais informações?`;

      // Redirect to WhatsApp
      window.location.href = `https://wa.me/556139991616?text=${encodeURIComponent(whatsappMessage)}`;

    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="agendar" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-pink-600 p-8 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Agende seu Exame rapidamente no WhatsApp</h2>
              
              <p className="mb-6">
                Estamos prontos para atender você e seu filho com todo o cuidado e atenção que merecem.
                Preencha o formulário ao lado e entraremos em contato para confirmar seu agendamento.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Telefone</p>
                    <p>(61) 3999-1616</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Endereço</p>
                    <p>SGAS 915, Edifício Advance, Sala 260</p>
                    <p>Brasília - DF</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-green-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg\" width="64\" height="64\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Agendamento Enviado!</h3>
                  <p className="text-gray-600">
                    Redirecionando para o WhatsApp...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                      Idade da Criança
                    </label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Ex: 3 anos e 2 meses"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="examType" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Exame
                    </label>
                    <select
                      id="examType"
                      name="examType"
                      value={formData.examType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Selecione um exame</option>
                      {examTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                      Convênio
                    </label>
                    <select
                      id="insurance"
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Selecione um convênio</option>
                      {insuranceOptions.map((insurance, index) => (
                        <option key={index} value={insurance}>{insurance}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-green-400' 
                        : 'bg-green-500 hover:bg-green-600'
                    } text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                  >
                    <MessageCircle size={20} />
                    {isSubmitting ? 'Enviando...' : 'Agendar Consulta'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;