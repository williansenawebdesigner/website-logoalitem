import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CalculoFrete() {
  const beneficios = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "100% Gratuito",
      descricao: "Ferramenta completa sem nenhum custo para você"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      titulo: "Cálculos Precisos",
      descricao: "Baseados na legislação e valores de mercado atualizados"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      titulo: "Dados Seguros",
      descricao: "Suas informações são protegidas e confidenciais"
    }
  ]

  const recursos = [
    "Cálculo de frete por km rodado",
    "Estadia conforme legislação",
    "Custos operacionais",
    "Pedágios e taxas",
    "Relatórios detalhados",
    "Histórico de cálculos"
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
                <span className="text-[#1E4C9A]">Cálculo de Frete</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Calcule seu Frete e
                <span className="text-[#1E4C9A] block">Estadia</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Ferramenta gratuita para calcular valores de frete e estadia de acordo com a legislação vigente. Tenha controle total dos seus custos e garanta uma remuneração justa.
              </p>
              <Link 
                href="/sistema" 
                className="bg-[#1E4C9A] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-300 text-lg w-fit"
              >
                Acessar Sistema
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2340&h=1316&fit=crop" 
                alt="Cálculo de Frete" 
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

      {/* Recursos */}
      <section className="py-16 bg-[#1E4C9A] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-white">Recursos da Ferramenta</h2>
              <p className="text-white/60 text-lg">
                Nossa calculadora oferece todos os recursos necessários para você ter o controle total dos seus custos e garantir uma remuneração justa pelo seu trabalho.
              </p>
              <ul className="space-y-4">
                {recursos.map((recurso, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{recurso}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Legislação</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  A Lei 13.103/2015 (Lei do Motorista) estabelece critérios para o cálculo do tempo de estadia, que deve ser considerado após 5 horas de espera nos casos de carga e descarga.
                </p>
                <p>
                  O valor da estadia é calculado com base no custo operacional do veículo, despesas com o motorista e lucro cessante pelo período em que o veículo ficar parado.
                </p>
                <p>
                  Nossa ferramenta considera todos esses aspectos para garantir que você receba o valor justo pelo seu trabalho.
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
            Comece a usar agora mesmo
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Acesse nossa ferramenta gratuita e tenha mais controle sobre seus ganhos.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="https://www.logoalitem.com.br/user/login"
              className="bg-[#1E4C9A] text-white hover:text-white px-8 py-4 rounded-full hover:shadow-lg transition duration-300 font-medium inline-flex items-center gap-2"
            >
              Acessar Sistema
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contato"
              className="text-[#1E4C9A] hover:underline"
            >
              Precisa de ajuda?
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 