'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AnimatedSection from '../../components/AnimatedSection'
import AnimatedButton from '../../components/AnimatedButton'

interface Beneficio {
  icon: React.ReactNode
  titulo: string
  descricao: string
}

export default function Munck() {
  const beneficios: Beneficio[] = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titulo: "Equipamentos Certificados",
      descricao: "Utilizamos equipamentos modernos e certificados para garantir a segurança da operação"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titulo: "Equipe Especializada",
      descricao: "Profissionais treinados e experientes para cada tipo de operação"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#1E4C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titulo: "Atendimento Ágil",
      descricao: "Resposta rápida para suas necessidades de movimentação de carga"
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
                <span className="text-[#1E4C9A]">Munck</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Serviço de <span className="text-[#1E4C9A]">Munck</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Movimentação de cargas pesadas com segurança e eficiência. Nossa equipe especializada e equipamentos modernos garantem a melhor solução para suas necessidades.
              </p>
              <AnimatedButton href="/contato" variant="primary">
                Solicitar Orçamento
              </AnimatedButton>
            </div>
            <div className="lg:w-1/2 relative w-full min-h-[300px] lg:min-h-[500px]">
              <Image 
                src="/images/services/img-munck.png" 
                alt="Serviço de Munck" 
                fill
                className="object-cover rounded-2xl"
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
          <h2 className="text-white text-3xl font-bold mb-4">
            Precisa movimentar cargas pesadas?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Entre em contato conosco e solicite um orçamento para seu serviço.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <AnimatedButton href="/contato" variant="secondary">
              Solicitar Orçamento
            </AnimatedButton>
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