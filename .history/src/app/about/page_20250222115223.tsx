const AboutUs = () => {
    return (
      <section id="about" className="py-20  bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Quem Somos</h2>
              <p className="text-gray-600 leading-relaxed">
                A Clínica Ellegance é referência em odontologia há mais de 15 anos.
                Nossa missão é proporcionar saúde bucal e sorrisos confiantes através
                de tratamentos modernos e humanizados.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-500">15+</span>
                  <span className="text-gray-600">Anos de Experiência</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-blue-500">5000+</span>
                  <span className="text-gray-600">Pacientes Atendidos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/about-image.jpg"
                alt="Nossa Clínica"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  