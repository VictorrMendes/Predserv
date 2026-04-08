import React from 'react';
import { workflowList } from '@/data/content';

export default function Workflow() {
  return (
    <section className="py-24 bg-predserv-dark text-white relative overflow-hidden">
      <div className="animate-float-slow absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-predserv-teal rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="animate-fade-up text-center max-w-3xl mx-auto mb-20" style={{ animationDelay: '0.05s' }}>
          <h2 className="text-predserv-yellow font-bold uppercase tracking-wider text-sm mb-3">Como Trabalhamos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">Nosso Processo Passo a Passo</h3>
          <p className="text-gray-400 text-lg">Organização e transparência em todas as etapas para garantir a entrega perfeita do seu projeto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {workflowList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="animate-fade-up relative group"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {index !== workflowList.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] h-0.5 w-full bg-gray-700 transition-colors duration-300 group-hover:bg-predserv-teal"></div>
                )}
                <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-predserv-dark group-hover:border-predserv-teal transition-colors duration-300">
                  <Icon className="h-8 w-8 text-predserv-yellow group-hover:text-white transition-colors duration-300" />
                  <div className="absolute -top-2 -right-2 bg-predserv-teal text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-center font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-center text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}