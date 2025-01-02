import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AssessoriaJuridica() {
  const beneficios = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      titulo: "Suporte Legal Completo",
      descricao: "Orientação jurídica especializada no setor de transportes"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      titulo: "Documentação",
      descricao: "Auxílio com contratos, documentos e processos legais"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Prevenção de Riscos",
      descricao: "Análise preventiva para evitar problemas jurídicos"
    }
  ]

  const servicos = [
    "Análise e elaboração de contratos",
    "Defesa em processos administrativos",
    "Consultoria em direito do transporte",
    "Regularização de documentação",
    "Defesa em multas e infrações",
    "Cobranças e negociações"
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
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#1E4C9A]">Início</Link>
                <span>/</span>
                <Link href="#" className="hover:text-[#1E4C9A]">Serviços</Link>
                <span>/</span>
                <span className="text-[#1E4C9A]">Assessoria Jurídica</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Assessoria Jurídica
                <span className="text-[#1E4C9A] block">Especializada</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Oferecemos suporte jurídico completo para profissionais do transporte, garantindo seus direitos e a segurança legal das suas operações.
              </p>
              <Link 
                href="/contato" 
                className="bg-[#1E4C9A] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-300 text-lg w-fit"
              >
                Consultar Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&h=1316&fit=crop" 
                alt="Assessoria Jurídica" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="bg-[#EEF5FF] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{beneficio.titulo}</h3>
                <p className="text-gray-600">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-[#1E4C9A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Nossos Serviços</h2>
              <p className="text-white/80 text-lg">
                Oferecemos uma ampla gama de serviços jurídicos especializados para atender todas as necessidades do setor de transportes.
              </p>
              <ul className="space-y-4">
                {servicos.map((servico, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{servico}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Por que nos escolher?</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nossa equipe jurídica possui ampla experiência no setor de transportes, conhecendo profundamente as particularidades e desafios da área.
                </p>
                <p>
                  Oferecemos atendimento personalizado, analisando cada caso com atenção aos detalhes e buscando sempre a melhor solução para nossos clientes.
                </p>
                <p>
                  Mantemos nossos clientes informados sobre seus direitos e deveres, ajudando a prevenir problemas e garantir a conformidade legal das operações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Precisa de orientação jurídica?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Entre em contato conosco e agende uma consulta com nossa equipe especializada.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/contato" 
              className="bg-[#1E4C9A] text-white px-8 py-4 rounded-full hover:shadow-lg transition duration-300 font-medium inline-flex items-center gap-2"
            >
              Agendar Consulta
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contato"
              className="text-[#1E4C9A] hover:underline"
            >
              Saiba mais sobre nossos serviços
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 