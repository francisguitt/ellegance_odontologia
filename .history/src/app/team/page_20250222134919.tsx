
import Image 
const Team = () => {
    const team = [
        {
            name: 'Dra. Ana Silva',
            role: 'Ortodontista',
            image: '/team/ana.jpg',
            description: 'Especialista em ortodontia com 10 anos de experiência'
        },
        {
            name: 'Dra. Ana Silva',
            role: 'Ortodontista',
            image: '/team/ana.jpg',
            description: 'Especialista em ortodontia com 10 anos de experiência'
        },
        {
            name: 'Dra. Ana Silva',
            role: 'Ortodontista',
            image: '/team/ana.jpg',
            description: 'Especialista em ortodontia com 10 anos de experiência'
        },
        // Add more team members
    ];

    return (
        <section id="team" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-blue-500 mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
