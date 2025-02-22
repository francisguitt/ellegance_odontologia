const Services = () => {
    const services = [
      {
        title: 'Exames de Rotina',
        description: 'Avaliação completa da saúde bucal com equipamentos modernos e profissionais qualificados. Realizamos diagnóstico preventivo, radiografias digitais e limpeza profissional. Nosso objetivo é garantir um sorriso saudável através de check-ups regulares e cuidados personalizados.',
        icon: '🦷'
      },
      {
        title: 'Higiene Dental',
        description: 'Cuidados essenciais para manter seu sorriso radiante e saudável. Nossa equipe oferece limpeza profissional, remoção de tártaro e orientações personalizadas sobre técnicas corretas de escovação e uso do fio dental. Mantenha sua saúde bucal em dia com nossos tratamentos preventivos.',
        icon: '✨'
      },
      {
        title: 'Branqueamento Dental',
        description: 'Transforme seu sorriso com nosso tratamento de clareamento dental profissional. Utilizamos técnicas avançadas e produtos de alta qualidade para resultados naturais e duradouros. Um procedimento seguro e eficaz que devolve o brilho aos seus dentes, aumentando sua autoestima e confiança ao sorrir.',
        icon: '✨'
      },
      {
        title: 'Cuidados emergenciais',
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
  