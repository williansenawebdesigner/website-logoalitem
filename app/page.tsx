import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'

export default function Home() {
  const praticidadeItems = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: 'Compromisso com as pessoas',
      description: 'Atendemos às necessidades do transportador com ética, respeito e compreensão.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
      title: 'Qualidade no serviço',
      description: 'Garantimos que nossos serviços sejam prestados com excelência, valorizando o esforço de quem trabalha na estrada.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Parcerias confiáveis',
      description: 'Trabalhamos com colaboradores, sócios e investidores que compartilhem nossos valores e propósitos.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v8"/>
          <path d="M12 18h.01"/>
        </svg>
      ),
      title: 'Transparência',
      description: 'Comunicamos com clareza nossas decisões, atividades e resultados, sejam eles positivos ou negativos.'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Simplificando a
                <span className="text-[#1E4C9A] block">Vida do Transportador</span>
                em cada jornada.
              </h1>
              <p className="text-gray-600 text-lg max-w-xl">
                Tudo o que você precisa em um só lugar: desde cálculo de frete e assessoria jurídica até reboques e parcerias que garantam mais eficiência e segurança.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <button className="bg-[#1E4C9A] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-300 text-lg">
                  Nossos Serviços
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <div className="flex items-center gap-8">
                  <div className="flex -space-x-7">
                    <Image src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=100&h=100&fit=crop" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                    <Image src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=100&h=100&fit=crop" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                    <Image src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=100&h=100&fit=crop" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#1E4C9A]">13+</div>
                    <div className="text-sm text-gray-600 leading-4">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2340&h=2340&fit=crop" 
                alt="Transporte de Carga" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#EEF5FF] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Suporte 24h</div>
                    <div className="text-sm text-gray-600">Sempre ao seu lado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2340&h=1316&fit=crop" 
              alt="Nossa História" 
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#1E4C9A] text-white p-4 lg:p-6 rounded-xl shadow-lg">
              <div className="text-2xl lg:text-3xl font-bold">2010</div>
              <div className="text-sm">Ano de Fundação</div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Quem somos</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                A Logo Ali Tem foi criada em 2010 com o objetivo de atender as necessidades dos motoristas, oferecendo serviços voltados para transporte, troca de óleo e venda de peças.
              </p>
              <p className="text-gray-600 text-lg">
                Com o tempo, percebemos que os desafios das estradas exigiam soluções mais completas, especialmente para motoristas que lidam com cargas pesadas. Por isso, em 2023, ampliamos nossa atuação e nos tornamos uma plataforma dedicada a oferecer suporte completo aos motoristas em geral.
              </p>
              <p className="text-gray-600 text-lg">
                Hoje, somos muito mais do que uma empresa: somos parceiros dos motoristas, prontos para atender desde pequenas demandas até operações complexas de transporte, sempre com foco na eficiência, segurança e facilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos serviços */}
      <section className="bg-[#1E4C9A] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-4xl font-bold text-center mb-4 text-gray-100">
            Tudo em só lugar<br />
            para te atender!
          </h2>
          <p className="text-center mb-16 text-white/70 max-w-3xl mx-auto text-lg">
            Na Logo Ali Tem, oferecemos uma gama de serviços pensados para facilitar a vida dos motoristas e garantir o melhor suporte possível.
          </p>
          
          <div className="space-y-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100">Reboque 24h</h3>
                <p className="text-white/70 text-lg">
                  Atendimento rápido e seguro para resolver emergências na estrada, garantindo que você e seu veículo estejam protegidos em qualquer situação.
                </p>
                <button className="bg-white text-[#1E4C9A] px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition duration-300">
                  Solicitar reboque
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2340&h=1316&fit=crop" 
                  alt="Serviço de Reboque"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100">Muque</h3>
                <p className="text-white/70 text-lg">
                  Serviço especializado para movimentar e transportar cargas pesadas e equipamentos, atendendo às demandas de quem lida com materiais de grande porte.
                </p>
                <button className="bg-white text-[#1E4C9A] px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition duration-300">
                  Solicitar muque
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2340&h=1316&fit=crop" 
                  alt="Serviço de Muque"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100">Cálculo de Estadia e Frete</h3>
                <p className="text-white/70 text-lg">
                  Ferramentas que ajudam a calcular custos, facilitando o planejamento financeiro e garantindo mais controle nas suas operações.
                </p>
                <button className="bg-white text-[#1E4C9A] px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition duration-300">
                  Calcular agora
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2340&h=1316&fit=crop" 
                  alt="Cálculo de Frete"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100">Assessoria Jurídica</h3>
                <p className="text-white/70 text-lg">
                  Suporte completo para motoristas em questões legais, oferecendo segurança e orientação em casos relacionados ao transporte e aos seus direitos.
                </p>
                <button className="bg-white text-[#1E4C9A] px-8 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition duration-300">
                  Consultar assessoria
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]">
                <Image 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&h=1316&fit=crop" 
                  alt="Assessoria Jurídica"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Image src="/images/footer/logoalitem-logofundoescuro.svg" alt="Logo Ali Tem" width={292} height={30} className="mb-5" />
              <p className="text-gray-400">
                Simplificando a vida do transportador desde 2010.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-300">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Início</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Sobre nós</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Serviços</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Contato</Link></li>
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
    </main>
  )
}
