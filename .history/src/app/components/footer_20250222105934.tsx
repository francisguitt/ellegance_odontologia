'use client'
import { useState } from 'react'
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandWhatsapp, 
  IconMail 
} from '@tabler/icons-react'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gray-900 text-white pt-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Receba nossas novidades e promoções</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Assinar
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+5511999999999" className="hover:text-pink-400">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@vavadoces.com" className="hover:text-pink-400">
                  contato@ellegance.com
                </a>
              </li>
              <li>Rua dos Doces, 123</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-400 transition">
                <IconBrandFacebook size={28} stroke={1.5} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-400 transition">
                <IconBrandInstagram size={28} stroke={1.5} />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"
                className="hover:text-pink-400 transition">
                <IconBrandWhatsapp size={28} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="/politica-privacidade" className="hover:text-pink-400 transition">
                Política de Privacidade
              </a>
              <a href="/termos-uso" className="hover:text-pink-400 transition">
                Termos de Uso
              </a>
              <a href="/cookies" className="hover:text-pink-400 transition">
                Cookies
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Vava Doces. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;