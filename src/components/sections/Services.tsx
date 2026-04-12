import React from 'react';
import { servicesList } from '@/data/content';

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="animate-fade-up text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">Nossas Especialidades</h2>
          <h3 className="text-5xl font-extrabold text-predserv-dark mb-6 tracking-tighter">Engenharia e Acabamento de Alto Padrão</h3>
          <p className="text-gray-600 text-xl leading-relaxed">
            Combinamos técnicas construtivas modernas com materiais de qualidade para entregar obras seguras e duráveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="animate-fade-up hover-glow-strong bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full group-hover:bg-predserv-teal transition-colors duration-300"></div>
                
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-predserv-teal transition-colors duration-300">
                  <Icon className="h-8 w-8 text-predserv-teal group-hover:text-white group-hover:animate-icon-bob transition-colors duration-300" />
                </div>
                
                <h4 className="text-2xl font-extrabold mb-4 text-predserv-dark tracking-tight relative z-10">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed text-md relative z-10">{service.description}</p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}