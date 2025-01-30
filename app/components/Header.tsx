'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from './AnimatedButton'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="w-42">
            <Link href="/">
              <Image 
                src="/images/hero/logoalitem-logofundoclaro.svg" 
                alt="Logo Ali Tem" 
                width={292} 
                height={30} 
                priority 
                className="w-auto h-7" 
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-[#1E4C9A] transition">
              Início
            </Link>
            <Link
              href="#calculo"
              className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
            >
              Calculo de estadia
            </Link>
            <Link 
              href="/#servicos" 
              className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
            >
              Serviços
            </Link>
            <Link 
              href="/servicos/antt" 
              className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
            >
              ANTT
            </Link>
            <Link 
              href="/#sobre" 
              className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
            >
              Sobre nós
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#1E4C9A] transition">
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Botão de Login */}
            <AnimatedButton 
              href="https://www.logoalitem.com.br/user/login" 
              variant="primary"
              className="text-sm py-2.5 px-6"
              showArrow={false}
            >
              <div className="flex items-center gap-2">
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                </svg>
                <span>Login</span>
              </div>
            </AnimatedButton>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#1E4C9A] transition"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          style={{
            top: '88px',
            height: isMenuOpen ? 'calc(100vh - 88px)' : '0',
          }}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="https://www.logoalitem.com.br/calcula-estadia/"
              className="text-gray-600 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculo de estadia
            </Link>
            <Link
              href="/#servicos"
              className="text-gray-600 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/servicos/antt"
              className="text-gray-600 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              ANTT
            </Link>
            <Link
              href="/#sobre"
              className="text-gray-600 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nós
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-[#1E4C9A] transition py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}