const Services = () => {
  const services = [
    {
      title: 'Exames de Rotina',
      description: 'Avaliação completa da saúde bucal com tecnologia avançada e profissionais especializados. Nossa análise inclui:

• Diagnóstico preventivo com radiografias digitais
• Detecção precoce de cáries e problemas gengivais
• Avaliação da articulação temporomandibular(ATM)
• Análise da oclusão e alinhamento dentário
• Verificação de restaurações e próteses existentes
• Exame de tecidos moles para prevenção de lesões
• Limpeza profissional e remoção de tártaro
• Orientação personalizada de higiene bucal
• Planejamento de tratamentos necessários
• Documentação fotográfica do caso

Nossos exames são realizados com equipamentos de última geração, garantindo precisão no diagnóstico e maior conforto para nossos pacientes.Recomendamos check - ups a cada 6 meses para manter sua saúde bucal em dia.',
icon: '🦷'
      },
{
  title: 'Higiene Dental',
    description: 'Limpeza profissional e prevenção',
      icon: '✨'
},
{
  title: 'Higiene Dental',
    description: 'Limpeza profissional e prevenção',
      icon: '✨'
},
{
  title: 'Higiene Dental',
    description: 'Limpeza profissional e prevenção',
      icon: '✨'
},
{
  title: 'Higiene Dental',
    description: 'Limpeza profissional e prevenção',
      icon: '✨'
},
    ];

return (
  <section id="services" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{service.icon}</div>
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
