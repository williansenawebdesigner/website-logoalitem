import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image 
              src="/images/footer/logoalitem-logofundoescuro.svg" 
              alt="Logo Ali Tem" 
              width={292} 
              height={30} 
              className="mb-5" 
            />
            <p className="text-gray-400">
              Simplificando a vida do transportador desde 2010.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-300">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Início</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Sobre nós</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Serviços</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-300">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Reboque 24h</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Muque</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Cálculo de Frete</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition">Assessoria Jurídica</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-300">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@logoalitem.com.br</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Logo Ali Tem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 