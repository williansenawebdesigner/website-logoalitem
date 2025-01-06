import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'
import AnimatedButton from './components/AnimatedButton'

export default function Home() {
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
              <h1 className="text-[2.7rem] lg:text-[3.5rem] font-bold text-gray-800 leading-tight">
                SIMPLIFICANDO A <span className="text-[#1E4C9A] block">VIDA DO TRANSPORTADOR</span>
                EM CADA JORNADA.
              </h1>
              <p className="text-gray-600 text-lg max-w-xl">
                Tudo o que você precisa em um só lugar: desde cálculo de frete e assessoria jurídica até reboques e parcerias que garantam mais eficiência e segurança.
              </p>
              <div className="flex items-center gap-8 pt-4">
                <AnimatedButton href="#servicos" variant="primary">
                  Nossos Serviços
                </AnimatedButton>
                <AnimatedSection animation="fadeIn">
                  <div className="flex items-center gap-8 sm:gap-2">
                    <div className="flex -space-x-7">
                      <Image src="/images/hero/avatar-1.jpg" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                      <Image src="/images/hero/avatar-2.jpg" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                      <Image src="/images/hero/avatar-3.jpg" alt="Motorista" width={48} height={48} className="rounded-full border-2 border-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-[#1E4C9A]">13+</div>
                      <div className="text-sm text-gray-600 leading-4">Anos de Experiência</div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection 
              className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]"
              animation="slideFromRight"
            >
              <Image 
                src="/images/hero/img-hero.png" 
                alt="Transporte de Carga" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <AnimatedSection 
                className="absolute -bottom-6 -left-2 bg-white p-4 lg:p-6 rounded-xl shadow-lg"
                animation="fadeInUp"
              >
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
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <AnimatedSection 
            className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]"
            animation="slideFromLeft"
          >
            <Image 
              src="/images/services/img-sobre.png" 
              alt="Nossa História" 
              fill
              className="object-cover rounded-2xl shadow-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <AnimatedSection 
              className="absolute -bottom-8 -right-2 bg-[#1E4C9A] text-white p-4 lg:p-6 rounded-xl shadow-lg"
              animation="fadeInUp"
            >
              <div className="text-2xl lg:text-3xl font-bold">2010</div>
              <div className="text-sm">Ano de Fundação</div>
            </AnimatedSection>
          </AnimatedSection>
          <AnimatedSection 
            className="lg:w-1/2 space-y-6"
            animation="slideFromRight"
          >
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
          </AnimatedSection>
        </div>
      </section>

      {/* Nossos serviços */}
      <section id="servicos" className="bg-[#1E4C9A] text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-12 bg-white/90 mt-08 mb-20 lg:my-15 rounded-2xl shadow-lg">
            <h2 className="text-4xl lg:text-6xl font-bold text-left mb-4 text-black">
            Apoio completo para quem está sempre em movimento!
            </h2>
            <span className="text-left text-black/70 max-w-2xl mx-auto text-lx">
              <p>
              Na Logo Ali Tem, cada serviço é pensado para cuidar de você e do seu trajeto, garantindo tranquilidade e suporte em qualquer caminho.
              </p>
              <br></br>
              <span className="text-black font-bold text-[1.2rem]">Nossos serviços:</span>
            </span>
            </div>
          </AnimatedSection>
          
          <div className="space-y-20">
            <AnimatedSection 
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
              animation="slideFromLeft"
            >
              <AnimatedSection 
                className="lg:w-1/2 space-y-6"
                animation="slideFromLeft"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-100">Reboque 24h</h3>
                <p className="text-white/70 text-lg">
                Atendimento ágil e eficiente para emergências na estrada, garantindo que você e seu veículo estejam sempre protegidos, não importa a situação.                </p>
                <AnimatedButton href="/servicos/reboque" variant="secondary">
                  Solicitar reboque
                </AnimatedButton>
              </AnimatedSection>
              <AnimatedSection 
                className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]"
                animation="slideFromRight"
              >
                <Image 
                  src="/images/services/img-reboque.webp" 
                  alt="Serviço de Reboque"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedSection>
            </AnimatedSection>

            <AnimatedSection 
              className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12"
              animation="slideFromLeft"
            >
              <AnimatedSection 
                className="lg:w-1/2 space-y-6"
                animation="slideFromLeft"
              >
                <h3 id="munck" className="text-2xl lg:text-3xl font-bold text-gray-100">Munck</h3>
                <p className="text-white/70 text-lg">
                Serviço especializado no transporte e movimentação de cargas pesadas e equipamentos, atendendo às necessidades de quem lida com materiais de grande porte. 
                </p>
                <AnimatedButton href="/servicos/munck" variant="secondary">
                  Solicitar munck
                </AnimatedButton>
              </AnimatedSection>
              <AnimatedSection 
                className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]"
                animation="slideFromRight"
              >
                <Image 
                  src="/images/services/img-munck.png" 
                  alt="Serviço de Munck"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedSection>
            </AnimatedSection>

            <AnimatedSection 
              className="flex flex-col-reverse lg:flex-row items-center gap-12"
              animation="slideFromLeft"
            >
              <AnimatedSection 
                className="lg:w-1/2 space-y-6"
                animation="slideFromLeft"
              >
                <h3 id="acessoria" className="text-2xl lg:text-3xl font-bold text-gray-100">Assessoria Jurídica</h3>
                <p className="text-white/70 text-lg">
                Juridica: Suporte jurídico completo para motoristas, garantindo segurança e orientação em questões relacionadas ao transporte e aos seus direitos.                </p>
                <AnimatedButton href="/servicos/assessoria-juridica" variant="secondary">
                  Consultar assessoria
                </AnimatedButton>
              </AnimatedSection>
              <AnimatedSection 
                className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]"
                animation="slideFromRight"
              >
                <Image 
                  src="/images/services/img-acessoria.png"
                  alt="Assessoria Jurídica"
                  fill
                  className="object-cover rounded-2xl shadow-xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cálculo de Estadia e Frete */}
      <section id="calculo" className="py-20 bg-gradient-to-r from-[#EEF5FF] to-[#F5F9FF]">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl lg:text-4xl font-bold mb-4 text-gray-800 text-center">
              Cálculo de Estadia e Frete
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg text-center mb-16">
              Ferramenta gratuita para calcular valores de frete e estadia de acordo com a legislação vigente. Tenha controle total dos seus custos e garanta uma remuneração justa.
            </p>
          </AnimatedSection>
          
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <AnimatedSection 
              className="lg:w-1/2 space-y-6"
              animation="slideFromLeft"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Recursos da Ferramenta</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-6 h-6 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cálculo de frete por km rodado</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-6 h-6 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Estadia conforme legislação</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-6 h-6 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custos operacionais</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-6 h-6 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Relatórios detalhados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <AnimatedButton href="https://www.logoalitem.com.br/calcula-estadia/" variant="primary">
                    Calcular agora
                  </AnimatedButton>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection 
              className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[400px]"
              animation="slideFromRight"
            >
              <Image 
                src="/images/services/mockup-calculo-frete.png" 
                alt="Cálculo de Frete"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
