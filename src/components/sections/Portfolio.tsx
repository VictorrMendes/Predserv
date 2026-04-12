import React from 'react';
import { Plus } from 'lucide-react';
import { projectsList } from '@/data/content';

export default function Portfolio() {
  return (
    <section id="projetos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="animate-fade-up max-w-2xl" style={{ animationDelay: '0.05s' }}>
            <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">Nosso Portfólio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-predserv-dark tracking-tighter">
              Obras Entregues com Excelência
            </h3>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.12s' }}>
            <button className="bg-predserv-dark hover:bg-gray-800 text-white px-6 py-3 rounded-md font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Ver Todos os Projetos
            </button>
          </div>
        </div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsList.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-up group relative h-80 cursor-pointer overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-gray-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Container da Imagem com ajuste para não cortar (object-contain) */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-700 md:group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Escuro: Sempre visível no mobile (opacity-100), e hover no desktop (md:opacity-0 md:group-hover:opacity-100) */}
              <div className="absolute inset-0 bg-gradient-to-t from-predserv-dark/90 via-predserv-dark/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                
                {/* Ícone flutuante: Sem animação no mobile, animado no desktop */}
                <div className="absolute top-6 right-6 bg-predserv-yellow w-12 h-12 rounded-full flex items-center justify-center opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Plus className="h-6 w-6 text-white" />
                </div>

                {/* Textos: Fixos no mobile, deslizam para cima no desktop */}
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-predserv-yellow font-semibold text-sm uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="text-white text-2xl font-bold">
                    {project.title}
                  </h4>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}