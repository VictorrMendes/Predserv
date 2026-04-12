import React from 'react';
import { Hammer, Phone, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Hero() {
  return (
    <section className="relative bg-predserv-dark text-white pt-24 pb-36 overflow-hidden">
      
      {/* Estilos CSS Customizados para as novas animações do Background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pan-grid {
          0% { transform: translateY(0) }
          100% { transform: translateY(50px) }
        }
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-bg-grid {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: pan-grid 20s linear infinite;
        }
        .animate-slow-zoom {
          animation: ken-burns 30s alternate infinite ease-in-out;
        }
      `}} />

      {/* 1. Imagem de Fundo com Zoom Lento (Ken Burns) */}
      <div className="absolute inset-0 overflow-hidden opacity-15 mix-blend-overlay">
        <div className="animate-slow-zoom absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center w-full h-full" />
      </div>

      {/* 2. Grid Arquitetônico Animado (Deslizando infinitamente) */}
      <div className="absolute inset-0 -top-[50px] w-full h-[calc(100%+50px)] animate-bg-grid pointer-events-none mix-blend-overlay" />

      {/* 3. Gradientes e Orbs Originais (Mantidos) */}
      <div className="animate-gradient-pan absolute inset-0 bg-gradient-to-r from-predserv-teal/10 via-transparent to-predserv-yellow/10 pointer-events-none" />
      <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-predserv-teal/10 blur-3xl pointer-events-none" />
      <div className="animate-float-slow absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-predserv-yellow/10 blur-3xl pointer-events-none" />
      
      {/* Camada de Gradiente Escuro na Base para fundir com a próxima seção */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-predserv-dark to-transparent pointer-events-none z-0" />

      {/* CONTEÚDO PRINCIPAL (Z-INDEX SUPERIOR) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="animate-fade-up" style={{ animationDelay: '0.05s' }}>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 text-predserv-yellow border border-predserv-yellow/30 backdrop-blur-sm">
              <Hammer className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Engenharia e Construção Civil</span>
            </div>
            
            <h1 className="animate-fade-up text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg" style={{ animationDelay: '0.15s' }}>
              Onde a Qualidade Encontra a <span className="text-predserv-teal">Precisão Técnica</span>
            </h1>
            
            <p className="animate-fade-up text-white/85 text-xl mb-10 max-w-lg leading-relaxed drop-shadow-md" style={{ animationDelay: '0.25s' }}>
              Oferecemos soluções em serviços técnicos especializados de manutenção de ativos, operação de processos e intralogística para todos os setores da economia.
            </p>
            
            <div className="animate-fade-up flex flex-col sm:flex-row gap-5" style={{ animationDelay: '0.35s' }}>
              <a href="#servicos" className="hover-glow-strong bg-predserv-teal hover:bg-predserv-yellow text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,180,180,0.3)] hover:shadow-[0_0_25px_rgba(255,180,0,0.4)] transition-all duration-300">
                Conheça Nossos Serviços
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="animate-float-slow bg-white p-10 rounded-2xl shadow-2xl text-predserv-dark max-w-md ml-auto border-t-8 border-predserv-teal relative">
              <div className="absolute -top-6 -left-6 bg-predserv-yellow p-4 rounded-full text-white shadow-xl">
                  <CheckCircle className="h-8 w-8"/>
              </div>
              <h3 className="text-3xl font-extrabold mb-5 mt-2 leading-tight">Agende uma Visita Técnica</h3>
              <p className="text-predserv-dark/75 text-lg mb-8">Receba um orçamento detalhado e transparente para a sua obra.</p>
              
              <div className="space-y-5">
                <p className="text-predserv-dark/80 leading-relaxed">
                  Fale com nossa equipe e agende uma visita técnica sem compromisso. Vamos avaliar sua necessidade no local e montar um plano de execução com prazo e investimento claros.
                </p>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-lift bg-predserv-yellow hover:bg-predserv-teal text-white px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-md group"
                >
                  <Phone className="h-5 w-5 group-hover:animate-bounce" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}