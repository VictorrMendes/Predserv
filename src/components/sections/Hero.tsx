import React from 'react';
import { Hammer, Phone, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative bg-predserv-dark text-white pt-24 pb-36 overflow-hidden">
      <div className="animate-pulse-soft absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-overlay" />
      <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-predserv-teal/10 blur-3xl" />
      <div className="animate-float-slow absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-predserv-yellow/10 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 text-predserv-yellow border border-predserv-yellow/30">
              <Hammer className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Engenharia e Construção Civil</span>
            </div>
            
            <h1 className="animate-fade-up text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ animationDelay: '0.15s' }}>
              Onde a Qualidade Encontra a <span className="text-predserv-teal">Precisão Técnica</span>
            </h1>
            
            <p className="animate-fade-up text-gray-300 text-xl mb-10 max-w-lg leading-relaxed" style={{ animationDelay: '0.25s' }}>
              Transformamos espaços com segurança, rigor técnico e prazo garantido. Do drywall ao acabamento final, a Predserv é sua parceira de confiança.
            </p>
            
            <div className="animate-fade-up flex flex-col sm:flex-row gap-5" style={{ animationDelay: '0.35s' }}>
              <button className="bg-predserv-teal hover:bg-teal-700 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 shadow-lg transition-colors">
                Conheça Nossos Serviços
              </button>
              <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-colors">
                <Phone className="h-5 w-5" />
                Orçamento no WhatsApp
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="animate-float-slow bg-white p-10 rounded-2xl shadow-2xl text-predserv-dark max-w-md ml-auto border-t-8 border-predserv-teal relative">
              <div className="absolute -top-6 -left-6 bg-predserv-yellow p-4 rounded-full text-white shadow-xl">
                  <CheckCircle className="h-8 w-8"/>
              </div>
              <h3 className="text-3xl font-extrabold mb-5 mt-2 leading-tight">Agende uma Visita Técnica</h3>
              <p className="text-gray-600 text-lg mb-8">Receba um orçamento detalhado e transparente para a sua obra.</p>
              
              <form className="space-y-5">
                <input type="text" placeholder="Seu Nome Completo" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all" />
                <input type="tel" placeholder="Seu Telefone / WhatsApp" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-lg focus:ring-2 focus:ring-predserv-teal outline-none transition-all" />
                <button type="button" className="w-full bg-predserv-yellow hover:bg-yellow-500 text-white px-6 py-4 rounded-lg font-bold text-xl shadow-md transition-colors">
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}