// const Services = () => {
//     const services = [
//       {
//         title: 'Exames de Rotina',
//         description: 'Avaliação completa da saúde bucal com equipamentos modernos e profissionais qualificados. Realizamos diagnóstico preventivo, radiografias digitais e limpeza profissional. Nosso objetivo é garantir um sorriso saudável através de check-ups regulares e cuidados personalizados.',
//         icon: '🦷'
//       },
//       {
//         title: 'Higiene Dental',
//         description: 'Cuidados essenciais para manter seu sorriso radiante e saudável. Nossa equipe oferece limpeza profissional, remoção de tártaro e orientações personalizadas sobre técnicas corretas de escovação e uso do fio dental. Mantenha sua saúde bucal em dia com nossos tratamentos preventivos.',
//         icon: '✨'
//       },
//       {
//         title: 'Branqueamento Dental',
//         description: 'Transforme seu sorriso com nosso tratamento de clareamento dental profissional. Utilizamos técnicas avançadas e produtos de alta qualidade para resultados naturais e duradouros. Um procedimento seguro e eficaz que devolve o brilho aos seus dentes, aumentando sua autoestima e confiança ao sorrir.',
//         icon: '✨'
//       },
//       {
//         title: 'Cuidados Emergenciais',
//         description: 'Atendimento rápido e eficiente para alívio imediato da dor e resolução de problemas urgentes. Nossa equipe está preparada para emergências como traumas dentais, dores intensas, quebra de restaurações e abscessos. Conte com nossa estrutura moderna e profissionais experientes para cuidar do seu sorriso nos momentos mais necessários.',
//         icon: '✨'
//       },
//       {
//         title: 'Preenchimento Dentário',
//         description: 'Restaurações estéticas de alta qualidade para devolver a forma e função natural dos seus dentes. Utilizamos resinas modernas que se harmonizam perfeitamente com sua dentição, garantindo durabilidade e um resultado invisível. Um procedimento rápido e confortável para reparar cáries e danos estruturais.',
//         icon: '✨'
//       },
//     ];
  
//     return (
//       <section id="services" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Services;
  


import { 
  IconStethoscope, 
  IconSparkles, 
  IconBrightnessUp, 
  IconEmergencyBed, 
  IconToolsKitchen2 
} from '@tabler/icons-react';

const Services = () => {
  const services = [
    {
      title: 'Exames de Rotina',
      description: 'Avaliação completa da saúde bucal com equipamentos modernos e profissionais qualificados. Realizamos diagnóstico preventivo, radiografias digitais e limpeza profissional. Nosso objetivo é garantir um sorriso saudável através de check-ups regulares e cuidados personalizados.',
      icon: IconStethoscope
    },
    {
      title: 'Higiene Dental',
      description: 'Cuidados essenciais para manter seu sorriso radiante e saudável. Nossa equipe oferece limpeza profissional, remoção de tártaro e orientações personalizadas sobre técnicas corretas de escovação e uso do fio dental. Mantenha sua saúde bucal em dia com nossos tratamentos preventivos.',
      icon: IconSparkles
    },
    {
      title: 'Branqueamento Dental',
      description: 'Transforme seu sorriso com nosso tratamento de clareamento dental profissional. Utilizamos técnicas avançadas e produtos de alta qualidade para resultados naturais e duradouros. Um procedimento seguro e eficaz que devolve o brilho aos seus dentes, aumentando sua autoestima e confiança ao sorrir.',
      icon: IconBrightnessUp
    },
    {
      title: 'Cuidados Emergenciais',
      description: 'Atendimento rápido e eficiente para alívio imediato da dor e resolução de problemas urgentes. Nossa equipe está preparada para emergências como traumas dentais, dores intensas, quebra de restaurações e abscessos. Conte com nossa estrutura moderna e profissionais experientes para cuidar do seu sorriso nos momentos mais necessários.',
      icon: IconEmergency
    },
    {
      title: 'Preenchimento Dentário',
      description: 'Restaurações estéticas de alta qualidade para devolver a forma e função natural dos seus dentes. Utilizamos resinas modernas que se harmonizam perfeitamente com sua dentição, garantindo durabilidade e um resultado invisível. Um procedimento rápido e confortável para reparar cáries e danos estruturais.',
      icon: IconToolsKitchen2
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-blue-500 mb-4">
                <service.icon size={48} stroke={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
