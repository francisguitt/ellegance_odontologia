const Testimonials = () => {
    const testimonials = [
        {
            name: 'Maria Santos',
            comment: 'Excelente atendimento! Muito satisfeita com o resultado do meu tratamento.',
            rating: 5
        },
        {
            name: 'Maria Santos',
            comment: 'Excelente atendimento! Muito satisfeita com o resultado do meu tratamento.',
            rating: 5
        },
        {
            name: 'Maria Santos',
            comment: 'Excelente atendimento! Muito satisfeita com o resultado do meu tratamento.',
            rating: 5
        },
        {
            name: 'Maria Santos',
            comment: 'Excelente atendimento! Muito satisfeita com o resultado do meu tratamento.',
            rating: 5
        },
        // Add more testimonials
    ];

    return (
        <section className="py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/testimonials-bg.jpg)' }}>
            <div className="container mx-auto px-4">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-center mb-12">Depoimentos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                                <p className="font-semibold">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
