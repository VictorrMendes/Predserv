import React from 'react';
import { CheckCircle } from 'lucide-react';
import { aboutData } from '@/data/content';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Imagem */}
          <div className="animate-fade-up relative" style={{ animationDelay: '0.05s' }}>
            <div className="absolute inset-0 bg-predserv-teal rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={aboutData.imageUrl} 
              alt="Equipe Predserv em obra" 
              className="animate-pulse-soft rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            
            {/* Badge flutuante */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-predserv-yellow hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-extrabold text-predserv-teal">+10</div>
                <div className="text-sm text-gray-600 font-bold leading-tight">Anos de<br/>Experiência</div>
              </div>
            </div>
          </div>

          {/* Textos */}
          <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-predserv-teal font-bold uppercase tracking-wider text-sm mb-3">{aboutData.title}</h2>
            <h3 className="text-4xl font-extrabold text-predserv-dark mb-6 leading-tight">{aboutData.headline}</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {aboutData.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {aboutData.topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-predserv-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{topic}</span>
                </li>
              ))}
            </ul>

            <a href="#contato" className="inline-flex bg-predserv-dark hover:bg-gray-800 text-white px-8 py-4 rounded-md font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg">
              Conheça Nossa História
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}