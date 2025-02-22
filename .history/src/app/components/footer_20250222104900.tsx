'use client'
import { useState } from 'react'
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandWhatsapp, 
  IconMail,
  IconArrowRight 
} from '@tabler/icons-react'

export function Footer() {
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Newsletter Section with new design */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Receba Nossas Novidades
          </h3>
          <p className="text-gray-300 mb-8">
            Inscreva-se para receber ofertas exclusivas e as últimas novidades
          </p>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className={`
              relative rounded-full p-1
              bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500
              transition-all duration-300
              ${isFocused ? 'scale-[1.02] shadow-lg shadow-pink-500/20' : ''}
            `}>
              <div className="relative flex items-center bg-gray-900 rounded-full">
                <IconMail 
                  size={20} 
                  className="absolute left-4 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Digite seu melhor email..."
                  className="w-full bg-transparent pl-12 pr-36 py-4 text-gray-100 
                           placeholder-gray-500 focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2
                           bg-gradient-to-r from-pink-500 to-purple-500
                           text-white px-6 py-2.5 rounded-full
                           flex items-center gap-2 group
                           hover:shadow-lg hover:shadow-pink-500/20
                           transition-all duration-300"
                >
                  <span>Inscrever</span>
                  <IconArrowRight 
                    size={18} 
                    className="transform transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Rest of the footer content remains the same */}
        {/* ... */}
      </div>
    </footer>
  )
}

export 


