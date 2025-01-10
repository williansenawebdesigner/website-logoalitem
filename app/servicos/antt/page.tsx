'use client'

import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import AnimatedSection from '../../components/AnimatedSection'
import AnimatedButton from '../../components/AnimatedButton'

export default function Antt() {
  const servicos = [
    {
      titulo: "Cadastro ANTT",
      descricao: "Agora você tem a oportunidade de fazer seu cadastro da ANTT com a menor taxa do mercado e receber seu certificado no mesmo dia.",
      imagem: "/images/services/img-cadastro.png",
      botao: "INICIAR CADASTRO",
      cor: "bg-emerald-600"
    },
    {
      titulo: "Renovação ANTT",
      descricao: "Sua ANTT está Vencida ou Suspensa? Aqui você poderá fazer sua renovação online no mesmo dia e com a menor taxa, sem precisar se locomover até um posto físico.",
      imagem: "/images/services/img-renovacao.png",
      botao: "INICIAR RENOVAÇÃO",
      cor: "bg-yellow-500"
    },
    {
      titulo: "Inclusão de Veículos",
      descricao: "Coloque um fim em seus problemas de carregamento. Inclua seu Veículo na ANTT no mesmo dia, sem burocracias e em poucos cliques.",
      imagem: "/images/services/img-inclusao.png",
      botao: "INICIAR INCLUSÃO",
      cor: "bg-indigo-600"
    },
    {
      titulo: "Alteração Cadastral",
      descricao: "Mantenha seus dados no registro atualizados para se manter regularizado. Receba sua extrato atualizado no mesmo dia.",
      imagem: "/images/services/img-alteracao.png",
      botao: "INICIAR ALTERAÇÃO",
      cor: "bg-gray-600"
    }
  ]

  const duvidas = [
    {
      pergunta: "O que é o RNTRC e por que eu preciso estar registrado?",
      resposta: "O Registro Nacional de Transportadores Rodoviários de Cargas (RNTRC) é um cadastro obrigatório para todos os transportadores que realizam transporte rodoviário remunerado de cargas no Brasil. Estar registrado é essencial para operar de forma legal e em conformidade com as normas da ANTT."
    },
    {
      pergunta: "Quanto tempo leva para sair a ANTT?",
      resposta: "Com nosso sistema otimizado, você pode receber seu certificado no mesmo dia útil após a aprovação da documentação."
    },
    {
      pergunta: "Como consultar o andamento da ANTT?",
      resposta: "Você pode acompanhar todo o processo através de nossa plataforma online, onde disponibilizamos atualizações em tempo real do status do seu pedido."
    },
    {
      pergunta: "Como solicitar um orçamento?",
      resposta: "Basta entrar em contato conosco via WhatsApp ou preencher o formulário em nossa página de contato. Nossa equipe retornará com um orçamento personalizado rapidamente."
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
            <AnimatedSection 
              className="lg:w-1/2 space-y-6"
              animation="slideFromLeft"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Portal Assessoria ANTT
              </h1>
              <p className="text-lg text-gray-600">
                Regularize sua ANTT de forma rápida, segura e sem burocracia. Nosso compromisso é facilitar sua vida com processos simplificados e atendimento especializado.
              </p>
              <AnimatedButton 
                href="#servicos-antt" 
                variant="primary"
                className="mt-4"
              >
                Ver Serviços
              </AnimatedButton>
            </AnimatedSection>
            
            <AnimatedSection 
              className="lg:w-1/2 relative"
              animation="slideFromRight"
            >
              <Image 
                src="/images/services/img-antt.png"
                alt="Serviços ANTT"
                width={750}
                height={500}
                className="object-cover rounded-2xl shadow-2xl"
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Serviços ANTT */}
      <section id="servicos-antt" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços ANTT
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades relacionadas à ANTT
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((servico, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={servico.imagem}
                    alt={servico.titulo}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute top-4 left-4 ${servico.cor} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                    {servico.titulo}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{servico.descricao}</p>
                  <AnimatedButton href="/contato" variant="primary" className="w-full">
                    {servico.botao}
                  </AnimatedButton>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF]">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              O Portal RNTRC tem o compromisso de Regularizar sua ANTT
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              O Portal RNTRC foi criado com intuito de desburocratizar processos para você que precisa regularizar sua ANTT com urgência, segurança e praticidade.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Dúvidas Frequentes
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {duvidas.map((duvida, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">{duvida.pergunta}</h3>
                <p className="text-gray-600">{duvida.resposta}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <WhatsAppButton 
        phoneNumber="5531992049301"
        message="Olá! Gostaria de mais informações sobre os serviços de ANTT da Logo Ali Tem."
      />
    </main>
  )
}
