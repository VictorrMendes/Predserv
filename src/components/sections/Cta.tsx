import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Cta() {
  return (
    <section className="relative py-20 bg-predserv-teal overflow-hidden">
      {/* Círculos decorativos no fundo */}
      <div className="animate-float-slow absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="animate-float-slow absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-predserv-yellow opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Pronto para Transformar seu Espaço?
          </h2>
          <p className="text-teal-100 text-xl mb-10 max-w-2xl mx-auto">
            Não adie mais o seu projeto. Fale com nossos especialistas agora e receba um orçamento transparente em até 24 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="animate-fade-up bg-predserv-yellow hover:bg-yellow-500 text-white px-8 py-4 rounded-md font-bold text-lg shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2" style={{ animationDelay: '0.1s' }}>
              <Phone className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
            <a href="#contato" className="animate-fade-up bg-transparent border-2 border-white hover:bg-white hover:text-predserv-teal text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2" style={{ animationDelay: '0.18s' }}>
              Preencher Formulário
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}