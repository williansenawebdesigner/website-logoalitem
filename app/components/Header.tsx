'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedButton from './AnimatedButton'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-42">
          <Link href="/">
            <Image 
              src="/images/hero/logoalitem-logofundoclaro.svg" 
              alt="Logo Ali Tem" 
              width={292} 
              height={30} 
              priority 
              className="w-auto h-8" 
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-[#1E4C9A] transition">Início</Link>
          <Link
            href="/#servicos"
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Reboques
          </Link>
          <Link 
            href="/#munck" 
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Munck
          </Link>
          <Link 
            href="/#acessoria" 
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Assessoria Jurídica
          </Link>
          <Link 
            href="/#calculo" 
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Calculo de Frete
          </Link>
          <Link 
            href="/#antt" 
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Serviços ANTT
          </Link>
          <Link 
            href="/#sobre" 
            className="text-gray-600 hover:text-[#1E4C9A] transition duration-300"
          >
            Sobre nós
          </Link>
          <Link href="/contato" className="text-gray-700 hover:text-[#1E4C9A] transition">Contato</Link>
        </nav>
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
      </div>
    </header>
  )
} 