import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

export default function Contato() {
  const depoimentos = [
    {
      nome: "João Silva",
      cargo: "Transportador Autônomo",
      texto: "A Logo Ali Tem transformou minha experiência nas estradas. O suporte 24h deles já me ajudou em momentos cruciais.",
      imagem: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=100&h=100&fit=crop"
    },
    {
      nome: "Maria Santos",
      cargo: "Gestora de Frota",
      texto: "Desde que começamos a usar os serviços de cálculo de frete, nossa operação ficou muito mais eficiente e lucrativa.",
      imagem: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&fit=crop"
    }
  ]

  const estatisticas = [
    {
      numero: "13+",
      texto: "Anos de Experiência"
    },
    {
      numero: "5000+",
      texto: "Clientes Atendidos"
    },
    {
      numero: "24/7",
      texto: "Suporte Disponível"
    },
    {
      numero: "98%",
      texto: "Satisfação dos Clientes"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Header com breadcrumb */}
      <div className="bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF] py-12 pt-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-[#1E4C9A]">Início</Link>
            <span>/</span>
            <span className="text-[#1E4C9A]">Contato</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Estamos aqui para ajudar. Entre em contato conosco e descubra como podemos tornar sua jornada mais segura e eficiente.
          </p>
        </div>
      </div>

      {/* Seção principal com formulário e informações */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Formulário */}
            <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua mensagem</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4C9A] focus:border-transparent transition"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4C9A] focus:border-transparent transition"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4C9A] focus:border-transparent transition"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E4C9A] focus:border-transparent transition"
                    placeholder="Descreva sua necessidade em detalhes"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1E4C9A] text-white py-4 rounded-lg hover:bg-[#1a4185] transition duration-300 font-medium"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de contato */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-[#1E4C9A] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="text-white/80">(11) 9999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-white/80">contato@logoalitem.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Localização</div>
                      <div className="text-white/80">São Paulo, SP</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#EEF5FF] p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p className="font-medium text-[#1E4C9A]">Suporte 24h disponível para emergências</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="bg-[#1E4C9A] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.numero}</div>
                <div className="text-white/80">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={depoimento.imagem}
                    alt={depoimento.nome}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-gray-800">{depoimento.nome}</div>
                    <div className="text-gray-600">{depoimento.cargo}</div>
                  </div>
                </div>
                <p className="text-gray-600">{depoimento.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Pronto para começar?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de transportadores que já confiam na Logo Ali Tem para suas necessidades diárias.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#1E4C9A] text-white px-8 py-4 rounded-full hover:bg-[#1a4185] transition duration-300"
          >
            Comece Agora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
} 