import Image from 'next/image'
import Link from 'next/link'

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
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#1E4C9A] transition">Início</Link>
          <Link href="#" className="text-gray-700 hover:text-[#1E4C9A] transition">Soluções</Link>
          <Link href="#" className="text-gray-700 hover:text-[#1E4C9A] transition">Sobre nós</Link>
          <Link href="/contato" className="text-gray-700 hover:text-[#1E4C9A] transition">Contato</Link>
        </nav>
        <Link 
          href="/login" 
          className="bg-[#1E4C9A] text-white px-6 py-2.5 rounded-full hover:bg-[#1a4185] hover:text-white transition duration-300 shadow-lg hover:shadow-xl"
        >
          Login
        </Link>
      </div>
    </header>
  )
} 