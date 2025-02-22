'use client'
import { useState } from 'react'
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandWhatsapp, 
  IconMail,
  IconSend 
} from '@tabler/icons-react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Fique por dentro!
            </h3>
            <p className="mb-6 text-gray-300">
              Receba ofertas exclusivas e novidades direto no seu e-mail
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-6 py-4 rounded-full bg-gray-800 border-2 border-gray-700 
                           focus:border-pink-500 transition-all duration-300 outline-none
                           text-gray-100 pr-[120px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2
                           bg-gradient-to-r from-pink-500 to-purple-500 text-white
                           px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/25
                           transition-all duration-300 flex items-center gap-2"
                >
                  <span>Enviar</span>
                  <IconSend size={18} className="transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-gray-100">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+5511999999999" 
                 className="flex items-center gap-3 hover:text-pink-400 transition-colors">
                <span>📞</span> (11) 99999-9999
              </a>
              <a href="mailto:contato@vavadoces.com" 
                 className="flex items-center gap-3 hover:text-pink-400 transition-colors">
                <IconMail size={20} /> contato@vavadoces.com
              </a>
              <p className="flex items-center gap-3">
                <span>📍</span> Rua dos Doces, 123
              </p>
              <p className="pl-7">São Paulo - SP</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-100">Redes Sociais</h3>
            <div className="flex gap-6">
              <a href="https://facebook.com" 
                 className="hover:text-pink-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <IconBrandFacebook size={28} stroke={1.5} />
              </a>
              <a href="https://instagram.com" 
                 className="hover:text-pink-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <IconBrandInstagram size={28} stroke={1.5} />
              </a>
              <a href="https://wa.me/5511999999999" 
                 className="hover:text-pink-400 transition-colors p-2 hover:bg-gray-800 rounded-full">
                <IconBrandWhatsapp size={28} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-8">
              <a href="/politica-privacidade" 
                 className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="/termos-uso" 
                 className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="/cookies" 
                 className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Cookies
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Vava Doces. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
