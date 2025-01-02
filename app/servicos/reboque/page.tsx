import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Reboque() {
  const beneficios = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Atendimento 24h",
      descricao: "Suporte disponível todos os dias, a qualquer hora"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titulo: "Resposta Rápida",
      descricao: "Equipe preparada para atender emergências com agilidade"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Segurança",
      descricao: "Equipamentos modernos e profissionais capacitados"
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
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#1E4C9A]">Início</Link>
                <span>/</span>
                <Link href="#" className="hover:text-[#1E4C9A]">Serviços</Link>
                <span>/</span>
                <span className="text-[#1E4C9A]">Reboque</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Serviço de Reboque
                <span className="text-[#1E4C9A] block">24 horas</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Oferecemos serviço de reboque profissional e confiável para garantir sua segurança e tranquilidade nas estradas. Nossa equipe está sempre pronta para atender suas necessidades com rapidez e eficiência.
              </p>
              <button className="bg-[#1E4C9A] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition duration-300 text-lg">
                Solicitar Agora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2340&h=2340&fit=crop" 
                alt="Serviço de Reboque" 
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

      {/* CTA */}
      <section className="py-16 bg-[#1E4C9A] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de ajuda?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Nossa equipe está disponível 24 horas por dia, 7 dias por semana para atender suas emergências.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/contato" 
              className="bg-white text-[#1E4C9A] px-8 py-4 rounded-full hover:shadow-lg transition duration-300 font-medium inline-flex items-center gap-2"
            >
              Entrar em Contato
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="text-lg">
              ou ligue para <span className="font-bold">(11) 9999-9999</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 