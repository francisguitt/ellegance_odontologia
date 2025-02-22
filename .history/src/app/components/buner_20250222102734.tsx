'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function Bunner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: 'https://img.freepik.com/fotos-gratis/paciente-do-sexo-feminino-fazendo-procedimento-no-dentista_23-2148985791.jpg?uid=R158697381&ga=GA1.1.2111296288.1739707750&semt=ais_hybrid',
            title: 'TRATAMENTO ODONTOLÓGICO',
            subtitle: 'Cuidados profissionais para seu sorriso'
        },
        {
            image: '/',
            title: 'ESTÉTICA DENTAL',
            subtitle: 'Transforme seu sorriso'
        },
        {
            image: '',
            title: 'CUIDADOS EMERGENCIAIS',
            subtitle: 'Atendimento imediato quando você precisa'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-1000 
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 tracking-wider">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-center">
                            {slide.subtitle}
                        </p>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all 
              ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    )
}
export default Bunner;