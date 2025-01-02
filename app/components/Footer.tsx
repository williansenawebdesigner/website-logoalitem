import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image 
              src="/images/footer/logoalitem-logofundoescuro.svg" 
              alt="Logo Ali Tem" 
              width={292} 
              height={30} 
              className="w-auto h-8" 
            />
            <p className="text-gray-400">
              Simplificando a vida do transportador em cada jornada.
            </p>
          </div>
          
          <div>
            <h3 className="text-white/70 text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#servicos" className="text-gray-400 hover:text-white transition">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-gray-400 hover:text-white transition">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/70 text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/reboque" className="text-gray-400 hover:text-white transition">
                  Reboque 24h
                </Link>
              </li>
              <li>
                <Link href="/servicos/munck" className="text-gray-400 hover:text-white transition">
                  Munck
                </Link>
              </li>
              <li>
                <Link href="/servicos/calculo-frete" className="text-gray-400 hover:text-white transition">
                  Cálculo de Frete
                </Link>
              </li>
              <li>
                <Link href="/servicos/assessoria-juridica" className="text-gray-400 hover:text-white transition">
                  Assessoria Jurídica
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/70 text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (31) 99204-9301
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@logoalitem.com.br
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  Rodovia Presidente Juscelino Kubitschek<br />
                  Esmeraldas - MG<br />
                  35740-000
                </div>
              </li>
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